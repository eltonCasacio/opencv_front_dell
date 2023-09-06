import { Box } from '@mui/material';
import './App.css';
import { ThemeProvider } from '@mui/system';
import { Header } from './components/Header';
import { appTheme } from './config/theme';
import { RootRoutes } from './routes/root';
import { useAppSelector } from './app/hooks';

function App() {
  const { id } = useAppSelector(state => state.credentials)
  return (
    <ThemeProvider theme={appTheme}>
      <Box
        component={'main'}
        sx={{
          height: '100vh',
          overflow: '-webkit-paged-y',
          backgroundColor: (theme) => theme.palette.grey[900]
        }}>
        {!!id && <Header />}
        <RootRoutes />
      </Box>
    </ThemeProvider>
  )
}

export default App;
