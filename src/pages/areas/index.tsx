import { Box, Button, Grid } from "@mui/material"
import { MenuArea } from "./components/MenuArea"
import Content from "./components/Content"
import { useEffect, useRef, useState } from "react"
import { getCurrentAreasParams, getAreas, changeCurrentAreas, saveAreas, deleteAreas } from '../../services/areas';

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

    function updateAreas() {
        getAreas().then(res => setAreas(res))
    }

    function changeFilter(id: number) {
        changeCurrentAreas(id).then(() => {
            getCurrentAreasParams().then(res => {
                setCurrentAreasParams({...res})
            })
        })
    }

    function handleSave(name: string) {
        saveAreas(name).then(_ => {
            updateAreas()
            if(ref.current)
                ref.current.value = ""
        })
    }

    function handleDelete() {
        deleteAreas().then(_ => updateAreas())
    }

    useEffect(() => {
        getCurrentAreasParams().then(res => {
            setImageSize([res.width, res.height])
            setCurrentAreasParams(res)
            updateAreas()
        })
    },[])
    
   
    return (
        <Box maxHeight={'90vh'} overflow={'auto'} p={1}>
            <Grid container>
                <Grid sm={3} pr={1}>
                    <MenuArea 
                        min={[0 ,0]}
                        max={[imageSize[0], imageSize[1]]} 
                        areaProps={currentAreaParams}
                    />
                </Grid>

                <Grid sm={9} >
                    <Content
                        areas={areas}
                        textRef={ref}
                        handleChangeFilter={(id) => changeFilter(Number(id))}
                        handleSave={handleSave}
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