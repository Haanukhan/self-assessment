import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .nonempty("Password is required"),
});

export const ResetSchema = z.object({
  email: z.string().email({message: "Email is required"}),
});

export const NewPasswordSchema = z.object({
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .nonempty("Password is required"),
});

export const RegisterSchema = z.object({
  name: z
    .string()
    .nonempty("Username is required")
    .min(3, "Username must be at least 3 characters long"),
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .nonempty("Password is required"),
});
