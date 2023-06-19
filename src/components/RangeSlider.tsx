import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useEffect, useState } from 'react';

interface RangeSliderParams {
    min?: number;
    max?: number;
    size?: 'small' | 'medium';
    callback(value: number[]): void;
}
export function RangeSlider({
    min = 0,
    max = 255,
    size = 'small',
    callback
}: RangeSliderParams) {
    const [value, setValue] = useState<number[]>([0, 37]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    useEffect(() => callback(value), [value])
    return (
        <Box>
            <StyledSlider
                size={size}
                defaultValue={0}
                valueLabelDisplay="auto"
                min={min}
                max={max}
                value={value}
                onChange={handleChange}
            />
        </Box>
    );
}

const StyledSlider = styled(Slider)({
    color: '#0b94efd6',
    height: 3,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 15,
        width: 20,
        backgroundColor: '#bcbcbcc3',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#0812a4',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});