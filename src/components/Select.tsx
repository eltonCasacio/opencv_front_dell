import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface CustomSelectParams {
    callback(value: string): void
}
export function CustomSelect({ callback }: CustomSelectParams) {
    const [selectedItem, setSelectedItem] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedItem(event.target.value);
    };

    React.useEffect(() => callback(selectedItem), [selectedItem])

    return (
        <FormControl sx={{ m: 2, minWidth: 120 }} variant='outlined' size="small">
            <InputLabel id="demo-select-small-label">Filtro</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={selectedItem}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    );
}