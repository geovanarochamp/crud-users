import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { useGetUsers } from "@/resources/api/hook"
import CircularProgress from "@mui/material/CircularProgress"
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material"
import { Delete, Edit } from "@mui/icons-material"
import { useUsersStore } from "@/stores/useUsersStore"
import { useEffect, useState } from "react"
import { User } from "@/resources/api/types"

export function UsersList() {
  const { data: fetchedUsers, isLoading: isUsersLoading } = useGetUsers()

  const { users, addUser, removeUser, isFirstLoad, setIsFirstLoad } =
    useUsersStore()

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [userToDelete, setUserToDelete] = useState({} as User)

  const handleConfirmDeleteUser = (user: User) => {
    removeUser(user)
    setIsDeleteDialogOpen(false)
  }

  const handleDeleteUser = (user: User) => {
    setUserToDelete(user)
    setIsDeleteDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setIsDeleteDialogOpen(false)
  }

  const Cell = ({ label }: { label: string }) => (
    <TableCell sx={{ color: "#fff", fontWeight: "600" }} align="left">
      {label}
    </TableCell>
  )

  useEffect(() => {
    if (fetchedUsers && isFirstLoad) {
      fetchedUsers.map((user) => {
        addUser(user)
        setIsFirstLoad(false)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedUsers])

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
                    key={user.cpf}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{user.name}</TableCell>
                    <TableCell align="left">{user.cpf}</TableCell>
                    <TableCell align="left">{user.phone}</TableCell>
                    <TableCell align="left">{user.email}</TableCell>
                    <TableCell align="left">
                      <IconButton href={`/edit/${user.cpf}`}>
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
                              color: "#eb4a46",
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
      <Dialog
        open={isDeleteDialogOpen}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-delete-user"
      >
        <DialogTitle>
          Tem certeza que deseja excluir{" "}
          <Typography variant="h6" sx={{ fontWeight: 600 }} component="span">
            {`${userToDelete.name}?`}
          </Typography>
        </DialogTitle>

        <DialogActions>
          <Button sx={{ color: "#000000DE" }} onClick={handleCloseDialog}>
            Cancelar
          </Button>
          <Button
            onClick={() => handleConfirmDeleteUser(userToDelete)}
            sx={{ color: "#eb4a46" }}
          >
            Excluir
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}
