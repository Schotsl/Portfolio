import { getCollection } from "@/helper";
import { Project } from "@/types";

export const dynamicParams = false;

export async function generateStaticParams() {
  const projects = await getCollection<Project>("project");
  const projectsSlug = projects.map((project) => ({
    slug: project.slug,
  }));

  return projectsSlug;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const projects = await getCollection<Project>("project");
  const project = projects.find((project) => project.slug === params.slug);

  return (
    <div>
      <h1>Project {JSON.stringify(project)}</h1>
    </div>
  );
}