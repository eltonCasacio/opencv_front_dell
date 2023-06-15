import { Box, Grid } from "@mui/material";
import { SimpleAccordion } from "../../components/CardSliders";
import { Images } from "../../components/ImageList";
import { Axios } from "../../services/api";

export const CreateFilter = () => {
    const lv = (values: number[]) => {
        try {
            Axios.post('l', { color: 'vermelho', low: values[0], hight: values[1] })
        } catch (error) {
            console.error(error)
        }
    }
    const lvd = (values: number[]) => {
        try {
            Axios.post('l', { color: 'verde', low: values[0], hight: values[1] })
        } catch (error) { console.error(error) }
    }

    const la = (values: number[]) => {
        try {
            Axios.post('l', { color: 'azul', low: values[0], hight: values[1] })
        } catch (error) { console.error(error) }
    }


    return (
        <Box component={'main'} ml={1} mr={1}>
            <Images />
            <Grid container spacing={3}>
                <Grid container item spacing={5} alignItems="center">
                    <Grid item xs={3}>
                        <SimpleAccordion title='Low/Hight - Vermelho' callback={lv} />
                    </Grid>
                    <Grid item xs={3}>
                        <SimpleAccordion title='Low/Hight - Verde' callback={lvd} />
                    </Grid>
                    <Grid item xs={3}>
                        <SimpleAccordion title='Low/Hight - Azul' callback={la} />
                    </Grid>
                </Grid>

                <Grid container item spacing={5} alignItems="center">
                    <Grid item xs={3}>
                        <SimpleAccordion title='L - H' callback={lv} />
                    </Grid>
                    <Grid item xs={3}>
                        <SimpleAccordion title='L - H' callback={lv} />
                    </Grid>
                    <Grid item xs={3}>
                        <SimpleAccordion title='L - H' callback={lv} />
                    </Grid>
                    <Grid item xs={3}>
                        <SimpleAccordion title='L - H' callback={lv} />
                    </Grid>
                </Grid>

                <Grid container item spacing={5} alignItems="center">
                    <Grid item xs={3}>
                        <SimpleAccordion title='L - H' callback={lv} />
                    </Grid>
                    <Grid item xs={3}>
                        <SimpleAccordion title='L - H' callback={lv} />
                    </Grid>
                    <Grid item xs={3}>
                        <SimpleAccordion title='L - H' callback={lv} />
                    </Grid>
                    <Grid item xs={3}>
                        <SimpleAccordion title='L - H' callback={lv} />
                    </Grid>
                </Grid>

                <Grid container item spacing={5} alignItems="center">
                    <Grid item xs={3}>
                        <SimpleAccordion title='L - H' callback={lv} />
                    </Grid>
                    <Grid item xs={3}>
                        <SimpleAccordion title='L - H' callback={lv} />
                    </Grid>
                    <Grid item xs={3}>
                        <SimpleAccordion title='L - H' callback={lv} />
                    </Grid>
                    <Grid item xs={3}>
                        <SimpleAccordion title='L - H' callback={lv} />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
