import { zodResolver } from "@hookform/resolvers/zod"
import { Button, CircularProgress, Stack } from "@mui/material"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { useForm } from "react-hook-form"
import { signUpOrEditFormSchema } from "./formSchema"
import { SignUpFormSchemaValues } from "./types"
import { useUsersStore } from "@/stores/useUsersStore"
import { useRouter } from "next/router"
import { useState } from "react"

interface SignUpOrEditFormProps {
  initialValues?: SignUpFormSchemaValues
}

export function SignUpOrEditForm({ initialValues }: SignUpOrEditFormProps) {
  const router = useRouter()
  const { addUser, editUser } = useUsersStore()

  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<SignUpFormSchemaValues>({
    resolver: zodResolver(signUpOrEditFormSchema),
    defaultValues: {
      name: initialValues?.name || "",
      email: initialValues?.email || "",
      cpf: initialValues?.cpf || "",
      phone: initialValues?.phone || "",
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form

  const onSubmit = (data: SignUpFormSchemaValues) => {
    setIsLoading(true)
    if (initialValues) {
      editUser({ newUser: data, userToRemove: initialValues })
    } else {
      addUser(data)
    }
    reset()
    setIsLoading(false)
    router.push("/")
  }

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" marginBottom={3} component="h1">
          {initialValues ? "Editar usuário" : "Cadastrar usuário"}
        </Typography>
      </Box>

      <Box
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        noValidate
      >
        <TextField
          id="name"
          label="Nome completo (sem abreviações)"
          variant="standard"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          id="email"
          label="E-mail"
          variant="standard"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          id="cpf"
          label="CPF"
          variant="standard"
          {...register("cpf")}
          error={!!errors.cpf}
          helperText={errors.cpf?.message}
        />
        <TextField
          id="telephone"
          label="Telefone"
          variant="standard"
          {...register("phone")}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            height: 40,
            marginTop: 4,
            backgroundColor: "#00c8b3 !important",
            fontWeight: 600,
            borderRadius: 9999,
            "&:hover": {
              opacity: "70%",
              backgroundColor: "#00c8b3",
              transition: "all 0.3s;",
            },
            "&:disabled": {
              color: "#dddcdc",
              backgroundColor: "#f6f6f6 !important",
              transition: "all 0.3s;",
            },
          }}
          disabled={isLoading}
        >
          {isLoading ? (
            <CircularProgress size={16} sx={{ color: "#dddcdc" }} />
          ) : initialValues ? (
            "Editar"
          ) : (
            "Cadastrar"
          )}
        </Button>
      </Box>
    </Container>
  )
}