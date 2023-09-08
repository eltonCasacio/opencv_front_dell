import { Box, Typography } from "@mui/material"

export const PageNotFound = () => {
    return (
        <Box sx={{ color: 'white' }}>
            <Typography variant='h1'>404</Typography>
            <Typography variant='h2'>Page not found</Typography>
        </Box>
    )
}