"use client";

import styles from "./Project.module.scss";

import Waves from "../Waves";
import ProjectItem from "./Item";

import { Project } from "@/types";

type ProjectProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectProps) {
  return (
    <section className={styles.project}>
      <h2 className={styles.project__title}>All my projects</h2>
      <p className={styles.project__content}>
        You&apos;ve already seen my most recent and favorite work at the top of
        the website, here are more projects worth sharing!
      </p>

      <Waves className={styles.project__waves} />

      <ul className={styles.project__list}>
        {projects.map((project, index) => (
          <ProjectItem key={index} index={index} project={project} />
        ))}
      </ul>
    </section>
  );
}
