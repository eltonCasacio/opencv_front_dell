import { Box, Grid, Button, TextField } from "@mui/material";
import React from "react";
import { CardRangeSider } from "../../components/CardRangeSider";
import { CardSimpleSider } from "../../components/CardSimpleSlider";
import { Images } from "../../components/ImageList";
import { Axios } from "../../services/api";

export const CreateFilter = () => {
    const [fileName, setFilaName] = React.useState("")
    
    const lvermelho = (values: number[]) => sendLParams('vermelho', values)
    const lvd = (values: number[]) => sendLParams('verde', values)
    const la = (values: number[]) => sendLParams('azul', values)
    const tamMinMaxLV = (values: number[]) => sendTamMinMaxlvlhParams('lv', values)
    const tamMinMaxLH = (values: number[]) => sendTamMinMaxlvlhParams('lh', values)
    const sendTamMinMaxlvlhParams = (attr: string, values: number[]) => {
        if (values[0] >= 0 && values[1] >= 0) {
            try {
                Axios.post('tamminmaxlvlh', { attr: attr, min: values[0], max: values[1] })
            } catch (error) {
                console.error(error)
            }
        }
    }

    const sendLParams = (color: string, values: number[]) => {
        if (values[0] >= 0 && values[1] >= 0) {
            try {
                Axios.post('l', { color: color, low: values[0], hight: values[1] })
            } catch (error) {
                console.error(error)
            }
        }
    }

    const sendSimpleValue = (url: string, value: number) => {
        if (value >= 0) {
            try {
                Axios.post(url, { value: value })
            } catch (error) {
                console.error(error)
            }
        }
    }

    const sendTamminmax = (values: number[]) => {
        if (values[0] >= 0 && values[1] >= 0) {
            try {
                Axios.post('tamminmax', { min: values[0], max: values[1] })
            } catch (error) {
                console.error(error)
            }
        }
    }

    const sendIterationErode = (value: number) => {
        sendSimpleValue('iterations_erode', value)
    }

    const sendIterationDilate = (value: number) => {
        sendSimpleValue('iterations_dilate', value)
    }

    const handleTrackbarLineVertical = (value: number) => {
        sendSimpleValue('trackbar_LineVertical', value)
    }

    const handleTrackbarLineRange = (value: number) => {
        sendSimpleValue('trackbar_LineRange', value)
    }

    const handleSaveFilter = () => {
        try {
            fetch("http://localhost:8000/form-salvar").then(res => console.log("RESSS",res)).catch(err => console.error("ERRO::", err))
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Box
            component={'main'}
            display='flex'
            flexDirection={'column'}
            justifyContent='space-between'
            ml={2} mr={2}
        >
            <Images />
            <Grid container >
                <Grid container item spacing={2} alignItems="center">
                    <Grid item xs={3}>
                        <CardRangeSider title='Low/Hight - Vermelho' callback={lvermelho} />
                    </Grid>
                    <Grid item xs={3}>
                        <CardRangeSider title='Low/Hight - Verde' callback={lvd} />
                    </Grid>
                    <Grid item xs={3}>
                        <CardRangeSider title='Low/Hight - Azul' callback={la} />
                    </Grid>
                </Grid>
                <Grid container item spacing={2} alignItems="center">
                    <Grid item xs={3}>
                        <CardRangeSider title='Tam MinMaxLV' callback={tamMinMaxLV} />
                    </Grid>
                    <Grid item xs={3}>
                        <CardRangeSider title='Tam MinMaxLH' callback={tamMinMaxLH} />
                    </Grid>
                    <Grid item xs={3}>
                        <CardRangeSider title='Tam Min Max' callback={sendTamminmax} />
                    </Grid>
                </Grid>
                <Grid container item spacing={2} alignItems="center">
                    <Grid item xs={3}>
                        <CardSimpleSider title='Iteration Erode' callback={sendIterationErode} />
                    </Grid>
                    <Grid item xs={3}>
                        <CardSimpleSider title='Iteration Dilate' callback={sendIterationDilate} />
                    </Grid>
                    <Grid item xs={3}>
                        <CardSimpleSider title='trackbar_LineVertical' callback={handleTrackbarLineVertical} />
                    </Grid>
                    <Grid item xs={3}>
                        <CardSimpleSider title='trackbar_LineRange' callback={handleTrackbarLineRange} />
                    </Grid>
                </Grid>
            </Grid>
            <Box display={'flex'} justifyContent='flex-end' mt={6}>
                <TextField
                    id="outlined-read-only-input"
                    label="Nome Filtro"
                    defaultValue={fileName}
                    size="small"
                    onChange={e => setFilaName(e.target.value)}
                />
                <Button variant="contained" color="info" onClick={handleSaveFilter}>
                    SALVAR
                </Button>
            </Box>
        </Box>
    )
}
