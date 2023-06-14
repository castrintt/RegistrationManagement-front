import { z } from "zod";

const AuthSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
  expiry: z.number(),
  message: z.string(),
});

export type AuthUserResponse = z.infer<typeof AuthSchema>;
