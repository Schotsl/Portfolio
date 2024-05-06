"use client";

import styles from "./Header.module.scss";

import Image from "@/component/Image";
import useTypewriter from "react-typewriter-hook";

import { Image as ImageType } from "@/types";
import { useEffect, useState, useRef } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { useCount } from "@/context/CountContext";

type HeaderProps = {
  banner: ImageType;
};

const sentences = [
  "A great developer, a pretty good designer",
  "Being laughed at while playing VR outside",
  "Creating yet another GitHub repository",
];

export default function Header({ banner }: HeaderProps) {
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
    <header className={styles.header}>
      <Image image={banner} className={styles.header__image} sizes={"100vw"} />

      <h1 className={styles.header__title}>Sjors van Holst</h1>
      <h2 className={styles.header__subtitle}>{subtitle}</h2>
      <p className={styles.header__content}>
        This month I&apos;ve informed over {Math.round(smooth)} people
      </p>

      <div className={styles.header__waves}>
        <ParallaxProvider>
          <Parallax speed={0}>
            <svg
              className={styles.header__waves__wave}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#0099ff"
                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </Parallax>

          <Parallax translateY={[-50, -35]}>
            <svg
              className={styles.header__waves__wave}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#a2d9ff"
                d="M0,32L80,37.3C160,43,320,53,480,80C640,107,800,149,960,154.7C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </Parallax>

          <Parallax translateY={[-90, -60]}>
            <svg
              className={styles.header__waves__wave}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#ffffff"
                d="M0,128L80,133.3C160,139,320,149,480,165.3C640,181,800,203,960,181.3C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </Parallax>
        </ParallaxProvider>
      </div>
    </header>
  );
}
