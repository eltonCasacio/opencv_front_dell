import styled from '@emotion/styled';
import { Grid, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import React, { useEffect, useState } from 'react';

interface RangeSliderParams {
    min?: number;
    max?: number;
    range: number[]
    size?: 'small' | 'medium';
    title: string
    orientation?: 'vertical' | 'horizontal'
    callback(value: number[]): void;
}
export function RangeSlider({
    min = 0,
    max = 255,
    range,
    size = 'small',
    title,
    orientation = 'horizontal',
    callback
}: RangeSliderParams) {
    const [value, setValue] = useState<number[]>([min, max]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    const handleInputMinChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const aux = [value[0], value[1]]
        aux[0] = parseInt(e.target.value) <= 0 ? 0 : parseInt(e.target.value)
        setValue(aux)
    }

    const handleInputMaxChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const aux = [value[0], value[1]]
        aux[1] = parseInt(e.target.value) >= max ? max : parseInt(e.target.value)
        setValue(aux)
    }

    useEffect(() => setValue(range), [range])

    useEffect(() => callback(value), [value])
    return (
        <Box>
            <Grid container textAlign={'center'} sx={{ alignItems: 'center' }}>
                <Grid item xs={2}>
                    <TextField
                        id="standard-basic"
                        variant="standard"
                        size="small"
                        type='number'
                        value={value[0]}
                        onChange={e => handleInputMinChange(e)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography fontSize={12}>{title}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        id="standard-basic"
                        variant="standard"
                        size="small"
                        type='number'
                        value={value[1]}
                        onChange={e => handleInputMaxChange(e)} />
                </Grid>
            </Grid>
            <StyledSlider
                orientation={orientation}
                size={size}
                valueLabelDisplay="auto"
                min={min}
                max={max}
                value={value}
                onChange={handleChange}
            />
        </Box>
    )
}

const StyledSlider = styled(Slider)({
    color: '#0b94efd6',
    height: 2,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 15,
        width: 15,
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
        fontSize: 10,
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
    }
});