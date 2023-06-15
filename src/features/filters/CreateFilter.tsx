import { Box, Grid } from "@mui/material";
import { SimpleAccordion } from "../../components/CardSliders";
import { Images } from "../../components/ImageList";
import { Layout } from "../../components/Layout";

export const CreateFilter = () => {
    return (
        <Layout>
            <Images />
            <Box>
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
        </Layout>
    )
}
