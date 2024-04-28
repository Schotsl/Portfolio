import fs from "fs";
import sharp from "sharp";
import ImageClient from "./Client";

type ImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  quality?: number;
};

export default async function Image({
  src,
  alt,
  sizes,
  quality = 75,
}: ImageProps) {
  console.log("Creating image blur");

  const imagePath = `${process.cwd()}/public/${src}`;
  const imageBuffer = fs.readFileSync(imagePath);

  const imageSharp = sharp(imageBuffer);
  const imageResized = await imageSharp.resize(8).toBuffer();

  const { width, height } = await imageSharp.metadata();

  const ImageBase64 = imageResized.toString("base64");
  const ImageSVG = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'>
      <filter id="blur" x="0%" y="0%" width="100%" height="100%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.5"/>
          <feComponentTransfer>
          <feFuncA type="discrete" tableValues="1 1"/>
        </feComponentTransfer>
      </filter>

      <image preserveAspectRatio='none' filter='url(#blur)' x='0' y='0' height='100%' width='100%' href='data:image/avif;base64,${ImageBase64}' />
    </svg>
  `;

  const blurBuffer = Buffer.from(ImageSVG);
  const blurBase64 = blurBuffer.toString("base64");

  return (
    <ImageClient
      src={src}
      alt={alt}
      sizes={sizes}
      width={width!}
      height={height!}
      base64={blurBase64}
      quality={quality}
    />
  );
}
