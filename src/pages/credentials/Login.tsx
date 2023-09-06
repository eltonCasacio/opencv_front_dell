import { Box, Button, FormControl, Grid, Paper, TextField, Typography } from "@mui/material"
import { useState } from "react"

type User = {
    username: string,
    password: string
}

export const Login = () => {
    const [user, setUser] = useState<User>({ username: "", password: "" })
    
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function onSubmit() {
        console.log(user)
    }

    return (
        <Box>
            <Paper>
                <Box textAlign={"center"} p={2}>
                    <Box mb={2}>
                        <Typography variant="h4">LOGIN</Typography>
                    </Box>
                </Box>

                <Box p={2}>
                    <form>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <FormControl>
                                    <TextField
                                        required
                                        name="username"
                                        label="username"
                                        value={user?.username}
                                        onChange={handleChange}
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
                                    />
                                </FormControl>
                            </Grid>


                            <Grid item xs={12}>
                                <Box display={'flex'} gap={2}>
                                    <Button>
                                        Cadastrar
                                    </Button>

                                    <Button onClick={onSubmit}>
                                        Save
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Paper>
        </Box>
    )
}