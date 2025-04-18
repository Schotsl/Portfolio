import styles from "./page.module.scss";
import header from "@/public/content/shared/banner.json";

import { Project } from "@/types";
import { getCollection, getImage } from "@/helper";

import Header from "@/component/Header";
import Carousel from "@/component/Carousel";

import Links from "./components/Links";
import Content from "./components/Content";
import Breadcrumb from "./components/Breadcrumb";
import Technologies from "./components/Technologies";

export const dynamic = "force-static";

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
    title: `${project.title} - Sjors van Holst`,
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

  const { bunny, image, title, tagline, intro, content, technologies, links } =
    project;

  const images =
    project.images?.map((image) => ({
      image,
    })) || [];

  const items = [
    {
      image,
      bunny,
    },
    ...images,
  ];

  return (
    <main className={styles.project}>
      <Header title={bannerTitle} banner={bannerImage} taglines={[tagline]} />

      <Carousel items={items} />

      <section className={styles.project__content}>
        <Breadcrumb
          items={[
            { title: "Projects", href: "/#project" },
            { title, href: `/project/${params.slug}` },
          ]}
        />

        <h2>{title}</h2>

        {technologies && <Technologies technologies={technologies} />}

        <Content html={content} intro={intro} />

        <Links links={links} />
      </section>
    </main>
  );
}
