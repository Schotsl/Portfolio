import { getCollection } from "@/helper";
import { Project } from "@/types";

export const dynamicParams = false;

export async function generateStaticParams() {
  const projects = await getCollection<Project>("project");
  return projects;
}

export default function Page({ params }: { params: Project }) {
  return (
    <div>
      <h1>Project {JSON.stringify(params)}</h1>
    </div>
  );
}
