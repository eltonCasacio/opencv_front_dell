import { Box, Button, TextField } from '@mui/material'
import { CustomSelect } from '../../../components/CustomSelect'
import { Images } from '../../../components/ImageList'

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
            {/* <Box sx={{ flex: 1 }}>
                <Images />
            </Box> */}
        </Box>
    )
}

export default Content