import { Box, IconButton, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material"

export const Home = () => {
    return (
        <Box display={'flex'} flexDirection={'column'} color={'#f5f5f1'}>
            <ImageList cols={2} sx={{height:400}}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                >
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>


            <Box>
                <Typography>log...</Typography>
                <Typography>log...</Typography>
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