import styles from "./page.module.scss";

import Carousel from "@/component/Carousel";

import { Project } from "@/types";
import { Header } from "@/component/Header";
import { getCollection } from "@/helper";

export default async function Page() {
  const projects = await getCollection<Project>("project");

  return (
    <main className={styles.main}>
      <Header />
      <Carousel projects={projects} />
    </main>
  );
}
