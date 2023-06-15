import { Route, Routes as Myroutes } from 'react-router-dom';
import { Home } from './features/monit'
import { ListFilter, CreateFilter, DetailFilter } from './features/filters'
import { Box, Typography } from '@mui/material';
export const Routes = () => {
  return (
    <Myroutes>
      <Route path='/' element={<Home />} />
      <Route path='/apply-filters' element={<CreateFilter />} />
      <Route path='/filters' element={<ListFilter />} />
      <Route path='/filter' element={<DetailFilter />} />

      <Route path='*' element={
        <Box sx={{ color: 'white' }}>
          <Typography variant='h1'>404</Typography>
          <Typography variant='h2'>Page not found</Typography>
        </Box>
      } />
    </Myroutes>
  )
}