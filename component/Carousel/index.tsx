"use client";

import styles from "./Carousel.module.scss";

import Image from "@/component/Image";

import { Project } from "@/types";
import { useEffect, useRef } from "react";

type CarouselProps = {
  projects: Project[];
};

export default function Carousel({ projects }: CarouselProps) {
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

  return (
    <ul className={styles.carousel} ref={carousel}>
      {projects.map((project, index) => (
        <li className={styles.carousel__item} key={index}>
          <Image image={project.image} sizes={"46rem"} />
        </li>
      ))}
    </ul>
  );
}
