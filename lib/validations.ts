import { z } from "zod";

export const passwordOptionsSchema = z
  .object({
    length: z.number().min(4).max(128),
    includeUppercase: z.boolean(),
    includeLowercase: z.boolean(),
    includeNumbers: z.boolean(),
    includeSymbols: z.boolean(),
    excludeAmbiguous: z.boolean(),
    avoidRepeated: z.boolean(),
    startWithUppercase: z.boolean(),
    endWithNumber: z.boolean(),
  })
  .refine(
    (data) =>
      data.includeUppercase ||
      data.includeLowercase ||
      data.includeNumbers ||
      data.includeSymbols,
    {
      message: "Pelo menos um tipo de caractere deve estar habilitado",
      path: ["includeUppercase"],
    }
  )
  .refine(
    (data) => !data.startWithUppercase || data.includeUppercase,
    {
      message: "Para iniciar com maiúscula, é necessário incluir letras maiúsculas",
      path: ["startWithUppercase"],
    }
  )
  .refine(
    (data) => !data.endWithNumber || data.includeNumbers,
    {
      message: "Para terminar com número, é necessário incluir números",
      path: ["endWithNumber"],
    }
  );

export type PasswordOptionsInput = z.infer<typeof passwordOptionsSchema>;
