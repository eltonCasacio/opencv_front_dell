import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Divider, Link } from '@mui/material';
import { FilterProps } from '..';
import { selectFilterColorRGB, trackbarParametersFilterIterationsErode, trackbar_parametersFilter_SpliceLineJumpingWhiteColorVertically_JumpSize_Min, trackbar_parametersFilter_iterations_dilate } from '../../../services/filter_params';
import { CardRangeSider } from '../../../components/CardRangeSider';
import { CardSimpleSider } from '../../../components/CardSimpleSlider';

export interface SidebarParams {selectedFilter: typeof FilterProps}
export const Sidebar = (params: SidebarParams) => {
    return (
        <Box sx={
            {
                bgcolor: '#585858',
                maxHeight: '91vh',
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
        }>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Erode</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CardSimpleSider
                        initValue={params.selectedFilter.erode}
                        callback={trackbarParametersFilterIterationsErode}
                    />
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />
                    <Typography>A ideia básica de erosão é apenas como a erosão do solo, ela desgasta os limites do objeto em primeiro plano. Normalmente é executado em imagens binárias.</Typography>
                    <Link target='_blank' href='https://docs.opencv.org/3.4/db/df6/tutorial_erosion_dilatation.html'  color="inherit">
                        Documentação
                    </Link>
                </AccordionDetails>
            </Accordion>
            
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Dilated</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CardSimpleSider
                        initValue={params.selectedFilter.dilate}
                        callback={trackbar_parametersFilter_iterations_dilate}
                    />
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />
                    <Typography>Dilatar pixels.</Typography>
                    <Link target='_blank' href='https://docs.opencv.org/3.4/db/df6/tutorial_erosion_dilatation.html'  color="inherit">
                        Documentação
                    </Link>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Filtro RGB</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CardRangeSider
                        title='vermelho'
                        callback={(value) => selectFilterColorRGB({
                            color: 'VERMELHO',
                            min: value[0],
                            max: value[1]
                        })}
                        range={[0,255]}
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
                        range={[0,255]}
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
                        range={[0,255]}
                        min={0}
                        max={255}
                        />
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Jumping White Color Vertically</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Min
                    <CardSimpleSider
                        initValue={params.selectedFilter.SpliceLineJumpingWhiteColorVertically_JumpSize_Min}
                        callback={trackbar_parametersFilter_SpliceLineJumpingWhiteColorVertically_JumpSize_Min}
                    />
                    <Typography>Splice Line Jumping White Color Vertically - JumpSize</Typography>
                    <Link target='_blank' href='https://docs.opencv.org/3.4/db/df6/tutorial_erosion_dilatation.html'  color="inherit">
                        Documentação
                    </Link>
                </AccordionDetails>
            </Accordion> 
        </Box>
    )
}