import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Divider } from '@mui/material';
import {VerticalRangeSlider} from './VerticalRangeSlider';
import { HorizontalRangeSlider } from './HorizontalRangeSlider';
import {AreaProps} from '../index'
import { 
    setArea01_X1_x2, 
    setArea01_Y1_Y2, 
    setArea02_X1_X2, 
    setArea02_Y1_Y2, 
    setArea03_X1_X2, 
    setArea03_Y1_Y2, 
    setArea04_X1_X2, 
    setArea04_Y1_Y2,
    setAreaTeste,
    Teste
} from '../../../services/areas';

interface MenuAreaProps {
    areaProps: typeof AreaProps
    min: number[]
    max: number[]
}
export const MenuArea = (params:MenuAreaProps) => {
    let AreaTeste:Teste

    const changeAreas = () => {
        
    }
    return (
        <Box sx={
            {
                bgcolor: 'transparent',
                maxHeight: '88vh',
                overflow: 'auto',
                mr:1,
                
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
                        callback={(minmax) => setArea01_X1_x2(minmax)}
                    />
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />

                    <VerticalRangeSlider 
                        title={'Vertical'} 
                        min={params.min[1]} 
                        max={params.max[1]} 
                        range={[params.areaProps.area01_Y1, params.areaProps.area01_Y2]}
                        orientation='vertical'
                        callback={(minmax) => setArea01_Y1_Y2(minmax)}
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
                        callback={(minmax) => setArea02_X1_X2(minmax)}
                    />
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />

                    <VerticalRangeSlider 
                        title={'Vertical'} 
                        min={0} 
                        max={1000} 
                        range={[0,1000]} 
                        orientation='vertical'
                        callback={(minmax) => setArea02_Y1_Y2(minmax)}
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
                        callback={(minmax) => setArea03_X1_X2(minmax)}
                    />
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />

                    <VerticalRangeSlider 
                        title={'Vertical'} 
                        min={0} 
                        max={1000} 
                        range={[0,1000]} 
                        orientation='vertical'
                        callback={(minmax) => setArea03_Y1_Y2(minmax)}
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
                        callback={(minmax) => setArea04_X1_X2(minmax)}
                    />
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />

                    <VerticalRangeSlider 
                        title={'Vertical'} 
                        min={0} 
                        max={1000} 
                        range={[0,1000]} 
                        orientation='vertical'
                        callback={(minmax) => setArea04_Y1_Y2(minmax)}
                    />
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}