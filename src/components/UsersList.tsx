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

export function UsersList() {
  const { data: users, isLoading: isUsersLoading } = useGetUsers()

  const Cell = ({ label }: { label: string }) => (
    <TableCell sx={{ color: "#fff", fontWeight: "600" }} align="left">
      {label}
    </TableCell>
  )

  if (isUsersLoading) {
    return <CircularProgress />
  }
  return (
    <section className="mt-6">
      <Typography variant="h4" marginBottom={3} component="h1">
        Lista de usuários
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#00c8b3" }}>
            <TableRow>
              <Cell label={"Nome"} />
              <Cell label={"CPF"} />
              <Cell label={"Telefone"} />
              <Cell label={"Email"} />
              <Cell label={""} />
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user) => (
              <TableRow
                key={user.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{user.name}</TableCell>
                <TableCell align="left">{user.cpf}</TableCell>
                <TableCell align="left">{user.phone}</TableCell>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="left">
                  <IconButton>
                    <Edit />
                  </IconButton>
                  <IconButton>
                    <Delete
                      sx={{
                        "&:hover": {
                          color: "#dc2626",
                        },
                      }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  )
}
