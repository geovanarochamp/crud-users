import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@mui/material"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { FormEvent } from "react"
import { useForm } from "react-hook-form"
import { signUpFormSchema } from "./SignUpForm/formSchema"
import { SignUpFormSchemaData } from "./SignUpForm/types"

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpFormSchema),
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  console.log(errors)

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
          Cadastro
        </Typography>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          id="name"
          label="Nome completo (sem abreviações)"
          variant="standard"
          {...register("name")}
          error={!!errors.name}
        />
        <TextField
          id="email"
          label="E-mail"
          variant="standard"
          {...register("email")}
          error={!!errors.email}
        />
        <TextField
          id="cpf"
          label="CPF"
          variant="standard"
          {...register("cpf")}
          error={!!errors.cpf}
        />
        <TextField
          id="telephone"
          label="Telefone"
          variant="standard"
          {...register("tel")}
          error={!!errors.tel}
        />
        <Button
          href="/signup"
          variant="contained"
          sx={{
            marginTop: 4,
            backgroundColor: "#00c8b3",
            fontWeight: 600,
            borderRadius: 9999,
            "&:hover": {
              opacity: "70%",
              backgroundColor: "#00c8b3",
              transition: "all 0.3s;",
            },
          }}
        >
          Cadastrar
        </Button>
      </Box>
    </Container>
  )
}
