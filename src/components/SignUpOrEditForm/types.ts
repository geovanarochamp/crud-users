import { z } from "zod"
import { signUpOrEditFormSchema } from "./formSchema"

export type SignUpFormSchemaValues = z.infer<typeof signUpOrEditFormSchema>
