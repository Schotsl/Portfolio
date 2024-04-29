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
  project,
}: CarouselItemProps) {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (active && video.current) {
      video.current.play();
    } else if (video.current) {
      video.current.pause();
      video.current.currentTime = 0;
    }
  }, [active]);

  return (
    <li
      key={index}
      className={
        active ? `${styles.item} ${styles["item--active"]}` : `${styles.item}`
      }
    >
      <a href="/uwuifier">
        <Image
          image={project.image}
          sizes={"(min-width: 768px) 46rem, 80vw"}
          className={styles.item__image}
        />

        <video ref={video} muted autoPlay className={styles.item__video}>
          <source src={project.video} type="video/mp4" />
        </video>

        <div className={styles.item__overlay}>
          <h2 className={styles.item__overlay__title}>{project.title}</h2>
          <p className={styles.item__overlay__content}>
            Lorum ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tristique, odio ac fermentum semper, sapien mi ultrices odio, nec
            ultricies ligula elit sit amet nunc. Nullam auctor, odio ac
          </p>
        </div>
      </a>
    </li>
  );
}
