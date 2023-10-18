import { Header } from "@/components/Header"
import { SignUpOrEditForm } from "@/components/SignUpOrEditForm"
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
        <SignUpOrEditForm />
      </Box>
    </>
  )
}
