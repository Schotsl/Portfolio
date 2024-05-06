import styles from "./page.module.scss";

import Header from "@/component/Header";
import Jumper from "@/component/Jumper";
import Carousel from "@/component/Carousel";
import Project from "@/component/Project";

import { Project as ProjectType } from "@/types";
import { getCollection, getImage } from "@/helper";

import About from "@/component/About";

export const dynamic = "force-static";

export default async function Page() {
  const banner = await getImage("/images/banner.png", "Me");
  const projects = await getCollection<ProjectType>("project");

  return (
    <main className={styles.main}>
      <Header banner={banner} />
      <Carousel projects={projects} />
      <Jumper />
      <About />
      <Project projects={projects} />
    </main>
  );
}
