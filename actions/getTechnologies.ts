import { promises as fs } from "fs";
import path from "path";

export async function getTechnologies() {
  const data = await fs.readFile(
    path.join(process.cwd(), "data/technologies.json")
  );

  const technologies = JSON.parse(data.toString());

  return technologies;
}
