import { ChangeEvent, useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Divider, Link, Paper, TextField } from '@mui/material';
import { FilterProps2 } from '..';
import {
    selectFilterColorRGB,
    found_object_size_filter,
    vertical_line_size_filter,
    horizontal_line_size
} from '../../../services/box_filters';
import { CardRangeSider } from '../../../components/CardRangeSider';
import { calculate, load } from '../../../services/constant';

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


export interface SidebarParams {
    selectedFilter: typeof FilterProps2
}
export const Sidebar = (params: SidebarParams) => {
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

    const changeState = (e: ChangeEvent<HTMLInputElement>) => {
        setUnitConverion({ ...unitConverion, [e.target.name]: e.target.value })
    }

    const handleCalculate = () => {
        calculate(unitConverion)
    }

    useEffect(() => {
        load().then(params => setUnitConverion(params))
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
                        callback={(value) => selectFilterColorRGB({
                            color: 'VERMELHO',
                            min: value[0],
                            max: value[1]
                        })}
                        range={[
                            params.selectedFilter.selectFilterColor_Red_Min,
                            params.selectedFilter.selectFilterColor_Red_Max
                        ]}
                        min={0}
                        max={255}
                    />
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />

                    <CardRangeSider
                        title='verde'
                        callback={(value) => selectFilterColorRGB({
                            color: 'VERDE',
                            min: value[0],
                            max: value[1]
                        })}
                        range={[
                            params.selectedFilter.selectFilterColor_Green_Min,
                            params.selectedFilter.var_parametersFilter_selectFilterColor_Green_Max
                        ]}
                        min={0}
                        max={255}
                    />

                    <Divider variant="fullWidth" sx={{ mb: 2 }} />

                    <CardRangeSider
                        title='azul'
                        callback={(value) => selectFilterColorRGB({
                            color: 'AZUL',
                            min: value[0],
                            max: value[1]
                        })}
                        range={[
                            params.selectedFilter.selectFilterColor_Blue_Min,
                            params.selectedFilter.selectFilterColor_Blue_Max]}
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
                        callback={(value) => found_object_size_filter(value)}
                        range={[
                            params.selectedFilter.FoundObjectSizeFilter_Min,
                            params.selectedFilter.FoundObjectSizeFilter_Min
                        ]}
                        min={0}
                        max={100000} />
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
                        callback={(value) => vertical_line_size_filter(value)}
                        range={[
                            params.selectedFilter.VerticalLineSizeFilterOfFoundObject_Min,
                            params.selectedFilter.VerticalLineSizeFilterOfFoundObject_Max
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
                            params.selectedFilter.HorizontalLineSizeFilterOfFoundObject_Min,
                            params.selectedFilter.HorizontalLineSizeFilterOfFoundObject_Max
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
                                onChange={changeState}
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
                                    onChange={changeState}
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
                                    onChange={changeState}
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
                                    onChange={changeState}
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
                                    onChange={changeState}
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