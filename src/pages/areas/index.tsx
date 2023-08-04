import { Box, Button, Grid } from "@mui/material"
import { MenuArea } from "./components/MenuArea"
import Content from "./components/Content"
import { useEffect, useRef, useState } from "react"
import { updateAreaAPI, getCurrentAreasParams, getAreas, changeCurrentAreas, saveAreas, deleteAreas } from '../../services/areas';

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
    const [imageSize, setImageSize] = useState([0,0])
    let ref = useRef<HTMLInputElement>(null);

    function changeFilter(id: number) {
        changeCurrentAreas(id)
    }

    function saveFilter(name: string) {
        saveAreas(name)
    }

    function handleDelete() {
        deleteAreas()
    }

    useEffect(() => {
        getCurrentAreasParams().then(res => {
            setImageSize([res.width, res.height])
            setCurrentAreasParams(res)
            getAreas().then(res => {setAreas(res)})
        })
    },[])
    
    useEffect(() => {updateAreaAPI(currentAreaParams)},[currentAreaParams])

    return (
        <Box maxHeight={'90vh'} overflow={'auto'} p={1}>
            <Grid container>
                <Grid sm={3} pr={1}>
                    <MenuArea 
                        min={[0 ,0]}
                        max={[imageSize[0], imageSize[1]]} 
                        areaProps={currentAreaParams}
                        handleSetCurrentArea={setCurrentAreasParams}
                    />
                </Grid>

                <Grid sm={9} >
                    <Content
                        areas={areas}
                        textRef={ref}
                        handleChangeFilter={(id) => changeFilter(Number(id))}
                        handleSaveFilter={saveFilter}
                    />

                    <Box textAlign={'end'}>
                        <Button 
                            variant="contained" 
                            size="small" 
                            color="error" 
                            onClick={handleDelete}
                        >
                            Excluir
                        </Button>
                    </Box>

                    
                </Grid>
            </Grid>
        </Box>
    )
}