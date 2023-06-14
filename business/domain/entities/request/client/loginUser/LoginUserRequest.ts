import { z } from "zod";

const LoginSchema = z.object({
  login: z.string(),
  password: z.string(),
  saveLogin: z.boolean(),
});

export type LoginUserRequest = z.infer<typeof LoginSchema>;
