"use client";

import styles from "./ImageClient.module.scss";

import NextImage from "next/image";

import { useState } from "react";

type ImageClientProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  base64: string;
  quality: number;
  sizes?: string;
};

export default function ImageClient({
  src,
  alt,
  width,
  height,
  base64,
  sizes,
  quality,
}: ImageClientProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div className={styles.image}>
      <NextImage
        src={src}
        alt={alt}
        sizes={sizes}
        width={width}
        height={height}
        onLoad={() => setLoading(false)}
        quality={quality}
        className={styles.image__image}
      />

      {loading && (
        <div className={styles.image__overlay}>
          {/* eslint-disable-next-line */}
          <img
            src={`data:image/svg+xml;base64,${base64}`}
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
