import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { useGetUsers } from "@/resources/api/hook"
import CircularProgress from "@mui/material/CircularProgress"
import { IconButton, Typography } from "@mui/material"
import { Delete, Edit } from "@mui/icons-material"

export function SignUpForm() {
  return (
    <section className="mt-6">
      <Typography variant="h4" marginBottom={3} component="h1">
        Cadastrar
      </Typography>
    </section>
  )
}
