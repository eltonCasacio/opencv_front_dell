import { Box, Button, Grid } from "@mui/material"
import {Content} from "./components/Content"
import { Sidebar } from "./components/Sidebar"
import { useEffect, useRef, useState } from "react"
import { clear_filters_params, save, changeCurrentUnit, conversion_units } from '../../services/constant';

export interface Unitis {
    id: number
    name: string
}

export const Constante = () => {
    const [units, setUnits] = useState<Unitis[]>([])
    
    let ref = useRef<HTMLInputElement>(null);
    
    function updateAreasForm() {
        conversion_units().then(res => setUnits(res))
    }

    function handleChangeUnit(name: string) {
        changeCurrentUnit(name).then(() => {
            updateAreasForm()
        })
    }

    function saveFilter() { 
        save().then(() => {
            updateAreasForm()
            if(ref.current)
                ref.current.value = ""
        })
    }

    function clearParams() {
        clear_filters_params()
        updateAreasForm()
    }

    useEffect(() => {
        updateAreasForm()
    }, [])

    return <Grid container flex={1} height={'88%'}>
        <Grid item sm={4} md={3} p={1} pr={0}>
            <Sidebar />
        </Grid>

        <Grid item sm={8} md={9} p={1}>
            <Content
                units={units}
                textRef={ref}
                handleChangeUnit={handleChangeUnit}
                handleSave={saveFilter}
            />

            <Box display={'flex'} justifyContent={'flex-end'}>
                <Button
                    sx={{ marginRight: 1 }}
                    variant="contained"
                    size="small"
                    color="primary"
                    onClick={clearParams}>
                    limpar
                </Button>
            </Box>
        </Grid>
    </Grid>
}