import fs from "fs";
import Image from "@/component/Image";

const projects = "./content/projects";
const projectsNames = fs.readdirSync(projects);
const projectsObjects = projectsNames.map((projectName) => {
  const projectPath = `${projects}/${projectName}`;
  const projectObject = fs.readFileSync(projectPath, "utf8");

  return JSON.parse(projectObject);
});

export default async function Page() {
  return (
    <main>
      <h1>Test</h1>
      <ul>
        {projectsObjects.map((project) => (
          <li key={project.title}>
            <h2>{project.title}</h2>

            <Image src={project.image} alt={project.title} sizes={"200px"} />
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
