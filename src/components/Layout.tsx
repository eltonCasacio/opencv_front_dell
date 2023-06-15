import { Box, Container } from "@mui/material";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Box>
            <Container>{children}</Container>
        </Box>
    )
}
