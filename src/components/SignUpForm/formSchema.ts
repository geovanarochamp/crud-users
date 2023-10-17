import { z } from "zod"

export const signUpFormSchema = z.object({
  name: z.string().min(2, "O nome deve ter 3 caracteres ou mais"),
  email: z.string().email("Insira um email válido"),
  cpf: z.string().length(11, "CPF deve conter 11 dígitos"),
  tel: z.string().min(10, "Insira um telefone válido"),
})
