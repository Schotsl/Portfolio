import styles from "./CarouselItem.module.scss";

import { CarouselItem as CarouselItemType } from "@/types";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import Image from "@/component/Image";
import Categories from "@/component/Categories";

type CarouselItemProps = {
  item: CarouselItemType;
  index: number;
  active: boolean;
  onClick: (index: number) => void;
};

export default function CarouselItem({
  item,
  index,
  active,
  onClick,
}: CarouselItemProps) {
  const { slug } = item;

  return (
    <li
      key={index}
      className={
        active ? `${styles.item} ${styles["item--active"]}` : `${styles.item}`
      }
      onClick={() => onClick(index)}
    >
      {slug ? (
        <Link className={styles.item__link} href={`/project/${slug}`}>
          <CarouselItemInner index={index} active={active} item={item} />
        </Link>
      ) : (
        <CarouselItemInner index={index} active={active} item={item} />
      )}
    </li>
  );
}

function CarouselItemInner({
  item: { title, intro, bunny, image, categories },
  index,
  active,
}: CarouselItemProps) {
  const source = `/video/${bunny}/play_720p.mp4`;
  const player = useRef<HTMLVideoElement>(null);

  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (!player.current || !bunny || updating) {
      return;
    }

    const updatePlay = async () => {
      setUpdating(true);

      if (active) {
        await player.current!.play();
      } else if (player.current) {
        player.current.pause();
        player.current.currentTime = 0;
      }

      setUpdating(false);
    };

    updatePlay();
  }, [active, bunny, updating]);

  useEffect(() => {
    const playerCurrent = player.current!;

    const handleVideoEnd = () => {
      setTimeout(() => {
        playerCurrent.play();
      }, 1000);
    };

    playerCurrent?.addEventListener("ended", handleVideoEnd);

    return () => {
      playerCurrent?.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  return (
    <>
      {bunny && (
        <video
          ref={player}
          muted
          preload="none"
          className={styles.item__video}
          playsInline
          webkit-playsinline
        >
          <source src={source} type="video/mp4" />
        </video>
      )}

      <Image
        image={image}
        sizes={"(min-width: 1400px) 32%, (min-width: 768px) 48%, 100vw"}
        priority={index === 0}
        className={styles.item__image}
      />

      <div className={styles.item__overlay}>
        {categories && (
          <Categories
            className={styles.item__overlay__categories}
            categories={categories}
          />
        )}

        {title && <h2 className={styles.item__overlay__title}>{title}</h2>}
        {intro && <p className={styles.item__overlay__content}>{intro}</p>}
      </div>
    </>
  );
}
