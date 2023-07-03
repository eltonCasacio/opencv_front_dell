import { Box, Button, Container, IconButton } from "@mui/material"
import { useAppSelector } from "../../app/hooks"
import { selectFilters } from "./filterSlice"
import { Link } from "react-router-dom"
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp, GridToolbar } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';

export const FilterList = () => {
    const filters = useAppSelector(selectFilters)
    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            flex: 0.2
        },
        {
            field: 'name',
            headerName: 'NOME',
            flex: 1
        },
        {
            field: 'actions',
            headerName: 'AÇÕES',
            flex: 0.3,
            renderCell: renderActionsCell
        },
    ];
    const gridRows = filters.map(filter => {
        return { id: filter.id, name: filter.name }
    })
    const rows: GridRowsProp = gridRows

    function renderActionsCell(params: GridRenderCellParams) {
        return (
            <IconButton
                color="secondary"
                onClick={() => console.log('renderActionsCell delete')}
                aria-label="delete"
            >
                <DeleteIcon />
            </IconButton>
        )
    }
    return (
        <Box maxWidth='xl' sx={{ my: 4, mx: 4, flexGrow: 1 }}>
            <Box display={'flex'} justifyContent={'flex-end'}>
                <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to='/apply-filters'
                    style={{ marginBottom: '1rem' }}
                >
                    Create Filter
                </Button>
            </Box>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSizeOptions={[4, 5, 10, 15, 100]}
                disableRowSelectionOnClick
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    },
                }}
            />
        </Box>
    )
}