import Typography from '@mui/material/Typography';
import { CustomSlider } from './Slider';
import { Box } from '@mui/material';

interface SimpleAccordionParams {
    title: string
    callback(values: number[]): void
}
export function SimpleAccordion({ title, callback }: SimpleAccordionParams) {
    return (
        <Box color={'#f1f1f1'}>
            <Typography>{title}</Typography>
            <CustomSlider callback={callback} />
        </Box>
        // <Accordion>
        //     <AccordionSummary
        //         expandIcon={<ExpandMoreIcon />}
        //         aria-controls="panel2a-content"
        //         id="panel2a-header"
        //     >
        //         <Typography>{title}</Typography>
        //     </AccordionSummary>
        //     <AccordionDetails>
        //         <Typography>
        //             Defina os valores para Low e Hight
        //         </Typography>
        //         <CustomSlider callback={() => console.log("seila")} />
        //     </AccordionDetails>
        // </Accordion>
    );
}