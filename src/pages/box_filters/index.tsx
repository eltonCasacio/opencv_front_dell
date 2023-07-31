import Grid from '@mui/material/Unstable_Grid2';
import React, { useEffect } from 'react';
import Content from './components/Content';
import { Sidebar } from './components/Sidebar';
import { trackbarParametersFilterIterationsErode } from '../../services/filter_params';

export const FilterProps = {
    name: "",
    dilate: 1,
    erode: 2,
    hazul: 3,
    hverde: 4,
    hvermelho: 5,
    id: 6,
    lazul: 7,
    lineHorizontal: 8,
    lineRange: 9,
    lineVertical: 10,
    lverde: 11,
    lvermelho: 12,
    tamMax: 13,
    tamMaxLh: 14,
    tamMaxLv: 15,
    tamMin: 16,
    tamMinLh: 17,
    tamMinLv: 18,
}

export const BoxFilters = () => {
    const [filters, setFilters] = React.useState(FakeFilters)
    const [selectedFilter, setSelectedFilter] = React.useState(FilterProps)

    let ref = React.useRef<HTMLInputElement>(null);

    function changeFilter() { }
    function saveFilter(value: string) { }

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
        <Grid container spacing={1} sx={{ height: '91vh', paddingX: 1 }}>
            <Grid md={3}>
                <Sidebar selectedFilter={selectedFilter} handleParametersErode={trackbarParametersFilterIterationsErode} />
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