import styles from "./page.module.scss";

import Header from "@/component/Header";
import Jumper from "@/component/Jumper";
import Carousel from "@/component/Carousel";

import { Project } from "@/types";
import { getCollection } from "@/helper";

export default async function Page() {
  const projects = await getCollection<Project>("project");

  return (
    <main className={styles.main}>
      <Header />
      <Carousel projects={projects} />
      <Jumper />
    </main>
  );
}
