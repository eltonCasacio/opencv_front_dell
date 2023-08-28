import { Box, Button, TextField } from '@mui/material'
import { CustomSelect } from '../../../components/CustomSelect'
import { Images } from '../../../components/ImageList'

export type ContetParams = {
    filters: Array<{id:number,name:string}>
    textRef: React.RefObject<HTMLInputElement>
    handleChangeFilter: (id: string) => void
    handleSaveFilter: (fileName: string) => void
}

const Content = (params: ContetParams) => {

    return (
        <Box sx={{
            display: 'flex',
            height:'82vh',
            flexDirection: 'column'
        }}>
            <Box display={'flex'} justifyContent='space-between' alignItems={'center'}>
                <CustomSelect 
                    title='Filtros' 
                    options={params.filters} 
                    callback={(id) => params.handleChangeFilter(id)} />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        inputRef={params.textRef}
                        id="outlined-read-only-input"
                        label="Nome Filtro"
                        size="small"/>
                    <Button variant="contained" color="info" onClick={() => params.handleSaveFilter(params.textRef.current?.value || '')}>
                        SALVAR
                    </Button>
                </Box>
            </Box>
            <Box>
                <Images width={1000} cols={4} images={itemData} showItemBar={false} />
            </Box>
        </Box>
    )
}

export default Content

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