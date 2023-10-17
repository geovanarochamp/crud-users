import { GetUsersResponse, User } from "@/resources/api/types"
import { create } from "zustand"
interface UsersStoreProps {
  users: GetUsersResponse | []
  addUser: (newUser: User) => void
  removeUser: (userToRemove: User) => void
}

export const useUsersStore = create<UsersStoreProps>((set) => ({
  users: [],
  addUser: (newUser: User) => {
    set((state) => ({
      ...state,
      users: [...state.users, newUser],
    }))
  },
  removeUser: (userToRemove: User) =>
    set((state) => ({
      ...state,
      users: state.users.filter((user) => user.cpf !== userToRemove.cpf),
    })),
}))
