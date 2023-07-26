import { RangeSlider } from './RangeSlider';
import { Box } from '@mui/material';

interface CardRangeSiderParams {
    title: string
    min: number
    max: number
    range: number[]
    callback(value: number[]): void
}
export function CardRangeSider({ title, min, max, range, callback }: CardRangeSiderParams) {
    return (
        <Box color={'#f1f1f1'}>
            <RangeSlider title={title} min={min} max={max} range={range} callback={callback} />
        </Box>
    );
}