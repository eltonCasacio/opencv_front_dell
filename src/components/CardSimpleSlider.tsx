import { SimpleSlider } from './SimpleSlider';
import { Box } from '@mui/material';

interface CardSimpleSiderParams {
    initValue: number
    callback(value: number): void
}
export function CardSimpleSider({ initValue, callback }: CardSimpleSiderParams) {
    return (
        <Box color={'#f1f1f1'}>
            <SimpleSlider initValue={initValue} callback={callback} />
        </Box>
    );
}