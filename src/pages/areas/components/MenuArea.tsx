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
}
export const MenuArea = (params:MenuAreaProps) => {
    
    function updateAreaProps(attrName: string, range:number[]) {
        console.log(attrName, range)
    }

    return (
        <Box sx={
            {
                bgcolor: 'transparent',
                maxHeight: '88vh',
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
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography>Area 1</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{bgcolor: '#3c3c3c', paddingLeft: 3}}>
                    <HorizontalRangeSlider 
                        title={'Horizontal'} 
                        min={0} 
                        max={1000} 
                        range={[0,1000]}
                        initValue={[params.areaProps.area01_X1, params.areaProps.area01_X2]}
                        callback={(e) => updateAreaProps('area1_x1-x2', e)}
                    />
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />

                    <VerticalRangeSlider 
                        title={'Vertical'} 
                        min={0} 
                        max={1000} 
                        range={[0,1000]} 
                        orientation='vertical'
                        initValue={[params.areaProps.area01_Y1, params.areaProps.area01_Y2]}
                        callback={(e) => updateAreaProps('area1_y1-y2', e)}
                    />
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography>Area 2</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{bgcolor: '#3c3c3c', paddingLeft: 3}}>
                    <HorizontalRangeSlider 
                        title={'Horizontal'} 
                        min={0} 
                        max={1000} 
                        range={[0,1000]}
                        initValue={[params.areaProps.area02_X1, params.areaProps.area02_X2]}
                        callback={(e) => updateAreaProps('area2_x1-x2', e)}
                    />
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />

                    <VerticalRangeSlider 
                        title={'Vertical'} 
                        min={0} 
                        max={1000} 
                        range={[0,1000]} 
                        orientation='vertical'
                        initValue={[params.areaProps.area02_Y1, params.areaProps.area02_Y2]}
                        callback={(e) => updateAreaProps('area2_y1-y2', e)}
                    />
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography>Area 2</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{bgcolor: '#3c3c3c', paddingLeft: 3}}>
                    <HorizontalRangeSlider 
                        title={'Horizontal'} 
                        min={0} 
                        max={1000} 
                        range={[0,1000]} 
                        initValue={[params.areaProps.area03_X1, params.areaProps.area03_X2]}
                        callback={(e) => updateAreaProps('area3_x1-x2', e)}
                    />
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />

                    <VerticalRangeSlider 
                        title={'Vertical'} 
                        min={0} 
                        max={1000} 
                        range={[0,1000]} 
                        orientation='vertical'
                        initValue={[params.areaProps.area03_Y1, params.areaProps.area03_Y2]}
                        callback={(e) => updateAreaProps('area3_y1-y2', e)}
                    />
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography>Area 2</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{bgcolor: '#3c3c3c', paddingLeft: 3}}>
                    <HorizontalRangeSlider 
                        title={'Horizontal'} 
                        min={0} 
                        max={1000} 
                        range={[0,1000]} 
                        initValue={[params.areaProps.area04_X1, params.areaProps.area04_X2]}
                        callback={(e) => updateAreaProps('area4_x1-x2', e)}
                    />
                    <Divider variant="fullWidth" sx={{ mb: 2 }} />

                    <VerticalRangeSlider 
                        title={'Vertical'} 
                        min={0} 
                        max={1000} 
                        range={[0,1000]} 
                        orientation='vertical'
                        initValue={[params.areaProps.area04_Y1, params.areaProps.area04_Y2]}
                        callback={(e) => updateAreaProps('area4_y1-y2', e)}
                    />
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}