import { Box, Button, Grid } from "@mui/material"
import {Content} from "./components/Content"
import { Sidebar } from "./components/Sidebar"
import { useEffect, useRef, useState } from "react"
import { getCurrentFilterParams, clear_filters_params, save, changeCurrentUnit, conversion_units } from '../../services/constant';

export interface Unitis {
    id: number
    name: string
}

export const FilterProps2 = {
    name: "",
    selectFilterColor_Red_Min:0,
    selectFilterColor_Red_Max: 0,
    selectFilterColor_Green_Min: 0,
    var_parametersFilter_selectFilterColor_Green_Max:0,
    selectFilterColor_Blue_Min:0,
    selectFilterColor_Blue_Max: 0,
    DefinedAreaForFilter_init_X: 0,
    DefinedAreaForFilter_init_Y:0 ,
    Iterations_erode:0 ,
    Iterations_dilate: 0  ,
    SpliceLineJumpingWhiteColorVertically_JumpSize_Min: 0     ,
    SpliceLineJumpingWhiteColorVertically_JumpSize_Max: 0    ,
    SpliceLineJumpWhiteVer_IdAreasOfOperationInTheFilter: 0  ,
    SpliceLineJumpingWhiteColorHorizontally_JumpSize_Min: 0   ,
    SpliceLineJumpingWhiteColorHorizontally_JumpSize_Max: 0 ,
    SpliceLineJumpWhiteHor_IdAreasOfOperationInTheFilter: 0   ,
    SpliceLineJumpingBlackColorVertically_JumpSize_Min:0    ,
    SpliceLineJumpingBlackColorVertically_JumpSize_Max: 0     ,
    SpliceLineJumpBlackVer_IdAreasOfOperationInTheFilter: 0  ,
    SpliceLineJumpingBlackColorHorizontally_JumpSize_Min: 0  ,
    SpliceLineJumpingBlackColorHorizontally_JumpSize_Max: 0   ,
    SpliceLineJumpBlackHor_IdAreasOfOperationInTheFilter: 0  ,
    FoundObjectSizeFilter_Min: 0  ,
    FoundObjectSizeFilter_Max: 0   ,
    VerticalLineSizeFilterOfFoundObject_Min: 0  ,
    VerticalLineSizeFilterOfFoundObject_Max: 0    ,
    HorizontalLineSizeFilterOfFoundObject_Min: 0  ,
    HorizontalLineSizeFilterOfFoundObject_Max: 0 ,
    ConstResolutionPixelMm_X: 0  ,
    ConstResolutionPixelMm_Y: 0 ,
    labelWeb_RecipeName: 0
}

export const Constante = () => {
    const [units, setUnits] = useState<Unitis[]>([])
    const [selectedFilter, setSelectedFilter] = useState(FilterProps2)
    let ref = useRef<HTMLInputElement>(null);
    
    function updateAreasForm() {
        getCurrentFilterParams().then(res => {
            if(res){
                setSelectedFilter(res)
            }
        })

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
            <Sidebar selectedFilter={selectedFilter} />
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