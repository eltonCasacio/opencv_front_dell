import { Route, Routes as Myroutes } from 'react-router-dom';
import { Areas } from './pages/areas'
import { Home } from './pages/pallet_monitor'
import { BoxFilters } from './pages/box_filters'
import { Box, Typography } from '@mui/material';
export const Routes = () => {
  return (
    <Myroutes>
      <Route path='/' element={<Home />} />
      <Route path='/box-filters' element={<BoxFilters />} />
      <Route path='/areas' element={<Areas />} />
      <Route path='*' element={
        <Box sx={{ color: 'white' }}>
          <Typography variant='h1'>404</Typography>
          <Typography variant='h2'>Page not found</Typography>
        </Box>
      } />
    </Myroutes>
  )
}