import { promises as fs } from "fs";
import path from "path";

export async function getProjects() {
  const data = await fs.readFile(
    path.join(process.cwd(), "data/projects.json")
  );

  const projects = JSON.parse(data.toString());

  return projects;
}
