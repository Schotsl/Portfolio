import fs from "fs";
import sharp from "sharp";

import { Image } from "./types";

export async function getCollection<T>(path: string): Promise<T[]> {
  const collectionPath = `${process.cwd()}/public/content/${path}`;
  const collectionNames = fs.readdirSync(collectionPath);
  const collectionFiltered = collectionNames.filter((collectionName) =>
    collectionName.endsWith(".json"),
  );

  const collectionPromises = collectionFiltered.map(async (itemName) => {
    const itemPath = `${collectionPath}/${itemName}`;

    const itemObject = fs.readFileSync(itemPath, "utf8");
    const itemParsed = JSON.parse(itemObject);

    const { image, images, categories } = itemParsed;

    if (image) {
      itemParsed.image = await getImage(image);
    }

    if (images) {
      const imagesPromises = images.map((imageObject: any) => {
        const image = imageObject.image;
        const imagePromise = getImage(image);

        return imagePromise;
      });
      
      itemParsed.images = await Promise.all(imagesPromises);
    }

    if (categories) {
      const categoriesMapped = categories.map((categoryObject: any) => {
        const category = categoryObject.category;
        const categoryLower = category.toLowerCase();
        return categoryLower;
      });

      itemParsed.categories = categoriesMapped.sort();
    }

    return itemParsed as T;
  });

  const collectionResolved = await Promise.all(collectionPromises);
  return collectionResolved;
}

export async function getImage({ src, alt }: {src: string, alt: string}): Promise<Image> {
  const imagePath = `${process.cwd()}/public/${src}`;
  const imageBuffer = fs.readFileSync(imagePath);

  const imageSharp = sharp(imageBuffer);
  const imageResized = await imageSharp.resize(8).toBuffer();

  const { width, height } = await imageSharp.metadata();

  const ImageBase64 = imageResized.toString("base64");
  const ImageSVG = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'>
      <filter id="blur" x="0%" y="0%" width="100%" height="100%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.25"/>
          <feComponentTransfer>
          <feFuncA type="discrete" tableValues="1 1"/>
        </feComponentTransfer>
      </filter>

      <image preserveAspectRatio='none' filter='url(#blur)' x='0' y='0' height='100%' width='100%' href='data:image/avif;base64,${ImageBase64}' />
    </svg>
  `;

  const blurBuffer = Buffer.from(ImageSVG);
  const blurBase64 = blurBuffer.toString("base64");

  return {
    src,
    alt,
    blur: blurBase64,
    width: width!,
    height: height!,
  };
}
