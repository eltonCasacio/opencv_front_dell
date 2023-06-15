import { Box, Typography } from "@mui/material"

const itemData = [
    {
        img: 'http://localhost:8000/videolayer01',
        title: 'Original',
    },
    {
        img: 'http://localhost:8000/videolayer02',
        title: 'Filtro',
    }
];

export const Home = () => {
    return (
        <Box display={'flex'} flexDirection={'column'} color={'#f5f5f1'}>
            <Box display={'flex'} justifyContent={'space-around'}>
                <img
                    src={`${itemData[0].img}?w=248&fit=crop&auto=format`}
                    srcSet={`${itemData[0].img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={itemData[0].title}
                    loading="lazy"
                />

                <img
                    src={`${itemData[1].img}?w=248&fit=crop&auto=format`}
                    srcSet={`${itemData[1].img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={itemData[1].title}
                    loading="lazy"
                />
            </Box>

            <Box>
                <Typography>alguma coisa aqui</Typography>
                <Typography>alguma coisa aqui</Typography>
                <Typography>alguma coisa aqui</Typography>
                <Typography>alguma coisa aqui</Typography>
                <Typography>alguma coisa aqui</Typography>
                <Typography>alguma coisa aqui</Typography>
            </Box>
        </Box >
    )
}

