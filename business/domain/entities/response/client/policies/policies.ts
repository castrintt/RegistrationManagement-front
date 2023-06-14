import { z } from "zod";

const policiesSchema = z.object({
  policyDescription: z.string(),
  editorSettings: z.string().nullable(),
  publishedDate: z.date(),
});

export type Policies = z.infer<typeof policiesSchema>;
