import * as React from 'react';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { Grid, TextField, Typography } from '@mui/material';
import { title } from 'process';
import { useEffect, useState } from 'react';

interface RangeSliderParams {
  min?: number;
  max?: number;
  range: number[]
  size?: 'small' | 'medium';
  title: string
  orientation?: 'vertical' | 'horizontal'
  initValue: number[]
  callback(value: number[]): void;
}
export function VerticalRangeSlider({
  title,
  min = 0,
  max = 0,
  range = [0, 255],
  size = 'small',
  orientation='horizontal',
  initValue,
  callback
}:RangeSliderParams) {
  const [value, setValue] = useState<number[]>([initValue[0], initValue[1]]);
  
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
    <Stack height={'25vh'} spacing={1} direction="row">
      <Grid container textAlign={'center'} sx={{ alignItems: 'center' }}>
        <Grid item xs={3}>
          <TextField
              id="standard-basic"
              variant="standard"
              size="small"
              type='number'
              value={value[0]}
              onChange={e => handleInputMinChange(e)}/>
        </Grid>
        <Grid item xs={6}>
          <Typography fontSize={12}>{title}</Typography>
        </Grid>
        <Grid item md={3}>
          <TextField
            id="standard-basic"
            variant="standard"
            size="small"
            type='number'
            value={value[1]}
            onChange={e => handleInputMaxChange(e)} 
          />
        </Grid>
      </Grid>
      
      <Slider
        orientation={orientation}
        size={size}
        defaultValue={range}
        valueLabelDisplay="auto"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </Stack>
  )
}