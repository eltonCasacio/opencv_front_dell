import { Box, Typography } from "@mui/material"

export const Home = () => {
    return (
        <Box 
            display={'flex'}
            flexDirection={'row'} 
            height={'90vh'} 
            color={'#f5f5f1'} 
        >
            <Box display={'flex'} flexDirection={'column'}>
                {itemData.map((item) => (
                    <img
                        key={item.title}
                        height={'50%'}
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                ))}
            </Box>
            <Box sx={{wordBreak:'break-word', padding:1}}>
                <Typography fontSize={12}>loglogloglogloglogloglogloglogloglogloglogloglogloglogloglologlogogogogogogogogogloglogloglogloglogloglogloglogloglogloglogloglogloggloglogloglog...</Typography>
                <Typography>loglogloglogloglogloglogloglogloglogloglogloglogloglogloglologlogogogogogogogogogloglogloglogloglogloglogloglogloglogloglogloglogloggloglogloglog...</Typography>
                <Typography>log...</Typography>
                <Typography>log...</Typography>
                <Typography>log...</Typography>
                <Typography>log...</Typography>
            </Box>
        </Box >
    )
}

const itemData = [
    {
        img: 'http://localhost:8000/videolayer03',
        title: 'Original',
    },
    {
        img: 'http://localhost:8000/videolayer02',
        title: 'Filtro',
    }
];