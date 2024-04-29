import styles from "./page.module.scss";

import Header from "@/component/Header";
import Jumper from "@/component/Jumper";
import Carousel from "@/component/Carousel";

import { Project } from "@/types";
import { getCollection, getImage } from "@/helper";

export default async function Page() {
  const banner = await getImage("/images/banner.png", "Me");
  const projects = await getCollection<Project>("project");

  return (
    <main className={styles.main}>
      <Header banner={banner} />
      <Carousel projects={projects} />
      <Jumper />
    </main>
  );
}
