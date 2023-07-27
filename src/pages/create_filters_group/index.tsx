import Grid from '@mui/material/Unstable_Grid2';
import { changeFilter, saveFilter } from '../../services/filter_params';
import React from 'react';
import Content from './components/Content';
import { Sidebar } from './components/Sidebar';

export const CreateFiltersGroup = () => {
    const [filters, setFilters] = React.useState([])
    let ref = React.useRef<HTMLInputElement>(null);

    return (
        <Grid container spacing={1} sx={{ height: '91vh', paddingX: 1 }}>
            <Grid md={3}>
                <Sidebar />
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
