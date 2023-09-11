import { Box, Button, FormControl, Grid, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { editUserService, getUserByIDService } from "../../services/users"
import { Link, useNavigate , useParams } from 'react-router-dom'

type EditUser = {
    id: number
    username: string,
    password: string
    level_permission: number
}

const initial_value: EditUser = {
    id: 0, username: "", password: "", level_permission: 0
}

export const EditUser = () => {
    const navigate = useNavigate();
    const user_edit_id = useParams().user_edit_id || 0
    const [user, setUser] = useState<EditUser>(initial_value)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function clearForm() {
        setUser(initial_value)
        navigate(-1)
    }

    async function onSubmit() {
        await editUserService(user)
        clearForm()
    }

    useEffect(() => {
        getUserByIDService(Number(user_edit_id))
            .then(user => {
                setUser({ ...user })
            })
    }, [user_edit_id])

    return (
        <Box display={'flex'} flexDirection={'column'} height={'95%'} justifyContent="center">
            <Box textAlign={"center"} p={2}>
                <Box mb={2}>
                    <Typography color={'white'} variant="h4">REGISTER USER</Typography>
                </Box>
            </Box>

            <Box p={2}>
                <form>
                    <Grid container spacing={3} textAlign={'center'}>
                        <Grid item xs={12}>
                            <FormControl>
                                <TextField
                                    required
                                    name="username"
                                    label="username"
                                    value={user?.username}
                                    onChange={handleChange}
                                    variant="standard"
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl>
                                <TextField
                                    required
                                    name="password"
                                    label="password"
                                    value={user?.password}
                                    onChange={handleChange}
                                    type="password"
                                    variant="standard"
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl>
                                <TextField
                                    required
                                    name="level_permission"
                                    label="level permission"
                                    value={user?.level_permission}
                                    onChange={handleChange}
                                    type="number"
                                    variant="standard"
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <Box display={'flex'} flexDirection={'column'} gap={2} alignItems={'center'}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    style={{ width: '15vw' }}
                                    onClick={onSubmit}
                                >
                                    CONFIRM
                                </Button>

                                <Button
                                    variant="text"
                                    style={{ width: '15vw' }}
                                    component={Link}
                                    to="/users"
                                >
                                    VOLTAR
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Box>
    )
}