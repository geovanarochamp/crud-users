import { GetUsersResponse, User } from "@/resources/api/types"
import { get } from "react-hook-form"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface EditUserProps {
  newUser: User
  userToRemove: User
}
interface UsersStoreProps {
  users: GetUsersResponse
  addUser: (newUser: User) => void
  removeUser: (userToRemove: User) => void
  editUser: ({ newUser, userToRemove }: EditUserProps) => void
  getUserByCpf: (cpf: string) => User | undefined
  isFirstLoad: boolean
  setIsFirstLoad: (isFirstLoad: boolean) => void
}

export const useUsersStore = create(
  persist<UsersStoreProps>(
    (set, get) => ({
      users: [],
      addUser: (newUser: User) => {
        set((state) => ({
          ...state,
          users: [...state.users, newUser],
        }))
      },
      removeUser: (userToRemove: User) => {
        set((state) => ({
          ...state,
          users: state.users.filter((user) => user.cpf !== userToRemove.cpf),
        }))
      },
      editUser: ({ newUser, userToRemove }) => {
        set((state) => ({
          ...state,
          users: state.users.filter((user) => user.cpf !== userToRemove.cpf),
        }))

        set((state) => ({
          ...state,
          users: [...state.users, newUser],
        }))
      },
      getUserByCpf: (cpf: string) => {
        return get().users.find((user) => user.cpf === cpf)
      },
      isFirstLoad: true,
      setIsFirstLoad: (isFirstLoad: boolean) => {
        set((state) => ({
          ...state,
          isFirstLoad,
        }))
      },
    }),
    {
      name: "users-store",
    }
  )
)
