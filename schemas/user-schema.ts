import { z } from "zod";

export const RoleEnum = z.enum(["admin", "user"]);

export const userSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Email must be valid"),
  password: z.string({ required_error: "Password is required" }),
  role: RoleEnum,
});

export type UserFormValues = z.infer<typeof userSchema>;
