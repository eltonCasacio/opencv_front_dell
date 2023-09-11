import { Box, Button } from "@mui/material"
import { Link } from "react-router-dom"
import { TableUser } from './components/Table'
import { useEffect, useState } from "react"
import { UserResponse, deleteUserService, getUsersService } from "../../services/users"
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks"
import { getLoggedUser } from "./usersSlice"

export const Users = () => {
    const { id } = useAppSelector(getLoggedUser)
    const [users, setUsers] = useState<UserResponse[]>()

    const handleDelete = (user_id: number) => {
        if (user_id !== id)
            deleteUserService(user_id).then(() => updateTable())
    }

    const handleEdit = (user_id: number) => {
        Navigate({ to: `/users/edit/${user_id}` })
    }

    const updateTable = () => {
        getUsersService().then(res => setUsers(res))
    }

    useEffect(() => {
        updateTable()
    }, [])

    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} height={'82%'} sx={{ p: 2 }}>
            <Box display={'flex'} justifyContent={'flex-end'}>
                <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/register_user"
                    style={{ marginBottom: "1rem" }}
                >
                    New User
                </Button>
            </Box>
            <Box>
                <TableUser users={users || []} handleDelete={handleDelete} handleEdit={handleEdit} />
            </Box>
        </Box>
    )
}