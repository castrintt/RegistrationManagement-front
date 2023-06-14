import { z } from "zod";

const UserPasswordSchema = z.object({
  password: z.string(),
  passwordConfirm: z.string(),
});

const CreateUserSchema = z.object({
  login: z.string(),
  userPassword: UserPasswordSchema,
  acceptNotification: z.boolean(),
  acceptTermsAndPolicies: z.boolean(),
  registrationDate: z.date(),
});

export type CreateUserRequest = z.infer<typeof CreateUserSchema>;
