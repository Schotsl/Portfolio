import styles from "./page.module.scss";
import header from "@/public/content/shared/banner.json";

import { getCollection, getImage } from "@/helper";
import { Project } from "@/types";
import { marked } from "marked";

import Header from "@/component/Header";
import Carousel from "@/component/Carousel";

export async function generateStaticParams() {
  const projects = await getCollection<Project>("project");
  const projectsSlug = projects.map((project) => ({
    slug: project.slug,
  }));

  return projectsSlug;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const bannerImage = await getImage(header.image);
  const bannerTitle = header.title;

  const projects = await getCollection<Project>("project");
  const project = projects.find((project) => project.slug === params.slug)!;

  const { video, image, title, tagline, intro, content } = project;

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
      <Header title={bannerTitle} banner={bannerImage} taglines={[tagline]} />

      <Carousel items={items} />

      <h2>{title}</h2>
      <p>{intro}</p>

      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </main>
  );
}
