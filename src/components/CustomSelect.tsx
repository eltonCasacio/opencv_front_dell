import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useEffect, useState } from 'react';

export type Option = {
    id:number
    name:string
}
interface CustomSelectParams {
    callback(value: string): void
    options: Option[]
    title: string
}
export function CustomSelect({ callback, options, title }: CustomSelectParams) {
    const [selectedItem, setSelectedItem] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedItem(event.target.value);
    };

    const renderFilters = () => {
        return options.map((item) => (<MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>))
    }

    useEffect(() => callback(selectedItem), [selectedItem])

    return (
        <FormControl sx={{ minWidth: 120 }} variant='outlined' size="small">
            <InputLabel id="demo-select-small-label">{title}</InputLabel>
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