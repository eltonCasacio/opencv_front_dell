import { Box, Grid, Button, TextField } from "@mui/material";
import React from "react";
import { CardRangeSider } from "../../components/CardRangeSider";
import { CardSimpleSider } from "../../components/CardSimpleSlider";
import { Images } from "../../components/ImageList";
import { CustomSelect } from '../../components/CustomSelect';
import {
    selectFilterColorRGB,
    trackbarParametersFilterIterationsErode,
    trackbar_parametersFilter_iterations_dilate

} from "../../services/filter_params";

export const FilterProps = {
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

    function changeFilter(value: string) {

    }

    function saveFilter(value: string) {

    }

    React.useEffect(() => {
        const interval = setInterval(() => {
            try {
                console.log("SE INTERVAL:::")
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
                    <CustomSelect filters={filters} callback={changeFilter} />
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
            {/* <Images /> */}
            <Grid container >
                <Grid container item spacing={4} alignItems="center">
                    <Grid item md={4}>
                        <CardRangeSider
                            title='Low/Hight - Vermelho'
                            callback={(value) => selectFilterColorRGB({
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
                        <CardRangeSider
                            title='Low/Hight - Verde'
                            callback={(value) => selectFilterColorRGB({
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
                        <CardRangeSider
                            title='Low/Hight - Azul'
                            callback={(value) => selectFilterColorRGB({
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
                        <CardSimpleSider
                            initValue={selectedFilter.erode}
                            callback={trackbarParametersFilterIterationsErode}
                        />
                    </Grid>
                </Grid>
                <Grid container item spacing={4} alignItems="center">
                    <Grid item xs={3}>
                        <CardSimpleSider
                            initValue={selectedFilter.dilate}
                            callback={trackbar_parametersFilter_iterations_dilate}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
