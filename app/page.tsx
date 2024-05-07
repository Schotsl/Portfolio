import styles from "./page.module.scss";

import Header from "@/component/Header";
import Button from "@/component/Button";
import Carousel from "@/component/Carousel";
import Project from "@/component/Project";

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Project as ProjectType } from "@/types";
import { getCollection, getImage } from "@/helper";

import About from "@/component/About";

export const dynamic = "force-static";

export default async function Page() {
  const banner = await getImage("/images/banner.png", "Me");
  const projects = await getCollection<ProjectType>("project");

  return (
    <main className={styles.main}>
      <Header
        banner={banner}
        sentences={[
          "A great developer, a pretty good designer",
          "Being laughed at while playing VR outside",
          "Creating yet another GitHub repository",
        ]}
      />
      <Carousel items={projects} />

      <Button href="#main" label="View all my projects" icon={faArrowDown} />

      <About />
      <Project projects={projects} />
    </main>
  );
}
