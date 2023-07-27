import { Box } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

type Image = {
    img: string,
    title: string,
}

export type FilterDescriptionParams = {
    imagesData: Image[]
}

export const FilterDescription = (params: FilterDescriptionParams) => {
    return (
        <Box>
            <ImageList sx={{ height: 200 }} cols={params.imagesData.length}>
                {params.imagesData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&fit=crop&auto=format&dpr=2 1x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}