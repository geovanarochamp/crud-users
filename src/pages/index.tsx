import { Header } from "@/components/Header"
import { UsersList } from "@/components/UsersList"
import Box from "@mui/material/Box"

export default function Home() {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <main>
          <UsersList />
        </main>
      </Box>
    </>
  )
}
