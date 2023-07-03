import { Box } from '@mui/material';
import './App.css';
import { ThemeProvider } from '@mui/system';
import { Header } from './components/Header';
import { appTheme } from './config/theme';
import { Routes } from './routes';

function App() {
  return <ThemeProvider theme={appTheme}>
    <Box
      component={'main'}
      sx={{
        height: '100vh',
        backgroundColor: (theme) => theme.palette.grey[900]
      }}>
      <Header />
      <Routes />
    </Box>
  </ThemeProvider>
}

export default App;
