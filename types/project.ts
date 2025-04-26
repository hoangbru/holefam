import { Technology } from "./technology";

export interface Project {
  id: number;
  name: string;
  image: string;
  description: string;
  link: string;
  linkGithub?: string;
  technologies: Technology[];
  createdAt?: Date;
  updateAt?: Date;
}
