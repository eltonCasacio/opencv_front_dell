import { SimpleSlider } from './SimpleSlider';
import { Box } from '@mui/material';

interface CardSimpleSiderParams {
    title: string
    initValue: number
    callback(value: number): void
}
export function CardSimpleSider({ title, initValue, callback }: CardSimpleSiderParams) {
    return (
        <Box color={'#f1f1f1'}>
            <SimpleSlider title={title} initValue={initValue} callback={callback} />
        </Box>
    );
}