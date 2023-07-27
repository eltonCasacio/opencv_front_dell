import { Box, Grid, Button, TextField } from "@mui/material";
import React from "react";
import { CardRangeSider } from "../../components/CardRangeSider";
import { CardSimpleSider } from "../../components/CardSimpleSlider";
import { Images } from "../../components/ImageList";
import { CustomSelect } from '../../components/CustomSelect';
import { changeFilter, getCurrentFilter, getFilters, saveFilter, sendLowHeightValues, sendSimpleValue, sendTamMinMaxlvlh, sendTamminmax } from "../../services/filter_params";

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

    function loadData() {
        getFilters()
        getCurrentFilter()
    }

    React.useEffect(() => {
        const interval = setInterval(async () => {
            try {
                loadData()
            } catch (error) {
                console.error("Erro ao carregar dados do filtro:: ", error)
            }
        }, 1000);

        return function cleanup() {
            clearInterval(interval)
        };
    }, [])

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
                    <CustomSelect filters={filters} callback={(value) => changeFilter(value)} />
                </Box>
                <Box>
                    <TextField
                        inputRef={ref}
                        id="outlined-read-only-input"
                        label="Nome Filtro"
                        size="small"
                    />
                    <Button variant="contained" color="info" onClick={() => saveFilter(ref.current?.value || '')}>
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
                            callback={(value) => sendLowHeightValues({
                                color: 'VERMELHO',
                                min: value[0],
                                max: value[1]
                            })}
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
                            callback={(value) => sendLowHeightValues({
                                color: 'VERDE',
                                min: value[0],
                                max: value[1]
                            })}
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
                            callback={(value) => sendLowHeightValues({
                                color: 'AZUL',
                                min: value[0],
                                max: value[1]
                            })}
                            range={[
                                selectedFilter.lazul,
                                selectedFilter.hazul
                            ]}
                            min={0}
                            max={255}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <CardSimpleSider
                            initValue={selectedFilter.erode}
                            title='Iteration Erode'
                            callback={(value) => sendSimpleValue(value, 'iterations_erode')}
                        />
                    </Grid>
                </Grid>
                <Grid container item spacing={4} alignItems="center">
                    <Grid item xs={3}>
                        <CardRangeSider
                            title='Tam MinMaxLV'
                            callback={(value) => sendTamMinMaxlvlh({ attr: 'LV', value })}
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
                            callback={(value) => sendTamMinMaxlvlh({ attr: 'LH', value })}
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
                        <CardSimpleSider
                            initValue={selectedFilter.dilate}
                            title='Iteration Dilate'
                            callback={(value) => sendSimpleValue(value, 'iterations_dilate')}
                        />
                    </Grid>
                </Grid>
                <Grid container item spacing={4} alignItems="center">
                    <Grid item xs={3}>
                        <CardSimpleSider
                            initValue={selectedFilter.lineVertical}
                            title='trackbar_LineVertical'
                            callback={(value) => sendSimpleValue(value, 'trackbar_LineVertical')} />
                    </Grid>
                    <Grid item xs={3}>
                        <CardSimpleSider
                            initValue={selectedFilter.lineHorizontal}
                            title='trackbar_LineHorizontal'
                            callback={(value) => sendSimpleValue(value, 'trackbar_LineHorizontal')}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <CardSimpleSider
                            initValue={selectedFilter.lineRange}
                            title='trackbar_LineRange'
                            callback={(value) => sendSimpleValue(value, 'trackbar_LineRange')}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
