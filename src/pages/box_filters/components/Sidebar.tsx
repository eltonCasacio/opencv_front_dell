import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Divider, Link } from '@mui/material';
import { AreasName, FilterProps } from '..';
import {
    selectFilterColorRGB,
    trackbarParametersFilterIterationsErode,
    trackbar_parametersFilter_iterations_dilate,
    verticallyWhite,
    verticallyBlack,
    horizontallyWhite,
    var_parametersFilter_SpliceLineJumpWhiteVer_IdAreasOfOperationInTheFilter,
    var_parametersFilter_SpliceLineJumpWhiteHor_IdAreasOfOperationInTheFilter,
    var_parametersFilter_SpliceLineJumpBlackVer_IdAreasOfOperationInTheFilter,
    horizontalBlack,
    var_parametersFilter_SpliceLineJumpBlackHor_IdAreasOfOperationInTheFilter,
    found_object_size_filter,
    vertical_line_size_filter,
    horizontal_line_size
} from '../../../services/box_filters';
import { CardRangeSider } from '../../../components/CardRangeSider';
import { CardSimpleSider } from '../../../components/CardSimpleSlider';
import { CustomSelect } from '../../../components/CustomSelect';
import { useEffect, useState } from 'react';
import { getAreas } from '../../../services/areas';

export interface SidebarParams {
    selectedFilter: typeof FilterProps
}
export const Sidebar = (params: SidebarParams) => {
    const [areasName, setAreasName] = useState<AreasName[]>([])

    useEffect(() => {
        getAreas().then(res => setAreasName(res))
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
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>Erode</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: '#3c3c3c', padding: 3 }}>
                    <CardSimpleSider
                        initValue={params.selectedFilter.Iterations_erode}
                        callback={trackbarParametersFilterIterationsErode}/>
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />
                    <Typography>Desgasta os limites do objeto em primeiro plano. Normalmente é executado em imagens binárias.</Typography>
                    <Link target='_blank' href='https://docs.opencv.org/3.4/db/df6/tutorial_erosion_dilatation.html' color="inherit">
                        Documentação
                    </Link>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ bgcolor: "gray", mb: 1 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>Dilated</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: '#3c3c3c', padding: 3 }}>
                    <CardSimpleSider
                        initValue={params.selectedFilter.Iterations_dilate}
                        callback={trackbar_parametersFilter_iterations_dilate}/>
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />
                    <Typography>Dilatar pixels.</Typography>
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
                    <Typography>Vertically - White</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: '#3c3c3c', padding: 3 }}>
                    <CardRangeSider
                        title=''
                        callback={(value) => verticallyWhite(value)}
                        range={[
                            params.selectedFilter.SpliceLineJumpingWhiteColorVertically_JumpSize_Min,
                            params.selectedFilter.SpliceLineJumpingWhiteColorVertically_JumpSize_Max
                        ]}
                        min={0}
                        max={1000} />
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />
                        <CustomSelect
                            title='Area'
                            options={areasName}
                            callback={(value) => var_parametersFilter_SpliceLineJumpWhiteVer_IdAreasOfOperationInTheFilter(Number(value))}/>

                        <Divider variant="fullWidth" sx={{ mb: 2, mt: 2 }} />

                        <Typography>Linha Vertical</Typography>
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
                    <Typography>Horizontally - White</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: '#3c3c3c', padding: 3 }}>
                    <CardRangeSider
                        title=''
                        callback={(value) => horizontallyWhite(value)}
                        range={[
                            params.selectedFilter.SpliceLineJumpingWhiteColorVertically_JumpSize_Min,
                            params.selectedFilter.SpliceLineJumpingWhiteColorVertically_JumpSize_Max
                        ]}
                        min={0}
                        max={1000}/>
                    <Divider variant="fullWidth" sx={{ mb: 2, mt: 2 }} />
                    <CustomSelect
                        title='Area'
                        options={areasName}
                        callback={(value) => var_parametersFilter_SpliceLineJumpWhiteHor_IdAreasOfOperationInTheFilter(Number(value))} />

                    <Divider variant="fullWidth" sx={{ mb: 2, mt: 2 }} />

                    <Typography>Linha Horizontal Branca</Typography>
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
                    <Typography>Vertically - Black</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: '#3c3c3c', padding: 3 }}>
                    <CardRangeSider
                        title=''
                        callback={(value) => verticallyBlack(value)}
                        range={[
                            params.selectedFilter.SpliceLineJumpingWhiteColorVertically_JumpSize_Min,
                            params.selectedFilter.SpliceLineJumpingWhiteColorVertically_JumpSize_Max
                        ]}
                        min={0}
                        max={1000}/>
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />
                    <CustomSelect
                        title='Area'
                        options={areasName}
                        callback={(value) => var_parametersFilter_SpliceLineJumpBlackVer_IdAreasOfOperationInTheFilter(Number(value))} />

                    <Divider variant="fullWidth" sx={{ mb: 2, mt: 2 }} />

                    <Typography>Linha Vertical Preta</Typography>
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
                    <Typography>Horizontally - Black</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: '#3c3c3c', padding: 3 }}>
                    <CardRangeSider
                        title=''
                        callback={(value) => horizontalBlack(value)}
                        range={[
                            params.selectedFilter.SpliceLineJumpingWhiteColorVertically_JumpSize_Min,
                            params.selectedFilter.SpliceLineJumpingWhiteColorVertically_JumpSize_Max
                        ]}
                        min={0}
                        max={1000}/>
                    <Divider variant="fullWidth" sx={{ mb: 2, mt: 2 }} />
                    <CustomSelect
                        title='Area'
                        options={areasName}
                        callback={(value) => var_parametersFilter_SpliceLineJumpBlackHor_IdAreasOfOperationInTheFilter(Number(value))} />

                    <Divider variant="fullWidth" sx={{ mb: 2 }} />

                    <Typography>Linha Horizontal Preta</Typography>
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
                    <Typography>found_object_size_filter</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: '#3c3c3c', padding: 3 }}>
                    <CardRangeSider
                        title=''
                        callback={(value) => found_object_size_filter(value)}
                        range={[
                            params.selectedFilter.SpliceLineJumpingWhiteColorVertically_JumpSize_Min,
                            params.selectedFilter.SpliceLineJumpingWhiteColorVertically_JumpSize_Max
                        ]}
                        min={0}
                        max={100000}/>
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />

                    <Typography>found_object_size_filter</Typography>
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
                            params.selectedFilter.SpliceLineJumpingWhiteColorVertically_JumpSize_Min,
                            params.selectedFilter.SpliceLineJumpingWhiteColorVertically_JumpSize_Max
                        ]}
                        min={0}
                        max={1000}/>
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
                            params.selectedFilter.SpliceLineJumpingWhiteColorVertically_JumpSize_Min,
                            params.selectedFilter.SpliceLineJumpingWhiteColorVertically_JumpSize_Max
                        ]}
                        min={0}
                        max={1000}/>
                    <Typography>horizontal_line_size</Typography>
                    <Link target='_blank' href='#' color="inherit">
                        Documentação
                    </Link>
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