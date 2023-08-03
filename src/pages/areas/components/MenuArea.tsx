import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Divider } from '@mui/material';
import {VerticalRangeSlider} from './VerticalRangeSlider';
import { HorizontalRangeSlider } from './HorizontalRangeSlider';
import {AreaProps} from '../index'

interface MenuAreaProps {
    areaProps: typeof AreaProps
    min: number[]
    max: number[]
    handleSetCurrentArea:(value:typeof AreaProps) => void
}
export const MenuArea = (params:MenuAreaProps) => {
    return (
        <Box sx={
            {
                bgcolor: 'transparent',
                maxHeight: '84vh',
                overflow: 'auto',
                
                "&::-webkit-scrollbar": {
                    width: "2px"
                },
                "&::-webkit-scrollbar-track": {
                    backgroundColor: "transparent"
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#8d8d8d",
                    borderRadius: 1
                }
            }
        }>
            <Accordion sx={{bgcolor:"gray", mb:1}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography>Area 1</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{bgcolor: '#3c3c3c', padding: 3}}>
                    <HorizontalRangeSlider 
                        title={'Horizontal'} 
                        min={params.min[0]} 
                        max={params.max[0]} 
                        range={[params.areaProps.area01_X1, params.areaProps.area01_X2]}
                        callback={(minmax) => params.handleSetCurrentArea({
                            ...params.areaProps,
                            area01_X1: minmax[0],
                            area01_X2: minmax[1]
                        })}
                    />
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />

                    <VerticalRangeSlider 
                        title={'Vertical'} 
                        min={params.min[1]} 
                        max={params.max[1]} 
                        range={[params.areaProps.area01_Y1, params.areaProps.area01_Y2]}
                        orientation='vertical'
                        callback={(minmax) => params.handleSetCurrentArea({
                            ...params.areaProps,
                            area01_Y1: minmax[0],
                            area01_Y2: minmax[1]
                        })}
                    />
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{bgcolor:"gray", mb:1}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography>Area 2</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{bgcolor: '#3c3c3c', padding: 3}}>
                    <HorizontalRangeSlider 
                        title={'Horizontal'} 
                        min={0} 
                        max={1000} 
                        range={[0,1000]}
                        callback={(minmax) => params.handleSetCurrentArea({
                            ...params.areaProps,
                            area02_X1: minmax[0],
                            area02_X2: minmax[1]
                        })}
                    />
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />

                    <VerticalRangeSlider 
                        title={'Vertical'} 
                        min={0} 
                        max={1000} 
                        range={[0,1000]} 
                        orientation='vertical'
                        callback={(minmax) => params.handleSetCurrentArea({
                            ...params.areaProps,
                            area02_Y1: minmax[0],
                            area02_Y2: minmax[1]
                        })}
                    />
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{bgcolor:"gray", mb:1}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography>Area 3</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{bgcolor: '#3c3c3c', padding: 3}}>
                    <HorizontalRangeSlider 
                        title={'Horizontal'} 
                        min={0} 
                        max={1000} 
                        range={[0,1000]} 
                        callback={(minmax) => params.handleSetCurrentArea({
                            ...params.areaProps,
                            area03_X1: minmax[0],
                            area03_X2: minmax[1]
                        })}
                    />
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />

                    <VerticalRangeSlider 
                        title={'Vertical'} 
                        min={0} 
                        max={1000} 
                        range={[0,1000]} 
                        orientation='vertical'
                        callback={(minmax) => params.handleSetCurrentArea({
                            ...params.areaProps,
                            area03_Y1: minmax[0],
                            area03_Y2: minmax[1]
                        })}
                    />
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{bgcolor:"gray", mb:1}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography>Area 4</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{bgcolor: '#3c3c3c', padding: 3}}>
                    <HorizontalRangeSlider 
                        title={'Horizontal'} 
                        min={0} 
                        max={1000} 
                        range={[0,1000]} 
                        callback={(minmax) => params.handleSetCurrentArea({
                            ...params.areaProps,
                            area04_X1: minmax[0],
                            area04_X2: minmax[1]
                        })}
                    />
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />

                    <VerticalRangeSlider 
                        title={'Vertical'} 
                        min={0} 
                        max={1000} 
                        range={[0,1000]} 
                        orientation='vertical'
                        callback={(minmax) => params.handleSetCurrentArea({
                            ...params.areaProps,
                            area04_Y1: minmax[0],
                            area04_Y2: minmax[1]
                        })}
                    />
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}