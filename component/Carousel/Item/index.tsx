import styles from "./CarouselItem.module.scss";

import { Project } from "@/types";
import { useEffect, useRef } from "react";

import Image from "@/component/Image";

type CarouselItemProps = {
  index: number;
  active: boolean;
  project: Project;
};

export default function CarouselItem({
  index,
  active,
  project: { slug, title, intro, video, image },
}: CarouselItemProps) {
  const player = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!player.current) {
      return;
    }

    const updatePlay = async () => {
      if (active) {
        await player.current!.play();
      } else if (player.current) {
        player.current.pause();
        player.current.currentTime = 0;
      }
    };

    updatePlay();
  }, [active, ]);

  return (
    <li
      key={index}
      className={
        active ? `${styles.item} ${styles["item--active"]}` : `${styles.item}`
      }
    >
      <a href={`/${slug}`}>
        <video className={styles.item__video} ref={player} muted autoPlay loop>
          <source src={video} type="video/mp4" />
        </video>

        <Image
          image={image}
          sizes={"(min-width: 768px) 46rem, 80vw"}
          priority={index === 0}
          className={styles.item__image}
        />

        <div className={styles.item__overlay}>
          <h2 className={styles.item__overlay__title}>{title}</h2>
          <p className={styles.item__overlay__content}>{intro}</p>
        </div>
      </a>
    </li>
  );
}
