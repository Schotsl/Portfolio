"use client";

import styles from "./Header.module.scss";
import useTypewriter from "react-typewriter-hook";
import Image from "@/component/Image";

import { Image as ImageType } from "@/types";
import { useEffect, useState } from "react";

type HeaderProps = {
  banner: ImageType;
}

export default function Header({ banner}: HeaderProps) {
  const [count, setCount] = useState(23433);

  const subtitle = useTypewriter("A great developer, a pretty good designer");

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + Math.floor(Math.random() * 10));
    }, 100);

    return () => clearInterval(interval);
  });

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
