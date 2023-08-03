import { Grid } from "@mui/material"
import { MenuArea } from "./components/MenuArea"
import Content from "./components/Content"
import { useEffect, useRef, useState } from "react"
import { getAreas } from "../../services/areas"
import { updateAreaAPI } from '../../services/areas';

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
    const [filters, setFilters] = useState(FakeFilters)
    const [currentArea, setCurrentArea] = useState(AreaProps)
    const [imageSize, setImageSize] = useState([0,0])
    let ref = useRef<HTMLInputElement>(null);

    function changeFilter() { }
    function saveFilter(value: string) { }

    useEffect(() => {
        getAreas().then(res => {
            console.log(res)
            setImageSize([res.width, res.height])
            setCurrentArea(res)
        })
    },[])
    
    useEffect(() => {
        console.log(currentArea)
        updateAreaAPI(currentArea)
    },[currentArea])

    return (
        <Grid container>
            <Grid sm={3}>
                <MenuArea 
                    min={[0 ,0]}
                    max={[imageSize[0], imageSize[1]]} 
                    areaProps={currentArea}
                    handleSetCurrentArea={setCurrentArea}
                />
            </Grid>

            <Grid md={9}>
                <Content
                    filters={filters}
                    textRef={ref}
                    handleChangeFilter={changeFilter}
                    handleSaveFilter={saveFilter}
                    />
            </Grid>
        </Grid>
    )
}
const FakeFilters = [
    "Fake Filtro 1",
    "Fake Filtro 2",
    "Fake Filtro 3",
    "Fake Filtro 4",
    "Fake Filtro 5",
]