import { z } from "zod";

const RefreshTokenSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
  expiry: z.number(),
  message: z.string(),
});

export type RefreshTokenResponse = z.infer<typeof RefreshTokenSchema>;
