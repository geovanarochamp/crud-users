import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { useGetUsers } from "@/resources/api/hook"
import CircularProgress from "@mui/material/CircularProgress"
import { Box, Container, IconButton, Typography } from "@mui/material"
import { Delete, Edit } from "@mui/icons-material"
import { useUsersStore } from "@/stores/useUsersStore"
import { useEffect } from "react"
import { User } from "@/resources/api/types"

export function UsersList() {
  const { data: fetchedUsers, isLoading: isUsersLoading } = useGetUsers()

  const { users, addUser, removeUser } = useUsersStore()

  const handleDeleteUser = (user: User) => {
    removeUser(user)
  }

  useEffect(() => {
    if (fetchedUsers && users.length === 0) {
      fetchedUsers.map((user) => {
        addUser(user)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedUsers])

  console.log(users)

  const Cell = ({ label }: { label: string }) => (
    <TableCell sx={{ color: "#fff", fontWeight: "600" }} align="left">
      {label}
    </TableCell>
  )

  if (isUsersLoading) {
    return (
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
    )
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
          Lista de usuários
        </Typography>
        {users.length > 0 ? (
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
                        <Edit
                          sx={{
                            "&:hover": {
                              color: "#00c8b3",
                            },
                          }}
                        />
                      </IconButton>
                      <IconButton onClick={() => handleDeleteUser(user)}>
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
        ) : (
          <Typography variant="body1" component="p">
            Não há usuários para serem listados.
          </Typography>
        )}
      </Box>
    </Container>
  )
}
