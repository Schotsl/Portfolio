import Image from "@/component/Image";

import { getCollection } from "@/helper";

const projects = getCollection("project");

export default async function Page() {
  return (
    <main>
      <h1>Test</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.title}>
            <h2>{project.title}</h2>

            <Image src={project.image} alt={project.title} sizes={"400px"} />
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
