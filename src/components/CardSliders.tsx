import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CustomSlider } from './Slider';

interface SimpleAccordionParams { title: string }
export function SimpleAccordion({ title }: SimpleAccordionParams) {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Defina os valores para Low e Hight
                    </Typography>
                    <CustomSlider callback={() => console.log("seila")} />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}