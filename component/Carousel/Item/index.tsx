import styles from "./CarouselItem.module.scss";

import { Project } from "@/types";
import { useEffect, useRef, useState } from "react";

import Image from "@/component/Image";
import Categories from "@/component/Categories";

type CarouselItemProps = {
  index: number;
  active: boolean;
  project: Project;
};

export default function CarouselItem({
  index,
  active,
  project: { slug, title, intro, video, image, categories },
}: CarouselItemProps) {
  const player = useRef<HTMLVideoElement>(null);

  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (!player.current || updating) {
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
  }, [active, updating]);

  return (
    <li
      key={index}
      className={
        active ? `${styles.item} ${styles["item--active"]}` : `${styles.item}`
      }
    >
      <a href={`/project/${slug}`}>
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
          {categories && (
            <Categories
              className={styles.item__overlay__categories}
              categories={categories}
            />
          )}

          <h2 className={styles.item__overlay__title}>{title}</h2>
          <p className={styles.item__overlay__content}>{intro}</p>
        </div>
      </a>
    </li>
  );
}
