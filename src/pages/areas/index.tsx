import { Box, Button, Grid } from "@mui/material"
import { Sidebar } from "./components/Sidebar"
import Content from "./components/Content"
import { useEffect, useRef, useState } from "react"
import { getCurrentAreasParams, getAreas, changeCurrentAreas, saveAreas, deleteAreas, clear_areas_params } from '../../services/areas';

export interface AreasOption {
    id: number
    name: string
}

export const AreaProps = {
    name: "",
    area01_X1: 0,
    area01_Y1: 0,
    area01_X2: 0,
    area01_Y2: 0,
    area02_X1: 0,
    area02_Y1: 0,
    area02_X2: 0,
    area02_Y2: 0,
    area03_X1: 0,
    area03_Y1: 0,
    area03_X2: 0,
    area03_Y2: 0,
    area04_X1: 0,
    area04_Y1: 0,
    area04_X2: 0,
    area04_Y2: 0,
}

export const Areas = () => {
    const [areas, setAreas] = useState<AreasOption[]>([])
    const [currentAreaParams, setCurrentAreasParams] = useState(AreaProps)
    const [imageSize, setImageSize] = useState([0, 0])
    let ref = useRef<HTMLInputElement>(null);

    function updateForm() {
        getCurrentAreasParams().then(res => {
            if(!!res){
                setImageSize([res?.width || 0, res?.height || 0])
                setCurrentAreasParams(res)
                getAreas().then(res => setAreas(res))
            }
        })
    }

    function changeFilter(id: number) {
        changeCurrentAreas(id).then(() => {
            updateForm()
        })
    }

    function handleSave(name: string) {
        saveAreas(name).then(_ => {
            updateForm()
            if (ref.current)
                ref.current.value = ""
        })
    }

    function handleDelete() {
        deleteAreas().then(_ => {
            clearParams()
        })
    }

    function clearParams() {
        clear_areas_params()
        updateForm()
    }

    useEffect(() => {
        updateForm()
    }, [])


    return (
        <Box
            height={'88%'}
            overflow={'auto'}
            p={1}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
            flex={1}>

            <Grid container flex={1}>
                <Grid item sm={3} pr={1}>
                    <Sidebar
                        min={[0, 0]}
                        max={[imageSize[0], imageSize[1]]}
                        areaProps={currentAreaParams} />
                </Grid>

                <Grid item sm={9}>
                    <Content
                        areas={areas}
                        textRef={ref}
                        handleChangeFilter={(id) => changeFilter(Number(id))}
                        handleSave={handleSave} />
                </Grid>
            </Grid>

            <Box display={'flex'} justifyContent={'flex-end'}>
                <Button
                    sx={{ marginRight: 1 }}
                    variant="contained"
                    size="small"
                    color="primary"
                    onClick={clearParams}>
                    limpar
                </Button>

                <Button
                    variant="contained"
                    size="small"
                    color="error"
                    onClick={handleDelete}>
                    Excluir
                </Button>
            </Box>
        </Box>
    )
}