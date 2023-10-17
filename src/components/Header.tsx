import { Button } from "@mui/material"

export function Header() {
  return (
    <header className="flex items-center gap-4 justify-end p-6 w-full mx-auto bg-white">
      <Button href="/" variant="text" sx={{ color: "#00c8b3" }}>
        Ver todos os usuários
      </Button>
      <Button
        href="/signup"
        variant="contained"
        sx={{
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
    </header>
  )
}
