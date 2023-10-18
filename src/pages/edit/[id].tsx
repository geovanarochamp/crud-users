import { Header } from "@/components/Header"
import { SignUpOrEditForm } from "@/components/SignUpOrEditForm"
import { useUsersStore } from "@/stores/useUsersStore"
import { Box, CircularProgress } from "@mui/material"
import { useRouter } from "next/router"
import { useMemo } from "react"

export default function EditUser() {
  const router = useRouter()
  const userCpf = router.query.id as string

  const { getUserByCpf } = useUsersStore()

  const user = useMemo(() => getUserByCpf(userCpf), [getUserByCpf, userCpf])

  if (!user) {
    return (
      <>
        <Header />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress sx={{ color: "#00c8b3" }} />
        </Box>
      </>
    )
  }

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
        <SignUpOrEditForm initialValues={user} />
      </Box>
    </>
  )
}
