import { Route, Routes as Myroutes } from 'react-router-dom';
// import { Home } from './pages/pallet_monitor'
// import { CreateFilter } from './pages/filters/filter_params'
import { CreateFiltersGroup } from './pages/create_filters_group'
import { Box, Typography } from '@mui/material';
export const Routes = () => {
  return (
    <Myroutes>
      <Route path='/' element={<CreateFiltersGroup />} />
      {/* <Route path='/apply-filters' element={<CreateFilter />} /> */}
      <Route path='/create-filters-group' element={<CreateFiltersGroup />} />
      <Route path='*' element={
        <Box sx={{ color: 'white' }}>
          <Typography variant='h1'>404</Typography>
          <Typography variant='h2'>Page not found</Typography>
        </Box>
      } />
    </Myroutes>
  )
}