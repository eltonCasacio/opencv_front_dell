import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Divider } from '@mui/material';
import {VerticalRangeSlider} from './VerticalRangeSlider';
import { HorizontalRangeSlider } from './HorizontalRangeSlider';
import {AreaProps} from '../index'
import { updateAreaAPI } from '../../../services/areas';

interface MenuAreaProps {
    areaProps: typeof AreaProps
    min: number[]
    max: number[]
}
export const MenuArea = (params:MenuAreaProps) => {
    return (
        <Box sx={ wrapperStyles}>
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
                        callback={(minmax) => updateAreaAPI('area01_X', minmax)}
                    />
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />

                    <VerticalRangeSlider 
                        title={'Vertical'} 
                        min={params.min[1]} 
                        max={params.max[1]} 
                        range={[params.areaProps.area01_Y1, params.areaProps.area01_Y2]}
                        orientation='vertical'
                        callback={(minmax) => updateAreaAPI('area01_Y', minmax)}
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
                        min={params.min[0]} 
                        max={params.max[0]} 
                        range={[params.areaProps.area02_X1, params.areaProps.area02_X2]}
                        callback={(minmax) => updateAreaAPI('area02_X', minmax)}
                    />
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />

                    <VerticalRangeSlider 
                        title={'Vertical'} 
                        min={params.min[1]} 
                        max={params.max[1]} 
                        range={[params.areaProps.area02_Y1, params.areaProps.area02_Y2]}
                        orientation='vertical'
                        callback={(minmax) => updateAreaAPI('area02_Y', minmax)}
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
                        min={params.min[0]} 
                        max={params.max[0]} 
                        range={[params.areaProps.area03_X1, params.areaProps.area03_X2]} 
                        callback={(minmax) => updateAreaAPI('area03_X', minmax)}
                    />
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />

                    <VerticalRangeSlider 
                        title={'Vertical'} 
                        min={params.min[1]} 
                        max={params.max[1]}  
                        range={[params.areaProps.area03_Y1, params.areaProps.area03_Y2]}
                        orientation='vertical'
                        callback={(minmax) => updateAreaAPI('area03_Y', minmax)}
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
                        min={params.min[0]} 
                        max={params.max[0]} 
                        range={[params.areaProps.area04_X1, params.areaProps.area04_X2]}
                        callback={(minmax) => updateAreaAPI('area04_X', minmax)}
                    />
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />

                    <VerticalRangeSlider 
                        title={'Vertical'} 
                        min={params.min[1]} 
                        max={params.max[1]}  
                        range={[params.areaProps.area04_Y1, params.areaProps.area04_Y2]} 
                        orientation='vertical'
                        callback={(minmax) => updateAreaAPI('area04_Y', minmax)}
                    />
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

const wrapperStyles = {
    bgcolor: 'transparent',
    maxHeight: '85vh',
    overflow: 'auto',   
    "&::-webkit-scrollbar": {width: "2px"},
    "&::-webkit-scrollbar-track": {backgroundColor: "transparent"},
    "&::-webkit-scrollbar-thumb": {backgroundColor: "#8d8d8d",borderRadius: 1}
}