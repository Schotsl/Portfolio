"use client";

import styles from "./Carousel.module.scss";

import CarouselItem from "./Item";

import { CarouselItem as CarouselItemType } from "@/types";
import { useEffect, useRef, useState } from "react";

type CarouselProps = {
  items: CarouselItemType[];
  center?: boolean;
  overlay?: number;
};

export default function Carousel({ items, center, overlay }: CarouselProps) {
  const [index, setIndex] = useState(0);

  const carousel = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const indexCurrent = getIndex();

    // Update the index if it's different
    if (indexCurrent !== index) {
      setIndex(indexCurrent);
    }

    // Center the carousel if requested
    if (!center) {
      return;
    }

    // Don't slide if the user is already on a different index
    if (indexCurrent !== 0) {
      return;
    }

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

  function getIndex() {
    if (!carousel.current) {
      return 0;
    }

    const scrollLeft = carousel.current.scrollLeft;
    const scrollItem = carousel.current.children[0].clientWidth;
    const scrollIndex = Math.round(scrollLeft / scrollItem);

    return scrollIndex;
  }

  function onScroll() {
    const indexCurrent = getIndex();

    // Only update the index if it's different
    if (indexCurrent !== index) {
      setIndex(indexCurrent);
    }
  }

  function handleClick(itemIndex: number) {
    if (!carousel.current) {
      return;
    }

    const itemElement = carousel.current.children[itemIndex] as HTMLElement;
    const itemWidth = itemElement.offsetWidth;

    carousel.current.scrollTo({
      left: itemIndex * itemWidth,
      behavior: "smooth",
    });
  }

  return (
    <ul className={styles.carousel} ref={carousel} onScroll={onScroll}>
      {items.map((item, itemIndex) => (
        <CarouselItem
          key={itemIndex}
          item={item}
          index={itemIndex}
          active={itemIndex === index}
          overlay={itemIndex === overlay}
          onClick={handleClick}
        />
      ))}
    </ul>
  );
}
