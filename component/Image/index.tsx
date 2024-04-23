import styles from "./Image.module.scss";

import fs from "fs";
import sizeOf from "buffer-image-size";
import NextImage from "next/image";

type ImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  quality?: number;
};

const toBase64 = (value: string) =>
  typeof window === "undefined"
    ? Buffer.from(value).toString("base64")
    : window.btoa(value);

export default async function Image({ src, alt, sizes, quality = 75 }: ImageProps) {
  const image = fs.readFileSync(`${process.cwd()}/public/${src}`);

  const { width, height } = sizeOf(image);

  const imageUrl = `https://portfolio-two-mu-45.vercel.app/_next/image?url=${src}&w=16&q=75`;
  const imageResponse = await fetch(imageUrl);

  const blurBuffer = await imageResponse.arrayBuffer();
  const blurBase64 = Buffer.from(blurBuffer).toString("base64");
  const blurSVG = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'>
      <filter id="blur" x="0%" y="0%" width="100%" height="100%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.5"/>
          <feComponentTransfer>
          <feFuncA type="discrete" tableValues="1 1"/>
        </feComponentTransfer>
      </filter>

      <image preserveAspectRatio='none' filter='url(#blur)' x='0' y='0' height='100%' width='100%' href='data:image/avif;base64,${blurBase64}' />
    </svg>
  `;

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
      blurDataURL={`data:image/svg+xml;base64,${toBase64(blurSVG)}`}
    />
  );
}
