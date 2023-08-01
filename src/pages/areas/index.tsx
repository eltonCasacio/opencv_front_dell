import { Grid } from "@mui/material"
import { MenuArea } from "./components/MenuArea"
import Content from "./components/Content"
import { useRef, useState } from "react"

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
    const [selectedFilter, setSelectedFilter] = useState(AreaProps)

    let ref = useRef<HTMLInputElement>(null);

    function changeFilter() { }
    function saveFilter(value: string) { }
    return (
        <Grid container spacing={1} sx={{ height: '91vh'}}>
            <Grid md={3}>
                <MenuArea  areaProps={selectedFilter}/>
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