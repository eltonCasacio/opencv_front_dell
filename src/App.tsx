import { Box, Typography } from '@mui/material';
import './App.css';
import { ThemeProvider } from '@mui/system';
import { Header } from './components/Header';
import { appTheme } from './config/theme';
import { ListFilter, CreateFilter, DetailFilter } from './features/filters'
import { Home } from './features/monit'
import { Route, Routes } from 'react-router-dom';

function App() {
  return <ThemeProvider theme={appTheme}>
    <Box
      component={'main'}
      sx={{
        height: '100vh',
        backgroundColor: (theme) => theme.palette.grey[900]
      }}
    >
      <Header />
      <Routes>
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
      </Routes>
    </Box>
  </ThemeProvider>

}

export default App;
