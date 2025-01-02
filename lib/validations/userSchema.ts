import { z } from "zod";

export const userSchema = z.object({
    email: z
        .string()
        .email("Debes ingresar un email válido"),
    password: z
        .string()
        .min(4, {
            message: "La contraseña debe tener al menos 4 caracteres",
        }),
  });