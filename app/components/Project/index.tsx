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
  const projectOrder = [
    "Overworked",
    "Presently",
    "Toolenburgerplas",
    "MijnHvA",
    "Meesterproef",
    "Spinner",
    "Typografie",
    "Melted",
    "Lxframes",
    "Kruidenpower",
    "Nicole Trompetter",
    "ZonneVeranda",
    "Uwuifier",
    "Mailgun",
    "Plausible",
  ];

  // Sort based on the title
  projects.sort((a, b) => {
    return projectOrder.indexOf(a.title) - projectOrder.indexOf(b.title);
  });

  return (
    <section className={styles.project} id="project">
      <h2 className={styles.project__title}>{title}</h2>

      <div
        className={styles.project__content}
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      ></div>

      <ul className={styles.project__list}>
        {projects.map((project, index) => (
          <RootProjectItem key={index} index={index} project={project} />
        ))}
      </ul>
    </section>
  );
}
