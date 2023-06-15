import { Box, Grid, createTheme } from '@mui/material';
import './App.css';
import { ThemeProvider } from '@mui/system';
import { Header } from './components/Header';
import { Images } from './components/ImageList';
import { SimpleAccordion } from './components/CardSliders';

const theme = createTheme({})

function App() {
  return <ThemeProvider theme={theme}>
    <Box component={'main'} sx={{ backgroundColor: '#1b1b1b' }}>
      <Header />
      <Images />
      <Box overflow={'auto'}>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={3}>
            <SimpleAccordion title='L - H' />
          </Grid>
          <Grid item xs={3}>
            <SimpleAccordion title='L - H' />
          </Grid>
          <Grid item xs={3}>
            <SimpleAccordion title='L - H' />
          </Grid>
          <Grid item xs={3}>
            <SimpleAccordion title='L - H' />
          </Grid>
        </Grid>

        <Grid container spacing={1} alignItems="center">
          <Grid item xs={3}>
            <SimpleAccordion title='L - H' />
          </Grid>
          <Grid item xs={3}>
            <SimpleAccordion title='L - H' />
          </Grid>
          <Grid item xs={3}>
            <SimpleAccordion title='L - H' />
          </Grid>
          <Grid item xs={3}>
            <SimpleAccordion title='L - H' />
          </Grid>
        </Grid>

        <Grid container spacing={1} alignItems="center">
          <Grid item xs={3}>
            <SimpleAccordion title='L - H' />
          </Grid>
          <Grid item xs={3}>
            <SimpleAccordion title='L - H' />
          </Grid>
          <Grid item xs={3}>
            <SimpleAccordion title='L - H' />
          </Grid>
          <Grid item xs={3}>
            <SimpleAccordion title='L - H' />
          </Grid>
        </Grid>

        <Grid container spacing={1} alignItems="center">
          <Grid item xs={3}>
            <SimpleAccordion title='L - H' />
          </Grid>
          <Grid item xs={3}>
            <SimpleAccordion title='L - H' />
          </Grid>
          <Grid item xs={3}>
            <SimpleAccordion title='L - H' />
          </Grid>
          <Grid item xs={3}>
            <SimpleAccordion title='L - H' />
          </Grid>
        </Grid>
      </Box>
    </Box>
  </ThemeProvider>

}

export default App;
