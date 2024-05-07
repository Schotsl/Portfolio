"use client";

import styles from "./Header.module.scss";

import Image from "@/component/Image";
import useTypewriter from "react-typewriter-hook";

import { Image as ImageType } from "@/types";
import { useEffect, useState } from "react";
import { useCount } from "@/context/CountContext";
import Waves from "../Waves";

type HeaderProps = {
  small?: boolean;
  banner: ImageType;
  sentences: string[];
};

export default function Header({ small, banner, sentences }: HeaderProps) {
  const { smooth } = useCount();

  const [index, setIndex] = useState(0);

  const sentence = sentences[index];
  const subtitle = useTypewriter(sentence);

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
    <header
      className={
        small
          ? `${styles.header} ${styles["header--small"]}`
          : `${styles.header}`
      }
    >
      <Image image={banner} className={styles.header__image} sizes={"100vw"} />

      <div className={styles.header__content}>
        <h1 className={styles.header__content__title}>Sjors van Holst</h1>
        <h2 className={styles.header__content__subtitle}>{subtitle}</h2>
        {/* <p className={styles.header__content__content}>
          This month I&apos;ve informed over {Math.round(smooth)} people
        </p> */}
      </div>

      <Waves className={styles.header__waves} small={small} />
    </header>
  );
}
