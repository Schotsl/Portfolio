import RootAbout from "./components/About";
import RootCount from "./components/Count";
import RootProject from "./components/Project";

import Header from "@/component/Header";
import Button from "@/component/Button";
import Carousel from "@/component/Carousel";

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Project as ProjectType } from "@/types";
import { getCollection, getImage } from "@/helper";

import styles from "./page.module.scss";
import banner from "@/public/content/shared/banner.json";
import content from "@/public/content/pages/home/index.json";
import supabase from "@/utils/supabase";

export const revalidate = 3600;

async function loadCount() {
  const { data, error } = await supabase
    .from("statistics")
    .select("pageviews")
    .eq("id", "c6fe3380-993e-42bf-91fb-a4806b4f8844")
    .single();

  if (error) {
    throw error;
  }

  if (!data) {
    return 0;
  }

  return data.pageviews;
}

export default async function RootPage() {
  const count = await loadCount();
  const about = await getImage(content.about.image);
  const projects = await getCollection<ProjectType>("project");

  const bannerImage = await getImage(banner.image);
  const bannerTitle = banner.title;
  const bannerTaglines = content.banner.taglines.map(
    (tagline) => tagline.tagline
  );

  const bannerSlugs = content.banner.projects.map((project) => project.project);
  const bannerProjects = projects.filter((project) =>
    bannerSlugs.includes(project.slug)
  );

  return (
    <main className={styles.main}>
      <Header
        title={bannerTitle}
        banner={bannerImage}
        taglines={bannerTaglines}
      />

      <Carousel items={bannerProjects} />

      <Button href="#main" label="View all my projects" icon={faArrowDown} />

      <RootAbout
        title={content.about.title}
        content={content.about.content}
        image={about}
      />

      <RootCount initial={count} />

      <RootProject
        title={content.project.title}
        content={content.project.content}
        projects={projects}
      />
    </main>
  );
}
