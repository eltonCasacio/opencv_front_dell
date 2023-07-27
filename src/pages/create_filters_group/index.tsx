import Grid from '@mui/material/Unstable_Grid2';
import { changeFilter, saveFilter } from '../../services/filter_params';
import React from 'react';
import Content from './components/Content';
import { Sidebar } from './components/Sidebar';

export const FilterProps = {
    name: "",
    dilate: 0,
    erode: 0,
    hazul: 0,
    hverde: 0,
    hvermelho: 0,
    id: 0,
    lazul: 0,
    lineHorizontal: 0,
    lineRange: 0,
    lineVertical: 0,
    lverde: 0,
    lvermelho: 0,
    tamMax: 0,
    tamMaxLh: 0,
    tamMaxLv: 0,
    tamMin: 0,
    tamMinLh: 0,
    tamMinLv: 0,
}

export const CreateFiltersGroup = () => {
    const [filters, setFilters] = React.useState([])
    const [selectedFilter, setSelectedFilter] = React.useState(FilterProps)

    let ref = React.useRef<HTMLInputElement>(null);

    return (
        <Grid container spacing={1} sx={{ height: '91vh', paddingX: 1 }}>
            <Grid md={3}>
                <Sidebar selectedFilter={selectedFilter} />
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
