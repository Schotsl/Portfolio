"use client";

import styles from "./Image.module.scss";

import NextImage from "next/image";

import { Image as ImageType } from "@/types";
import { useState } from "react";

type ImageProps = {
  image: ImageType;
  sizes: string;
  quality?: number;
  preview?: boolean;
  priority?: boolean;
  className?: string;
  onLoad?: () => void;
};

export default function Image({
  image: { src, alt, blur, width, height },
  sizes,
  quality = 75,
  preview = true,
  priority = false,
  className,
  onLoad: onLoadProps,
}: ImageProps) {
  const [loading, setLoading] = useState(true);

  function onLoad() {
    setLoading(false);

    onLoadProps?.();
  }

  return (
    <div
      style={{ aspectRatio: `${width}/${height}` }}
      className={`${styles.image} ${className}`}
    >
      <NextImage
        src={src}
        alt={alt}
        sizes={sizes}
        width={width}
        height={height}
        onLoad={onLoad}
        quality={quality}
        priority={priority}
        className={styles.image__image}
      />

      {loading && preview && (
        <div className={styles.image__overlay}>
          <div className={styles.image__overlay__image}>
            {/* eslint-disable-next-line */}
            <img
              src={`data:image/svg+xml;base64,${blur}`}
              alt={alt}
              className={styles.image__overlay__image__blur}
            />
          </div>

          <div className={styles.image__overlay__skeleton}></div>
        </div>
      )}
    </div>
  );
}
