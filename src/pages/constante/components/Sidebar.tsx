import { ChangeEvent, useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Divider, Link, Paper, TextField } from '@mui/material';
import {
    selectFilterColorRGB,
    found_object_size_filter,
    horizontal_line_size,
    getCurrentFilterParams
} from '../../../services/box_filters';
import { CardRangeSider } from '../../../components/CardRangeSider';
import { calculate, load } from '../../../services/constant';

export const unitConversionProps = {
    selectFilterColor_Red_Min:0,
    selectFilterColor_Red_Max: 0,
    selectFilterColor_Green_Min: 0,
    selectFilterColor_Green_Max:0,
    selectFilterColor_Blue_Min:0,
    selectFilterColor_Blue_Max: 0,
    FoundObjectSizeFilter_Min: 0  ,
    FoundObjectSizeFilter_Max: 0   ,
    VerticalLineSizeFilterOfFoundObject_Min: 0  ,
    VerticalLineSizeFilterOfFoundObject_Max: 0    ,
    HorizontalLineSizeFilterOfFoundObject_Min: 0  ,
    HorizontalLineSizeFilterOfFoundObject_Max: 0 ,
}

export interface UnitConverionInterface {
    constanteUnidadeParaConvercaoPixelEmUnidade_EixoX: number
    constanteUnidadeParaConvercaoPixelEmUnidade_EixoY: number
    cameraDistanceFromObject: number
    medidaEmPixel_x: number
    medidadeEmUnidade_x: number
    medidaEmPixel_y: number
    medidadeEmUnidade_y: number
    current_unit: string
}

