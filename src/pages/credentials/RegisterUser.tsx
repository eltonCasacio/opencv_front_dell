import { Box, Button, FormControl, Grid, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { registerUserService } from "../../services/users"
import { Link, useNavigate } from "react-router-dom"

type RegisterUser = {
    username: string,
    password: string
    level_permission: number
}

const initial_value: RegisterUser = {
    username: "", password: "", level_permission: 0
}

export const RegisterUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<RegisterUser>(initial_value)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function clearForm() {
        setUser(initial_value)
        navigate(-1)
    }

    async function onSubmit() {
        await registerUserService(user)
        clearForm()
    }

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
                                    variant="text"
                                    style={{ width: '15vw' }}
                                    component={Link}
                                    to="/users"
                                >
                                    VOLTAR
                                </Button>

                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={onSubmit}
                                >
                                    REGISTER
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Box>
    )
}