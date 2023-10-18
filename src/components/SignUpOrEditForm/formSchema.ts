import CPFValidator from "@/utils/cpfValidator"
import { z } from "zod"

export const signUpOrEditFormSchema = z.object({
  name: z
    .string({ required_error: "O nome deve ter 3 caracteres ou mais" })
    .min(3, "O nome deve ter 3 caracteres ou mais"),
  email: z
    .string({ required_error: "Insira um email válido" })
    .email("Insira um email válido"),
  cpf: z
    .string({ required_error: "Insira um CPF válido" })
    .length(11, "Insira um CPF válido")
    .refine(
      (value) => {
        const isValid = CPFValidator.isValid(value)
        return isValid
      },
      { message: "Insira um CPF válido" }
    ),
  phone: z
    .string({ required_error: "Insira um telefone válido" })
    .min(11, "Insira um telefone válido"),
})
