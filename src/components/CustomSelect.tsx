import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface CustomSelectParams {
    callback(value: string): void
    filters: string[]
}
export function CustomSelect({ callback, filters }: CustomSelectParams) {
    const [selectedItem, setSelectedItem] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedItem(event.target.value);
    };

    const renderFilters = () => {
        return filters.map((item) => (<MenuItem key={item} value={item}>{item}</MenuItem>))
    }

    React.useEffect(() => callback(selectedItem), [callback, selectedItem])

    return (
        <FormControl sx={{ minWidth: 120 }} variant='outlined' size="small">
            <InputLabel id="demo-select-small-label">Filtro</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={selectedItem}
                label="Age"
                onDrag={() => console.log("teste")}
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {renderFilters()}
            </Select>
        </FormControl>
    );
}