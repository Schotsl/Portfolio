"use client";

import styles from "./Header.module.scss";

import Waves from "../WavesPartial";
import Image from "@/component/Image";
import useTypewriter from "react-typewriter-hook";

import { Image as ImageType } from "@/types";
import { useEffect, useState } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Link from "next/link";

type HeaderProps = {
  title?: string;
  back?: ImageType;
  front?: ImageType;
  taglines: string[];
};

export default function Header({
  title = "Sjors van Holst",
  back,
  front,
  taglines,
}: HeaderProps) {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

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
  }, [taglines.length]);

  return (
    <ParallaxProvider>
      <header className={styles.header}>
        {back && front && (
          <div className={styles.header__image}>
            <Parallax
              translateY={[-12, 30]}
              className={styles.header__image__parallax}
            >
              <Image
                image={front}
                sizes={"100vw"}
                quality={100}
                preview={false}
                priority={true}
                className={
                  loaded
                    ? `${styles.header__image__parallax__front}`
                    : `${styles.header__image__parallax__front} ${styles["header__image__parallax__front--transparent"]}`
                }
              />
            </Parallax>

            <Parallax
              translateY={[-9.6, 24]}
              className={styles.header__image__parallax}
            >
              <Image
                image={back}
                sizes={"50vw"}
                quality={100}
                priority={true}
                className={styles.header__image__parallax__back}
                onLoad={() => setLoaded(true)}
              />
            </Parallax>
          </div>
        )}

        <div className={styles.header__content}>
          <Link className={styles.header__content__link} href="/">
            <h1 className={styles.header__content__link__title}>{title}</h1>
          </Link>

          <h2 className={styles.header__content__subtitle}>{subtitle}</h2>
        </div>

        <Waves className={styles.header__waves} />
      </header>
    </ParallaxProvider>
  );
}
