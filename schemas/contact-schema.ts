import { z } from "zod";

export const contactSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email("Email must be valid"),
  phone: z.string({ required_error: "Phone number is required" }),
  message: z.string({ required_error: "Message is required" }),
  createdAt: z.date({ required_error: "Created date is required" }),
  updateAt: z.date({ required_error: "Updated date is required" }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
