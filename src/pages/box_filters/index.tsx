import Grid from '@mui/material/Unstable_Grid2';
import React, { useEffect, useState } from 'react';
import Content from './components/Content';
import { Sidebar } from './components/Sidebar';
import { getFilters, saveFilters, deleteFilters, changeCurrentFilters, getCurrentFilterParams, clear_filters_params } from '../../services/box_filters';
import { Box, Button } from '@mui/material';

export interface Filters {
    id: number
    name: string
}

export interface AreasName {
    id: number
    name: string
}

export const FilterProps = {
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

export const BoxFilters = () => {
    const [filters, setFilters] = useState<Filters[]>([])
    const [selectedFilter, setSelectedFilter] = useState(FilterProps)
    let ref = React.useRef<HTMLInputElement>(null);

    function updateAreasForm() {
        getCurrentFilterParams().then(res => {
            if(res){
                setSelectedFilter(res)
                getFilters().then(res => {
                    if(!!res) setFilters(res)})
            }
        })
    }

    function changeFilter(id: string) {
        changeCurrentFilters(Number(id)).then(() => {
            updateAreasForm()
        })
    }

    function saveFilter(value: string) { 
        saveFilters(value).then(() => {
            updateAreasForm()
            if(ref.current)
                ref.current.value = ""
        })
    }

    function handleDelete() { 
        deleteFilters().then(() => clearParams())
    }

    function clearParams() {
        clear_filters_params()
        updateAreasForm()
    }

    useEffect(() => {
        updateAreasForm()
    }, [])
   
    return (
        <Grid container flex={1} height={'90vh'}>
            <Grid md={3} p={1} pr={0}>
                <Sidebar selectedFilter={selectedFilter}/>
            </Grid>

            <Grid md={9} p={1}>
                <Content
                    filters={filters}
                    textRef={ref}
                    handleChangeFilter={changeFilter}
                    handleSaveFilter={saveFilter}
                />

                <Box display={'flex'} justifyContent={'flex-end'}>
                    <Button 
                        sx={{marginRight: 1}}
                        variant="contained" 
                        size="small" 
                        color="primary" 
                        onClick={clearParams}>
                        limpar
                    </Button>
                    <Button 
                        variant="contained" 
                        size="small" 
                        color="error" 
                        onClick={handleDelete}>
                        Excluir
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}