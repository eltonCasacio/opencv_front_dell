import { Box, Button, TextField } from '@mui/material'
import { CustomSelect } from '../../../components/CustomSelect'
import { Images } from '../../../components/ImageList'
import { FilterDescription } from './FilterDescription'

export type ContetParams = {
    filters: string[]
    textRef: React.RefObject<HTMLInputElement>
    handleChangeFilter: (fileName: string) => void
    handleSaveFilter: (fileName: string) => void
}

const Content = (params: ContetParams) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            mt: 1,
        }}>
            <Box display={'flex'} justifyContent='space-between' alignItems={'center'}>
                <CustomSelect filters={params.filters} callback={params.handleChangeFilter} />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        inputRef={params.textRef}
                        id="outlined-read-only-input"
                        label="Nome Filtro"
                        size="small"
                    />
                    <Button variant="contained" color="info" onClick={() => params.handleSaveFilter(params.textRef.current?.value || '')}>
                        SALVAR
                    </Button>
                </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
                <Images />
            </Box>
            <Box>
                <FilterDescription imagesData={itemData} />
            </Box>
        </Box>
    )
}

export default Content

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    // {
    //     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    //     title: 'Burger',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    //     title: 'Camera',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    //     title: 'Coffee',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    //     title: 'Hats',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    //     title: 'Honey',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    //     title: 'Basketball',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    //     title: 'Fern',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    //     title: 'Mushrooms',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    //     title: 'Tomato basil',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    //     title: 'Sea star',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    //     title: 'Bike',
    // },
];