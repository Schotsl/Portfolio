import styles from "./page.module.scss";
import header from "@/public/content/shared/banner.json";

import { getCollection, getImage } from "@/helper";
import { Project } from "@/types";
import { marked } from "marked";
import { Metadata } from "next";

import Header from "@/component/Header";
import Carousel from "@/component/Carousel";
import Technologies from "./components/Technologies";
import Links from "./components/Links";

export async function generateStaticParams() {
  const projects = await getCollection<Project>("project");
  const projectsSlug = projects.map((project) => ({
    slug: project.slug,
  }));

  return projectsSlug;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const projects = await getCollection<Project>("project");
  const project = projects.find((project) => project.slug === params.slug)!;

  return {
    title: `${header.title} - Sjors van Holst`,
    description: project.intro,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const bannerImage = await getImage(header.image);
  const bannerTitle = header.title;

  const projects = await getCollection<Project>("project");
  const project = projects.find((project) => project.slug === params.slug)!;

  const { video, image, title, tagline, intro, content, technologies, links } =
    project;

  const images =
    project.images?.map((image) => ({
      image,
    })) || [];

  const items = [
    {
      image,
      video,
    },
    ...images,
  ];

  return (
    <main className={styles.project}>
      <Header title={bannerTitle} banner={bannerImage} taglines={[tagline]} />

      <Carousel items={items} />

      <section className={styles.project__content}>
        {technologies && <Technologies technologies={technologies} />}

        <h2>{title}</h2>
        <b>{intro}</b>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>

        <Links links={links} />
      </section>
    </main>
  );
}
