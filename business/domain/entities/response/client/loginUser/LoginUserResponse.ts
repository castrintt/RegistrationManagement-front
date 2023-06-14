import { z } from "zod";

const LoginSchema = z.object({
  token: z.string(),
});

export type LoginUserResponse = z.infer<typeof LoginSchema>;


