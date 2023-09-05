import { Box, IconButton, ImageListItem, ImageListItemBar } from "@mui/material"
import { Logs } from "./components/Logs";

export const Home = () => {
    return (
        <Box
            display={'flex'}
            flexDirection={'row'}
            height={'90vh'}
            color={'#f5f5f1'}>

            <Box display={'flex'} flexDirection={'column'}>
                {itemData.map((item) => (
                    <ImageListItem key={item.title}>
                        <img
                            key={item.title}
                            height={'50%'}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy" />

                        <ImageListItemBar
                            title={item.title}
                            actionIcon={
                                <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${item.title}`} />
                            }
                        />

                    </ImageListItem>
                ))}
            </Box>

            <Box p={2} flex={1} bgcolor={'black'}>
                <Logs />
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