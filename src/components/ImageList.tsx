import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

interface ImagesParams {
    cols: number
    images: Array<{
        img: string,
        title: string,
    }>,
}
export function Images(params:ImagesParams) {
    return (
        <ImageList cols={params.cols}>
            {params.images.map((item, index) => (
                <ImageListItem key={item.img + index}>
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
                                <InfoIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: 'http://localhost:8000/videolayer01',
        title: 'Filtro 1',
    },
    {
        img: 'http://localhost:8000/videolayer02',
        title: 'Filtro 2',
    },
    {
        img: 'http://localhost:8000/videolayer03',
        title: 'Original',
    },
    {
        img: 'http://localhost:8000/videolayer03',
        title: 'Original',
    }
];