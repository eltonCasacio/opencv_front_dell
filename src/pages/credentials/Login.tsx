import { Box, Button, FormControl, Grid, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { loginService } from "../../services/users"
import { useAppDispatch } from "../../app/hooks"
import { updateLoggedUser } from "./usersSlice"

type User = {
    username: string,
    password: string
}

export const Login = () => {
    const dispatch = useAppDispatch()
    const [user, setUser] = useState<User>({ username: "", password: "" })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function onSubmit() {
        loginService(user.username, user.password).then(res => {
            if (res?.id) {
                dispatch(updateLoggedUser(res))
            }
        })
    }

    return (
        <Box display={'flex'} flexDirection={'column'} height={'95%'} justifyContent="center">
            <Box textAlign={"center"} p={2}>
                <Box mb={2}>
                    <Typography color={'white'} variant="h4">LOGIN</Typography>
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
                            <Box
                                display={'flex'}
                                flexDirection={'column'}
                                gap={2}
                                alignItems={'center'}
                            >
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    style={{ width: '15vw' }}
                                    onClick={onSubmit}>
                                    ENTRAR
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Box>
    )
}