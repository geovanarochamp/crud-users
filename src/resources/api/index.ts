import axios from "axios"

export const fetcher = {
  async get(url: string) {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/${url}`
    )
    return data
  },
}
