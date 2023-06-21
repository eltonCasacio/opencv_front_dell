import Typography from '@mui/material/Typography';
import { RangeSlider } from './RangeSlider';
import { Box } from '@mui/material';
import React from 'react';

interface CardRangeSiderParams {
    title: string
    min: number
    max: number
    range: number[]
    callback(values: number[]): void
}
export function CardRangeSider({ title,min, max, range, callback }: CardRangeSiderParams) {
    return (
        <Box color={'#f1f1f1'}>
            <Typography>{title}</Typography>
            <RangeSlider min={min} max={max} range={range} callback={callback} />
        </Box>
    );
}