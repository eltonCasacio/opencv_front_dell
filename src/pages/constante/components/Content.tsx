import { Box, Button } from '@mui/material'
import { CustomSelect } from '../../../components/CustomSelect'
import { Images } from '../../../components/ImageList'
import { Unitis } from '..'

export type ContetParams = {
    units: Unitis[]
    textRef: React.RefObject<HTMLInputElement>
    handleChangeUnit: (name: string) => void
    handleSave: () => void
}

export const Content = (params: ContetParams) => {
    function handleSelectedUnit(id: string) {
        if(params.units.length){
            const {name} = params.units[Number(id)]
            params.handleChangeUnit(name)
        }
    }
    
    return (
        <Box sx={{
            display: 'flex',
            height: '82vh',
            flexDirection: 'column'
        }}>
            <Box display={'flex'} justifyContent='space-between' alignItems={'center'}>
                <CustomSelect
                    title='Unidade'
                    options={params.units}
                    callback={handleSelectedUnit} />

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button variant="contained" color="info" onClick={params.handleSave}>
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