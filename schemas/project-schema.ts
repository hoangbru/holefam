import { z } from "zod";
import { technologySchema } from "./technology-schema";

export const projectSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  image: z
    .string({ required_error: "Image URL is required" })
    .url("Image must be a valid URL"),
  description: z.string({ required_error: "Description is required" }),
  link: z
    .string({ required_error: "Project link is required" })
    .url("Link must be a valid URL"),
  linkGithub: z.string().url("GitHub link must be a valid URL").optional(),
  technologies: z.array(
    z.lazy(() => technologySchema),
    { required_error: "Technologies are required" }
  ),
  createdAt: z.date().optional(),
  updateAt: z.date().optional(),
});

export type ProjectFormValues = z.infer<typeof projectSchema>;
