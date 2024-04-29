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
    if (active && player.current) {
      player.current.play();
    } else if (player.current) {
      player.current.pause();
      player.current.currentTime = 0;
    }
  }, [active]);

  return (
    <li
      key={index}
      className={
        active ? `${styles.item} ${styles["item--active"]}` : `${styles.item}`
      }
    >
      <a href={`/${slug}`}>
        <Image
          image={image}
          sizes={"(min-width: 768px) 46rem, 80vw"}
          priority={index === 0}
          className={styles.item__image}
        />

        <video className={styles.item__video} ref={player} muted autoPlay loop>
          <source src={video} type="video/mp4" />
        </video>

        <div className={styles.item__overlay}>
          <h2 className={styles.item__overlay__title}>{title}</h2>
          <p className={styles.item__overlay__content}>{intro}</p>
        </div>
      </a>
    </li>
  );
}
