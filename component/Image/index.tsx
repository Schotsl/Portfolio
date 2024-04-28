"use client";

import styles from "./Image.module.scss";

import NextImage from "next/image";

import { Image as ImageType } from "@/types";
import { useState } from "react";

type ImageProps = {
  image: ImageType;
  sizes: string;
  quality: number;
  className?: string;
};

export default function Image({
  image: { src, alt, blur, width, height },
  sizes,
  quality,
  className,
}: ImageProps) {
  const [loading, setLoading] = useState(true);

  function onLoad() {
    setLoading(false);
  }

  return (
    <div className={styles.image}>
      <NextImage
        src={src}
        alt={alt}
        sizes={sizes}
        width={width}
        height={height}
        onLoad={onLoad}
        quality={quality}
        className={`${styles.image__image} ${className}`}
      />

      {loading && (
        <div className={styles.image__overlay}>
          {/* eslint-disable-next-line */}
          <img
            src={`data:image/svg+xml;base64,${blur}`}
            alt={alt}
            className={styles.image__overlay__blur}
          />

          <div className={styles.image__overlay__loader}>
            <div className={styles.image__overlay__loader__dot}></div>
            <div className={styles.image__overlay__loader__dot}></div>
            <div className={styles.image__overlay__loader__dot}></div>
            <div className={styles.image__overlay__loader__dot}></div>
            <div className={styles.image__overlay__loader__dot}></div>
            <div className={styles.image__overlay__loader__dot}></div>
            <div className={styles.image__overlay__loader__dot}></div>
            <div className={styles.image__overlay__loader__dot}></div>
            <div className={styles.image__overlay__loader__dot}></div>
          </div>
        </div>
      )}
    </div>
  );
}
