import styles from "./RootProject.module.scss";

import Waves from "@/component/WavesPartial";
import RootProjectItem from "./Item";

import { Project } from "@/types";
import { marked } from "marked";

type RootProjectProps = {
  title: string;
  content: string;
  projects: Project[];
};

export default function RootProject({
  title,
  content,
  projects,
}: RootProjectProps) {
  return (
    <section className={styles.project} id="project">
      <h2 className={styles.project__title}>{title}</h2>

      <div
        className={styles.project__content}
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      ></div>

      {/* <Waves className={styles.project__waves} /> */}

      <ul className={styles.project__list}>
        {projects.map((project, index) => (
          <RootProjectItem key={index} index={index} project={project} />
        ))}
      </ul>
    </section>
  );
}
