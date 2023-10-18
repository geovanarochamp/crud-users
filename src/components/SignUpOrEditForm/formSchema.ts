import { z } from "zod"

export const signUpOrEditFormSchema = z.object({
  name: z.string().min(3, "O nome deve ter 3 caracteres ou mais"),
  email: z.string().email("Insira um email válido"),
  cpf: z.string().length(11, "CPF deve conter 11 dígitos"),
  phone: z.string().min(10, "Insira um telefone válido"),
})
