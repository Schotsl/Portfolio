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
      video.current.currentTime = 0;
      video.current.play();
    } else if (video.current) {
      video.current.pause();
    }
  }, [active]);

  return (
    <li
      key={index}
      className={
        active ? `${styles.item} ${styles["item--active"]}` : `${styles.item}`
      }
    >
      <Image
        image={project.image}
        sizes={"(min-width: 768px) 46rem, 80vw"}
        className={styles.item__image}
      />

      <video ref={video} muted autoPlay className={styles.item__video}>
        <source src={project.video} type="video/mp4" />
      </video>
    </li>
  );
}
