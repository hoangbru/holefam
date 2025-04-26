import { z } from "zod";

export const technologySchema = z.object({
  name: z.string({ required_error: "Technology name is required" }),
  tag: z.string().optional(),
  link: z.string().url("Link must be a valid URL").optional(),
  createdAt: z.date({ required_error: "Created date is required" }),
  updateAt: z.date({ required_error: "Updated date is required" }),
});

export type TechnologyFormValues = z.infer<typeof technologySchema>;
