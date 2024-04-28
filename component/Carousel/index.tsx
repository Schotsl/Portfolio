"use client";

import styles from "./Carousel.module.scss";

import Image from "@/component/Image";

import { Project } from "@/types";
import { useEffect, useRef, useState } from "react";

type CarouselProps = {
  projects: Project[];
};

export default function Carousel({ projects }: CarouselProps) {
  const [slide, setSlide] = useState(0);

  const carousel = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // Center the carousel on load
    if (carousel.current) {
      const carouselWidth = carousel.current.offsetWidth;
      const carouselHalf = carouselWidth / 2;

      carousel.current.scrollTo({
        left: carouselHalf,
        behavior: "smooth",
      });
    }
  }, []);

  function onScroll() {
    if (carousel.current) {
      const scrollLeft = carousel.current.scrollLeft;
      const scrollItem = carousel.current.scrollWidth / projects.length;
      const scrollIndex = Math.round(scrollLeft / scrollItem);
      
      setSlide(scrollIndex);
    }
  }

  return (
    <ul className={styles.carousel} ref={carousel} onScroll={onScroll}>
      {projects.map((project, index) => (
        <li
          key={index}
          className={
            index === slide
              ? `${styles.carousel__item} ${styles["carousel__item--active"]}`
              : `${styles.carousel__item}`
          }
        >
          <Image image={project.image} sizes={"46rem"} />
        </li>
      ))}
    </ul>
  );
}
