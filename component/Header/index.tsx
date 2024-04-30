"use client";

import styles from "./Header.module.scss";

import Image from "@/component/Image";
import useTypewriter from "react-typewriter-hook";

import { Image as ImageType } from "@/types";
import { useEffect, useState, useRef } from "react";

type HeaderProps = {
  banner: ImageType;
};

const sentences = [
  "A great developer, a pretty good designer",
  "Being laughed at while playing VR outside",
  "Creating yet another GitHub repository",
];

export default function Header({ banner }: HeaderProps) {
  const [count, setCount] = useState(23433);
  const [index, setIndex] = useState(0);

  const sentence = sentences[index];
  const subtitle = useTypewriter(sentence);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((previous) => {
        const countIncrease = Math.floor(Math.random() * 10);
        const countNext = previous + countIncrease;

        return countNext;
      });
    }, 100);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((previous) => {
        const indexNew = previous + 1;
        const indexNext = indexNew >= sentences.length ? 0 : indexNew;

        return indexNext;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className={styles.header}>
      <Image image={banner} className={styles.header__image} sizes={"100vw"} />

      <h1 className={styles.header__title}>Sjors van Holst</h1>
      <h2 className={styles.header__subtitle}>{subtitle}</h2>
      <p className={styles.header__content}>
        This month I&apos;ve informed over {count} people
      </p>
    </header>
  );
}
