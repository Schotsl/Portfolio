import styles from "./page.module.scss";

import { getCollection, getImage } from "@/helper";
import { Project } from "@/types";

import Header from "@/component/Header";
import Carousel from "@/component/Carousel";

// export const dynamicParams = false;

// export async function generateStaticParams() {
//   const projects = await getCollection<Project>("project");
//   const projectsSlug = projects.map((project) => ({
//     slug: project.slug,
//   }));

//   return projectsSlug;
// }

export default async function Page({ params }: { params: { slug: string } }) {
  const projects = await getCollection<Project>("project");
  const project = projects.find((project) => project.slug === params.slug)!;

  const { video, image, title, tagline, intro, content } = project;

  const banner = await getImage({ src: "/images/banner.png", alt: "Me" });
  const images = project.images.map((image) => ({
    image,
  }));

  const items = [
    {
      image,
      video,
    },
    ...images,
  ];

  return (
    <main className={styles.main}>
      <Header title={title} banner={banner} sentences={[tagline]} />

      <Carousel items={items} />

      <p>{intro}</p>

      <p>{content}</p>
    </main>
  );
}
