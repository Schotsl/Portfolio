import styles from "./Carousel.module.scss";

import Image from "@/component/Image";

import { Project } from "@/types";

type CarouselProps = {
  projects: Project[];
};

export default function Carousel({ projects }: CarouselProps) {
  return (
    <ul className={styles.carousel}>
      {projects.map((project, index) => (
        <li className={styles.carousel__item} key={index}>
          <Image src={project.image} alt={project.title} sizes={"46rem"} />
        </li>
      ))}
    </ul>
  );
}
