export interface User {
  name: string
  cpf: string
  phone: string
  email: string
}

export type GetUsersResponse = User[]
