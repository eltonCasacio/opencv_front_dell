import { Box, Button, TextField } from '@mui/material'
import { Images } from '../../../components/ImageList'
import { CustomSelect } from '../../../components/CustomSelect'
import { useEffect, useState } from 'react'
import { getAreaImageSize } from '../../../services/areas'

export type ContetParams = {
    filters: string[]
    textRef: React.RefObject<HTMLInputElement>
    handleChangeFilter: (fileName: string) => void
    handleSaveFilter: (fileName: string) => void
}

const itemData = [
    {
        img: 'http://localhost:8000/videolayer03',
        title: 'Filtro 1',
    }
];

const Content = (params: ContetParams) => {
    const [imageSize, setImageSize] = useState([0,0])
   
    useEffect(() => {
        getAreaImageSize().then(res => setImageSize(imageSize))
    },[])

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
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
            <Images cols={1} images={itemData}/>
            
        </Box>
    )
}

export default Content