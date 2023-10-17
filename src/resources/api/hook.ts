import { fetcher } from "."
import useSWR from "swr"
import { GetUsersResponse } from "./types"

export function useGetUsers() {
  return useSWR<GetUsersResponse>("/users", fetcher.get, {
    revalidateOnFocus: false,
  })
}
