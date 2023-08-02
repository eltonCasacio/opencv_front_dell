import { Box, Button, TextField } from '@mui/material'
import { CustomSelect } from '../../../components/CustomSelect'
import { Images } from '../../../components/ImageList'

export type ContetParams = {
    filters: string[]
    textRef: React.RefObject<HTMLInputElement>
    handleChangeFilter: (fileName: string) => void
    handleSaveFilter: (fileName: string) => void
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

const Content = (params: ContetParams) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: 1,
        }}>
            <Box display={'flex'} justifyContent='space-between' alignItems={'center'}>
                <CustomSelect filters={params.filters} callback={(value) => params.handleChangeFilter(value)} />
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
            <Box>
                <Images width={1000} cols={4} images={itemData} />
            </Box>
        </Box>
    )
}

export default Content