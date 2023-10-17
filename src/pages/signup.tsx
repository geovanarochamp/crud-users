import { Header } from "@/components/Header"
import { SignUpForm } from "@/components/SingUpForm"
import { Box } from "@mui/material"

export default function SignUp() {
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
          <SignUpForm />
        </main>
      </Box>
    </>
  )
}
