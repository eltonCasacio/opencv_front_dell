import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp, GridToolbar } from '@mui/x-data-grid';
import { IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { CredentialsResponse, EditCredentials } from '../../../services/credentials';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const initialState = {
  pagination: {
    paginationModel: { pageSize: 5 },
  },
}

const slotParams = {
  slots: { toolbar: GridToolbar },
  slotProps: {
    toolbar: {
      showQuickFilter: true,
      quickFilterProps: { debounceMs: 500 }
    },
  }
}

const pageSize = [2, 5, 10, 15, 25, 100]

interface TableUserParams {
  users: CredentialsResponse[]
  handleDelete: (user_id: number) => void
  handleEdit: (user_id: number) => void
}
export const TableUser = ({ users, handleDelete, handleEdit }: TableUserParams) => {

  const rows: GridRowsProp = users?.map(user => ({
    id: user.id,
    username: user.username,
    level_permission: user.level_permission,
  }))

  const columns: GridColDef[] = [
    { field: 'username', headerName: 'Username', flex: 1, renderCell: renderNameCell },
    { field: 'level_permission', headerName: 'Level Permission', flex: 1 },
    { field: 'id', headerName: 'Actions', width: 150, renderCell: renderActionsCell },
  ];

  function renderNameCell(rowData: GridRenderCellParams) {
    return (
      <Link
        style={{ textDecoration: "none" }}
        to={`/users/edit/${rowData.row.id}`}
      >
        <Typography color={"primary"}>
          {rowData.value}
        </Typography>
      </Link>
    )
  }

  function renderActionsCell(rowData: GridRenderCellParams) {
    return (
      <Box display={'flex'} alignItems={'center'}>
        <IconButton
          color="error"
          onClick={() => handleDelete(rowData.row.id)}
          aria-label='delete'
        >
          <DeleteIcon />
        </IconButton>
        <Link
          style={{ textDecoration: "none", paddingTop: 2 }}
          to={`/users/edit/${rowData.row.id}`}
        >
          <Typography color={"primary"}>
            <EditIcon color='info' />
          </Typography>
        </Link>
      </Box>
    )
  }


  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows}
        columns={columns}
        initialState={initialState}
        pageSizeOptions={pageSize}
        checkboxSelection
        disableRowSelectionOnClick
        slots={slotParams.slots}
        slotProps={slotParams.slotProps}
      />
    </Box>
  );
}
