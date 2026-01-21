import { z } from "zod";

export const passwordOptionsSchema = z.object({
  length: z.number().min(4).max(128),
  includeUppercase: z.boolean(),
  includeLowercase: z.boolean(),
  includeNumbers: z.boolean(),
  includeSymbols: z.boolean(),
}).refine(
  (data) => data.includeUppercase || data.includeLowercase || data.includeNumbers || data.includeSymbols,
  {
    message: "Pelo menos um tipo de caractere deve estar habilitado",
    path: ["includeUppercase"],
  }
);

export type PasswordOptionsInput = z.infer<typeof passwordOptionsSchema>;
