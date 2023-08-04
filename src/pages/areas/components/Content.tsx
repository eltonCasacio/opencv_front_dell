import { Box, Button, TextField } from '@mui/material'
import { CustomSelect } from '../../../components/CustomSelect'
import { Option } from '../../../components/CustomSelect'

export type ContetParams = {
    areas: Option[]
    textRef: React.RefObject<HTMLInputElement>
    handleChangeFilter: (id: string) => void
    handleSave: (fileName: string) => void
}

const Content = (params: ContetParams) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
        }}>
             <Box display={'flex'} justifyContent='space-between' alignItems={'center'}>
                <CustomSelect 
                    title='Areas' 
                    options={params.areas} 
                    callback={(value) => params.handleChangeFilter(value)} 
                />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        inputRef={params.textRef}
                        id="outlined-read-only-input"
                        label="Nome Filtro"
                        size="small"
                    />
                    <Button variant="contained" color="info" onClick={() => params.handleSave(params.textRef.current?.value || '')}>
                        SALVAR
                    </Button>
                </Box>
            </Box>
            <Box mt={1}>
                <img
                    width={'62%'}
                    src={'http://localhost:8000/videolayer03'}
                    srcSet={'http://localhost:8000/videolayer03'}
                    alt={"area demarcada"}
                    loading="lazy"
                />
            </Box>
        </Box>
    )
}

export default Content