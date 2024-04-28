import Image from "@/component/Image";
import Carousel from "@/component/Carousel";

import { Project } from "@/types";
import { getCollection } from "@/helper";

const projects = getCollection<Project>("project");

export default async function Page() {
  return (
    <main>
      <Carousel projects={projects} />
    </main>
  );
}
