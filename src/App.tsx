import { Box, createTheme } from '@mui/material';
import './App.css';
import { ThemeProvider } from '@mui/system';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { CustomSlider } from './components/Slider';
import { useEffect, useState } from 'react';
import { Axios } from './services/api';

const theme = createTheme({})

function App() {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    Axios.post('l', { color: "vermelho", value: value })
  }, [value])

  return <ThemeProvider theme={theme}>
    <Box
      component={'main'}
      sx={{
        height: '100vh',
        backgroundColor: '#000000',
      }}
    >
      <Header />
      <Layout>
        <h1>Olá terraqueos - {value && `value: ${value}`}</h1>
        <img src="http://localhost:8000/videolayer01"></img>
        <img src="http://localhost:8000/videolayer02"></img>
        <img src="http://localhost:8000/videolayer03"></img>

        <CustomSlider callback={setValue} />
      </Layout>
    </Box>
  </ThemeProvider>

}

export default App;
