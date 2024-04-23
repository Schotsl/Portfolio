import styles from "./Image.module.scss";

import fs from "fs";
import sharp from "sharp";
import NextImage from "next/image";

type ImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  quality?: number;
};

export default async function Image({ src, alt, sizes, quality = 75 }: ImageProps) {
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
    <NextImage
      src={src}
      alt={alt}
      sizes={sizes}
      width={width}
      height={height}
      quality={quality}
      className={styles.image}
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${blurBase64}`}
    />
  );
}
