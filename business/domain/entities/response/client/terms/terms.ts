import { z } from "zod";

const termsSchema = z.object({
  policyDescription: z.string(),
  editorSettings: z.string().nullable(),
  publishedDate: z.date(),
});

export type Terms = z.infer<typeof termsSchema>;
