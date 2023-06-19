import Typography from '@mui/material/Typography';
import { SimpleSlider } from './SimpleSlider';
import { Box } from '@mui/material';

interface CardSimpleSiderParams {
    title: string
    callback(value: number): void
}
export function CardSimpleSider({ title, callback }: CardSimpleSiderParams) {
    return (
        <Box color={'#f1f1f1'}>
            <Typography>{title}</Typography>
            <SimpleSlider callback={callback} />
        </Box>
    );
}