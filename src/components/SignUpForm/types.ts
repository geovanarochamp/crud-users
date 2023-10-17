import { z } from "zod"
import { signUpFormSchema } from "./formSchema"

export type SignUpFormSchemaData = z.infer<typeof signUpFormSchema>
