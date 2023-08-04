import Grid from '@mui/material/Unstable_Grid2';
import React, { useEffect } from 'react';
import Content from './components/Content';
import { Sidebar } from './components/Sidebar';
import { getFilters, saveFilters, deleteFilters, changeCurrentFilters } from '../../services/box_filters';
import { Box, Button } from '@mui/material';

export interface Filters {
    id: number
    name: string
}

export const FilterProps = {
    name: "",
    dilate: 0,
    erode: 0,
    selectFilterColorRedMin: 0,
    SpliceLineJumpingWhiteColorVertically_JumpSize_Min:0,
}

export const BoxFilters = () => {
    const [filters, setFilters] = React.useState<Filters[]>([])
    const [selectedFilter, setSelectedFilter] = React.useState(FilterProps)
    let ref = React.useRef<HTMLInputElement>(null);

    function changeFilter(id: number) {
        changeCurrentFilters(id)
    }

    function saveFilter(value: string) { 
        saveFilters(value)
    }

    function handleDelete() { 
        deleteFilters()
    }

    useEffect(() => {
        getFilters().then(res => setFilters(res))
    }, [])
   
    // useEffect(() => {
    //     const interval = setInterval(async () => {
    //         try {
    //             setFilters(FakeFilters)
    //             setSelectedFilter(FilterProps)
    //             console.log("FILTROS ATUALIZADOS::", FilterProps)
    //         } catch (error) {
    //             console.error("Erro ao carregar dados do filtro:: ", error)
    //         }
    //     }, 3000);

    //     return function cleanup() {
    //         clearInterval(interval)
    //     };
    // }, [])


    return (
        <Grid container flex={1} height={'90vh'}>
            <Grid md={3} p={1} pr={0}>
                <Sidebar selectedFilter={selectedFilter} />
            </Grid>

            <Grid md={9} p={1}>
                <Content
                    filters={filters}
                    textRef={ref}
                    handleChangeFilter={(id) => changeFilter(Number(id))}
                    handleSaveFilter={saveFilter}
                />

                <Box textAlign={"end"}>
                    <Button variant="contained" size="small" color="error" onClick={handleDelete}>
                        Excluir
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}