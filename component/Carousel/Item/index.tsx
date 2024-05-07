import styles from "./CarouselItem.module.scss";

import { CarouselItem as CarouselItemType } from "@/types";
import { useEffect, useRef, useState } from "react";

import Image from "@/component/Image";
import Categories from "@/component/Categories";

type CarouselItemProps = {
  item: CarouselItemType;
  index: number;
  active: boolean;
};

export default function CarouselItem({
  item,
  index,
  active,
}: CarouselItemProps) {
  const { slug } = item;

  return (
    <li
      key={index}
      className={
        active ? `${styles.item} ${styles["item--active"]}` : `${styles.item}`
      }
    >
      {slug ? (
        <a className={styles.item__link} href={`/project/${slug}`}>
          <CarouselItemInner index={index} active={active} item={item} />
        </a>
      ) : (
        <CarouselItemInner index={index} active={active} item={item} />
      )}
    </li>
  );
}

function CarouselItemInner({
  item: { title, intro, video, image, categories },
  index,
  active,
}: CarouselItemProps) {
  const player = useRef<HTMLVideoElement>(null);

  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (!player.current || !video || updating) {
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
  }, [active, video, updating]);

  return (
    <>
      {video && (
        <video className={styles.item__video} ref={player} muted autoPlay loop>
          <source src={video} type="video/mp4" />
        </video>
      )}

      <Image
        image={image}
        sizes={"(min-width: 768px) 46rem, 80vw"}
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
