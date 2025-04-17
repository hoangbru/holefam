import { ITechnology } from "./technology";

export interface IProject {
  id: string | number;
  name: string;
  image?: string;
  description?: string;
  link?: string;
  linkGithub?: string;
  technologies: ITechnology[];
  createdAt?: Date;
  updateAt?: Date;
}
