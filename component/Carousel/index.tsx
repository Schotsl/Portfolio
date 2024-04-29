"use client";

import styles from "./Carousel.module.scss";

import CarouselItem from "./Item";

import { Project } from "@/types";
import { useEffect, useRef, useState } from "react";

type CarouselProps = {
  projects: Project[];
};

export default function Carousel({ projects }: CarouselProps) {
  const [slide, setSlide] = useState(0);

  const carousel = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!carousel.current) {
      return;
    }
    
    // Center the carousel on load
    const carouselWidth = carousel.current.offsetWidth;
    const carouselHalf = carouselWidth / 2;

    carousel.current.scrollTo({
      left: carouselHalf,
      behavior: "smooth",
    });
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
        <CarouselItem
          key={index}
          index={index}
          active={index === slide}
          project={project}
        />
      ))}
    </ul>
  );
}
