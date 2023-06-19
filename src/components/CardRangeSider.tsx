import Typography from '@mui/material/Typography';
import { RangeSlider } from './RangeSlider';
import { Box } from '@mui/material';

interface CardRangeSiderParams {
    title: string
    callback(values: number[]): void
}
export function CardRangeSider({ title, callback }: CardRangeSiderParams) {
    return (
        <Box color={'#f1f1f1'}>
            <Typography>{title}</Typography>
            <RangeSlider callback={callback} />
        </Box>
    );
}