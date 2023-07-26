import { Box, Grid, Button, TextField } from "@mui/material";
import React from "react";
import { CardRangeSider } from "../../components/CardRangeSider";
import { CardSimpleSider } from "../../components/CardSimpleSlider";
import { Images } from "../../components/ImageList";
import { Axios } from "../../services/api";
import { CustomSelect } from '../../components/CustomSelect';

const FilterProps = {
    dilate: 0,
    erode: 0,
    hazul: 0,
    hverde: 0,
    hvermelho: 0,
    id: 0,
    lazul: 0,
    lineHorizontal: 0,
    lineRange: 0,
    lineVertical: 0,
    lverde: 0,
    lvermelho: 0,
    name: "",
    tamMax: 0,
    tamMaxLh: 0,
    tamMaxLv: 0,
    tamMin: 0,
    tamMinLh: 0,
    tamMinLv: 0,
}

export const CreateFilter = () => {
    let ref = React.useRef<HTMLInputElement>(null);
    const [selectedFilter, setSelectedFilter] = React.useState(FilterProps)
    const [filters, setFilters] = React.useState([])

    const sendValues = (url: string, color: string, values: number[]) => {
        if (values[0] >= 0 && values[1] >= 0) {
            Axios.post(url, { color: color, low: values[0], hight: values[1] })
        }
    }

    const lvermelho = (values: number[]) => {
        sendValues('loeheight', 'vermelho', values)
    }

    const lvd = (values: number[]) => {
        sendValues('loeheight', 'verde', values)
    }

    const la = (values: number[]) => {
        sendValues('loeheight', 'azul', values)
    }

    const sendTamMinMaxlvlhParams = (attr: string, values: number[]) => {
        if (values[0] >= 0 && values[1] >= 0) {
            console.log(attr, values[0], values[1])
            Axios.post('tamminmaxlvlh', { attr: attr, min: values[0], max: values[1] })
        }
    }

    const tamMinMaxLV = (values: number[]) => {
        sendTamMinMaxlvlhParams('lv', values)
    }

    const tamMinMaxLH = (values: number[]) => {
        sendTamMinMaxlvlhParams('lh', values)
    }

    const sendSimpleValue = (url: string, value: number) => {
        if (value >= 0) {
            Axios.post(url, { value: value })
        }
    }

    const sendTamminmax = (values: number[]) => {
        if (values[0] >= 0 && values[1] >= 0) {
            Axios.post('tamminmax', { min: values[0], max: values[1] })
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

    const handleTrackbarLineHorizontal = (value: number) => {
        sendSimpleValue('trackbar_LineHorizontal', value)
    }

    const handleTrackbarLineRange = (value: number) => {
        sendSimpleValue('trackbar_LineRange', value)
    }

    const handleSaveFilter = () => {
        Axios.post('save-filter', { fileName: ref.current?.value }).then(_ => {
            if (ref.current?.value != null) {
                ref.current.value = ""
            }
            loadData()
        })
    }

    const handleChangeFilter = (fileName: string) => {
        Axios.post('filter', { fileName: fileName }).then(res => setSelectedFilter(res.data))
    }

    function loadData() {
        Axios.get('filters').then(res => setFilters(res.data)).catch(error => console.error(error))
        Axios.get('current_filter').then(res => setSelectedFilter(res.data)).catch(error => console.error(error))
    }

    React.useEffect(() => loadData(), [])

    return (
        <Box
            component={'main'}
            display='flex'
            flexDirection={'column'}
            justifyContent='space-between'
            ml={2} mr={2}
        >
            <Box display={'flex'} justifyContent='space-between' alignItems={'center'} mt={1}>
                <Box>
                    <CustomSelect filters={filters} callback={(value) => handleChangeFilter(value)} />
                </Box>
                <Box>
                    <TextField
                        inputRef={ref}
                        id="outlined-read-only-input"
                        label="Nome Filtro"
                        size="small"
                    />
                    <Button variant="contained" color="info" onClick={handleSaveFilter}>
                        SALVAR
                    </Button>
                </Box>
            </Box>
            <Images />
            <Grid container >
                <Grid container item spacing={4} alignItems="center">
                    <Grid item xs={3}>
                        <CardRangeSider
                            title='Low/Hight - Vermelho'
                            callback={lvermelho}
                            range={[
                                selectedFilter.lvermelho,
                                selectedFilter.hvermelho
                            ]}
                            min={0}
                            max={255}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <CardRangeSider
                            title='Low/Hight - Verde'
                            callback={lvd}
                            range={[
                                selectedFilter.lverde,
                                selectedFilter.hverde
                            ]}
                            min={0}
                            max={255}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <CardRangeSider
                            title='Low/Hight - Azul'
                            callback={la}
                            range={[
                                selectedFilter.lazul,
                                selectedFilter.hazul
                            ]}
                            min={0}
                            max={255}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <CardSimpleSider initValue={selectedFilter.erode} title='Iteration Erode' callback={sendIterationErode} />
                    </Grid>
                </Grid>
                <Grid container item spacing={4} alignItems="center">
                    <Grid item xs={3}>
                        <CardRangeSider
                            title='Tam MinMaxLV'
                            callback={tamMinMaxLV}
                            range={[
                                selectedFilter.tamMinLv,
                                selectedFilter.tamMaxLv
                            ]}
                            min={0}
                            max={255}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <CardRangeSider
                            title='Tam MinMaxLH'
                            callback={tamMinMaxLH}
                            range={[
                                selectedFilter.tamMinLh,
                                selectedFilter.tamMaxLh
                            ]}
                            min={0}
                            max={255}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <CardRangeSider
                            title='Tam Min Max'
                            callback={sendTamminmax}
                            range={[
                                selectedFilter.tamMin,
                                selectedFilter.tamMax
                            ]}
                            min={0}
                            max={255}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <CardSimpleSider initValue={selectedFilter.dilate} title='Iteration Dilate' callback={sendIterationDilate} />
                    </Grid>
                </Grid>
                <Grid container item spacing={4} alignItems="center">
                    <Grid item xs={3}>
                        <CardSimpleSider initValue={selectedFilter.lineVertical} title='trackbar_LineVertical' callback={handleTrackbarLineVertical} />
                    </Grid>
                    <Grid item xs={3}>
                        <CardSimpleSider initValue={selectedFilter.lineHorizontal} title='trackbar_LineHorizontal' callback={handleTrackbarLineHorizontal} />
                    </Grid>
                    <Grid item xs={3}>
                        <CardSimpleSider initValue={selectedFilter.lineRange} title='trackbar_LineRange' callback={handleTrackbarLineRange} />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
