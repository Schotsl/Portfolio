import styles from "./Project.module.scss";

import Waves from "../Waves";
import ProjectItem from "./Item";

import { Project } from "@/types";
import { marked } from "marked";

type ProjectProps = {
  title: string;
  content: string;
  projects: Project[];
};

export default function Projects({ title, content, projects }: ProjectProps) {
  return (
    <section className={styles.project}>
      <h2 className={styles.project__title}>{title}</h2>

      <div
        className={styles.project__content}
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      ></div>

      <Waves className={styles.project__waves} />

      <ul className={styles.project__list}>
        {projects.map((project, index) => (
          <ProjectItem key={index} index={index} project={project} />
        ))}
      </ul>
    </section>
  );
}
