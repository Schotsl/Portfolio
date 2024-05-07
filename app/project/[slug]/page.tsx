import styles from "./page.module.scss";

import { getCollection, getImage } from "@/helper";
import { Project } from "@/types";

import Header from "@/component/Header";

// export const dynamicParams = false;

// export async function generateStaticParams() {
//   const projects = await getCollection<Project>("project");
//   const projectsSlug = projects.map((project) => ({
//     slug: project.slug,
//   }));

//   return projectsSlug;
// }

export default async function Page({ params }: { params: { slug: string } }) {
  const banner = await getImage("/images/banner.png", "Me");

  const projects = await getCollection<Project>("project");
  const project = projects.find((project) => project.slug === params.slug);

  return (
    <main className={styles.main}>
      <Header banner={banner} sentences={["Looking for this page"]} />

      <h1>Project {JSON.stringify(project)}</h1>
    </main>
  );
}