export const Sidebar = () => {
    const [selectedFilter, setSelectedFilter] = useState(unitConversionProps)
       
    const [unitConverion, setUnitConverion] = useState<UnitConverionInterface>({
        constanteUnidadeParaConvercaoPixelEmUnidade_EixoX: 0,
        constanteUnidadeParaConvercaoPixelEmUnidade_EixoY: 0,
        cameraDistanceFromObject: 0,
        medidaEmPixel_x: 0,
        medidadeEmUnidade_x: 0,
        medidaEmPixel_y: 0,
        medidadeEmUnidade_y: 0,
        current_unit: ""
    })

    const handleChangeState = (e: ChangeEvent<HTMLInputElement>) => {
        setUnitConverion({ ...unitConverion, [e.target.name]: e.target.value })
    }

    const handleFoundObjectSizeFilter = (value:number[]) => {
        setSelectedFilter({
            ...selectedFilter,
            FoundObjectSizeFilter_Min: value[0],
            FoundObjectSizeFilter_Max: value[1]
        })
        found_object_size_filter([
            selectedFilter.FoundObjectSizeFilter_Min,
            selectedFilter.FoundObjectSizeFilter_Max
        ])
    }

    const handleVerticalLineSizeFilter = (value:number[]) => {
        setSelectedFilter({
            ...selectedFilter,
            VerticalLineSizeFilterOfFoundObject_Min: value[0],
            VerticalLineSizeFilterOfFoundObject_Max: value[1]
        })
    }

    const handleSelectFilterColorRed = (value:number[]) => {
        selectFilterColorRGB({
            color: 'VERMELHO',
            min: value[0],
            max: value[1]
        })
        setSelectedFilter({ ...selectedFilter, selectFilterColor_Red_Min: value[0], selectFilterColor_Red_Max: value[1] })
    }

    const handleSelectFilterColorGreen = (value:number[]) => {
        selectFilterColorRGB({
            color: 'VERDE',
            min: value[0],
            max: value[1]
        })
        setSelectedFilter({ ...selectedFilter, selectFilterColor_Green_Min: value[0], selectFilterColor_Green_Max: value[1] })
    }

    const handleSelectFilterColorBlue = (value:number[]) => {
        selectFilterColorRGB({
            color: 'AZUL',
            min: value[0],
            max: value[1]
        })
        setSelectedFilter({ ...selectedFilter, selectFilterColor_Blue_Min: value[0], selectFilterColor_Blue_Max: value[1]})
    }

    const handleCalculate = () => {
        calculate(unitConverion)
    }

    useEffect(() => {
        load().then(params => setUnitConverion(params))
        getCurrentFilterParams().then(res => {
            if(res){
                setSelectedFilter({
                    selectFilterColor_Red_Min:      res.selectFilterColor_Red_Min,
                    selectFilterColor_Red_Max:      res.selectFilterColor_Red_Max,
                    selectFilterColor_Green_Min:    res.selectFilterColor_Green_Min,
                    selectFilterColor_Green_Max:    res.selectFilterColor_Green_Max,
                    selectFilterColor_Blue_Min:     res.selectFilterColor_Blue_Min,
                    selectFilterColor_Blue_Max:     res.selectFilterColor_Blue_Max,
                    FoundObjectSizeFilter_Min:      res.FoundObjectSizeFilter_Min,
                    FoundObjectSizeFilter_Max:      res.FoundObjectSizeFilter_Max,
                    VerticalLineSizeFilterOfFoundObject_Min:    res.VerticalLineSizeFilterOfFoundObject_Min,
                    VerticalLineSizeFilterOfFoundObject_Max:    res.VerticalLineSizeFilterOfFoundObject_Max,
                    HorizontalLineSizeFilterOfFoundObject_Min:  res.HorizontalLineSizeFilterOfFoundObject_Min,
                    HorizontalLineSizeFilterOfFoundObject_Max:  res.HorizontalLineSizeFilterOfFoundObject_Max,
                })
            }
        })
    }, [])


    return (
        <Box sx={style}>
            <Accordion sx={{ bgcolor: "gray", mb: 1 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Filtro RGB</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: '#3c3c3c', padding: 3 }}>
                    <CardRangeSider
                        title='vermelho'
                        callback={(value) => handleSelectFilterColorRed(value)
                    }
                        range={[
                           selectedFilter.selectFilterColor_Red_Min,
                           selectedFilter.selectFilterColor_Red_Max
                        ]}
                        min={0}
                        max={255}
                    />
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />

                    <CardRangeSider
                        title='verde'
                        callback={(value) => handleSelectFilterColorGreen(value)}
                        range={[
                            selectedFilter.selectFilterColor_Green_Min,
                            selectedFilter.selectFilterColor_Green_Max
                        ]}
                        min={0}
                        max={255}
                    />

                    <Divider variant="fullWidth" sx={{ mb: 2 }} />

                    <CardRangeSider
                        title='azul'
                        callback={(value) => handleSelectFilterColorBlue(value)}
                        range={[
                            selectedFilter.selectFilterColor_Blue_Min,
                            selectedFilter.selectFilterColor_Blue_Max
                        ]}
                        min={0}
                        max={255}
                    />

                    <Divider variant="fullWidth" sx={{ mb: 2 }} />

                    <Typography>Filtra cores RGB</Typography>
                    <Link target='_blank' href='https://docs.opencv.org' color="inherit">
                        Documentação
                    </Link>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ bgcolor: "gray", mb: 1 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header">
                    <Typography>found_object_size_filter</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: '#3c3c3c', padding: 3 }}>
                    <CardRangeSider
                        title=''
                        callback={(value) => handleFoundObjectSizeFilter(value)}
                        range={[
                            selectedFilter.FoundObjectSizeFilter_Min,
                            selectedFilter.FoundObjectSizeFilter_Max
                        ]}
                        min={0}
                        max={10000} />
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />

                    <Link target='_blank' href='#' color="inherit">
                        Documentação
                    </Link>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ bgcolor: "gray", mb: 1 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header">
                    <Typography>vertical_line_size_filter</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: '#3c3c3c', padding: 3 }}>
                    <CardRangeSider
                        title=''
                        callback={(value) => handleVerticalLineSizeFilter(value)}
                        range={[
                            selectedFilter.VerticalLineSizeFilterOfFoundObject_Min,
                            selectedFilter.VerticalLineSizeFilterOfFoundObject_Max
                        ]}
                        min={0}
                        max={1000} />
                    <Typography>vertical_line_size_filter</Typography>
                    <Link target='_blank' href='#' color="inherit">
                        Documentação
                    </Link>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ bgcolor: "gray", mb: 1 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header">
                    <Typography>horizontal_line_size</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: '#3c3c3c', padding: 3 }}>
                    <CardRangeSider
                        title=''
                        callback={(value) => horizontal_line_size(value)}
                        range={[
                            selectedFilter.HorizontalLineSizeFilterOfFoundObject_Min,
                            selectedFilter.HorizontalLineSizeFilterOfFoundObject_Max
                        ]}
                        min={0}
                        max={1000} />
                    <Typography>horizontal_line_size</Typography>
                    <Link target='_blank' href='#' color="inherit">
                        Documentação
                    </Link>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ bgcolor: "gray", mb: 1 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header">
                    <Typography>Parametros Unidades de Milímetros</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: '#3c3c3c', padding: 3 }}>
                    <Box mb={2}>
                        <Paper elevation={3} sx={{ p: 2 }}>
                            <Typography>Distância (mm)</Typography>
                            <TextField
                                id="standard-basic"
                                name='cameraDistanceFromObject'
                                variant="standard"
                                size="small"
                                type='number'
                                value={unitConverion.cameraDistanceFromObject}
                                onChange={handleChangeState}
                            />
                        </Paper>
                    </Box>
                    <Box>
                        <Paper elevation={3} sx={{ p: 2 }}>
                            <Typography>Ajuste Constante Eixo (x)</Typography>
                            <Box display={'flex'} alignItems={'center'} mt={1}>
                                <Typography mr={1} minWidth={70}>Pixel</Typography>
                                <TextField
                                    id="standard-basic"
                                    name="medidaEmPixel_x"
                                    variant="outlined"
                                    size="small"
                                    type='number'
                                    value={unitConverion.medidaEmPixel_x}
                                    onChange={handleChangeState}
                                />
                            </Box>

                            <Box display={'flex'} alignItems={'center'} mt={1}>
                                <Typography mr={1} minWidth={70}>Milímetro</Typography>
                                <TextField
                                    id="standard-basic"
                                    name="medidadeEmUnidade_x"
                                    variant="outlined"
                                    size="small"
                                    type='number'
                                    value={unitConverion.medidadeEmUnidade_x}
                                    onChange={handleChangeState}
                                />
                            </Box>
                        </Paper>
                    </Box>

                    <Box mt={1}>
                        <Paper elevation={3} sx={{ p: 2 }}>
                            <Typography>Ajuste Constante Eixo (Y)</Typography>
                            <Box display={'flex'} alignItems={'center'} mt={1}>
                                <Typography mr={1} minWidth={70}>Pixel</Typography>
                                <TextField
                                    id="standard-basic"
                                    name="medidaEmPixel_y"
                                    variant="outlined"
                                    size="small"
                                    type='number'
                                    value={unitConverion.medidaEmPixel_y}
                                    onChange={handleChangeState}
                                    sx={{ mr: 1 }}
                                />
                                <Typography mr={1} minWidth={20}>px</Typography>
                            </Box>

                            <Box display={'flex'} alignItems={'center'} mt={1}>
                                <Typography mr={1} minWidth={70}>Milímetro</Typography>
                                <TextField
                                    id="standard-basic"
                                    name="medidadeEmUnidade_y"
                                    variant="outlined"
                                    size="small"
                                    type='number'
                                    value={unitConverion.medidadeEmUnidade_y}
                                    onChange={handleChangeState}
                                    sx={{ mr: 1 }}
                                />
                                <Typography mr={1} minWidth={20}>mm</Typography>
                            </Box>
                        </Paper>
                    </Box>

                    <Box display={'flex'} justifyContent={'center'} mt={2}>
                        <Button variant="contained" color="info" onClick={handleCalculate}>
                            CALCULAR
                        </Button>
                    </Box>

                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

const style = {
    bgcolor: 'transparent',
    maxHeight: '80vh',
    overflow: 'auto',

    "&::-webkit-scrollbar": {
        width: "2px"
    },
    "&::-webkit-scrollbar-track": {
        backgroundColor: "transparent"
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#8d8d8d",
    }
}