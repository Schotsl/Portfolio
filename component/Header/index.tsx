"use client";

import styles from "./Header.module.scss";

import Waves from "../WavesPartial";
import Image from "@/component/Image";
import useTypewriter from "react-typewriter-hook";

import { Image as ImageType } from "@/types";
import { useEffect, useState } from "react";

type HeaderProps = {
  small?: boolean;
  title?: string;
  banner: ImageType;
  taglines: string[];
};

export default function Header({
  small,
  title = "Sjors van Holst",
  banner,
  taglines,
}: HeaderProps) {
  const [index, setIndex] = useState(0);

  const sentence = taglines[index];
  const subtitle = useTypewriter(sentence);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((previous) => {
        const indexNew = previous + 1;
        const indexNext = indexNew >= taglines.length ? 0 : indexNew;

        return indexNext;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className={
        small
          ? `${styles.header} ${styles["header--small"]}`
          : `${styles.header}`
      }
    >
      <Image
        image={banner}
        sizes={"100vw"}
        priority={true}
        className={styles.header__image}
      />

      <div className={styles.header__content}>
        <h1 className={styles.header__content__title}>{title}</h1>
        <h2 className={styles.header__content__subtitle}>{subtitle}</h2>
      </div>

      <Waves className={styles.header__waves} small={small} />
    </header>
  );
}
