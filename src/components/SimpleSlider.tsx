import styled from '@emotion/styled';
import { Grid, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useEffect, useState } from 'react';

interface SimpleSliderParams {
    size?: 'small' | 'medium';
    initValue: number
    title: string
    callback(value: number): void;
}
export function SimpleSlider({
    size = 'small',
    initValue,
    title,
    callback
}: SimpleSliderParams) {
    const [value, setValue] = useState<number>(initValue);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let aux = parseInt(e.target.value) <= 0 ? 0 : parseInt(e.target.value)
        setValue(aux)
    }

    useEffect(() => { setValue(initValue) }, [initValue])
    useEffect(() => callback(value), [callback, value])

    return (
        <Box>
            <Grid container textAlign={'center'} sx={{ alignItems: 'center' }}>
                <Grid item xs={4}>
                    <TextField
                        id="standard-basic"
                        variant="standard"
                        size="small"
                        type='number'
                        value={value}
                        onChange={e => handleInputChange(e)}
                    />
                </Grid>
                <Grid item xs={7}>
                    <Typography fontSize={12}>{title}</Typography>
                </Grid>
            </Grid>
            <Box>
                <StyledSlider
                    size={size}
                    defaultValue={0}
                    valueLabelDisplay="auto"
                    value={value}
                    onChange={handleChange}
                />
            </Box>
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