import { z } from "zod";

const AuthSchema = z.object({
  login: z.string(),
  password: z.string(),
  saveLogin: z.boolean(),
});

export type AuthUserRequest = z.infer<typeof AuthSchema>;
