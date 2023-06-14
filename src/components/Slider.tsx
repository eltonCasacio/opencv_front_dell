import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useEffect, useState } from 'react';

interface CustomSliderParams {
    min?: number;
    max?: number;
    size?: 'small' | 'medium';
    callback(value: number): void;
}
export function CustomSlider({
    min = 0,
    max = 100,
    size = 'medium',
    callback
}: CustomSliderParams) {
    const [value, setValue] = useState<number>(0);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
    };

    useEffect(() => callback(value), [value])
    return (
        <Box>
            <Slider
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