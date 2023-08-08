import { Axios } from "./api"

type COLOR = 'VERMELHO' | 'VERDE' | 'AZUL'
export interface SelectFilterColorRGBParams {
    color: COLOR
    min: number
    max: number
}

export function selectFilterColorRGB(params: SelectFilterColorRGBParams) {
    switch (params.color) {
        case 'VERMELHO':
            selectFilterColorRedMin(params.min)
            selectFilterColorRedMax(params.max)
            break
        case 'VERDE':
            selectFilterColorGreenMin(params.min)
            selectFilterColorGreenMax(params.max)
            break
        case 'AZUL':
            selectFilterColorBlueMin(params.min)
            selectFilterColorBlueMax(params.max)
            break
    }
}

function selectFilterColorRedMin(value: number) {
    Axios.post('selectFilterColorRedMin', {value})
}

function selectFilterColorRedMax(value: number) {
    Axios.post('selectFilterColorRedMax', {value})
}

function selectFilterColorGreenMin(value: number) {
    Axios.post('selectFilterColorGreenMin', {value})
}

function selectFilterColorGreenMax(value: number) {
    Axios.post('selectFilterColorGreenMax', {value})
}

function selectFilterColorBlueMin(value: number) {
    Axios.post('selectFilterColorBlueMin', {value})
}

function selectFilterColorBlueMax(value: number) {
    Axios.post('selectFilterColorBlueMax', {value})
}

export function trackbarParametersFilterIterationsErode(value: number) {
    Axios.post('parametersFilter_Iterations_erode', {value})
}

export function trackbar_parametersFilter_iterations_dilate(value: number) {
    Axios.post('trackbar_parametersFilter_iterations_dilate', {value})
}

export function trackbar_parametersFilter_SpliceLineJumpingWhiteColorVertically_JumpSize_Min(value: number) {
    Axios.post('trackbar_parametersFilter_SpliceLineJumpingWhiteColorVertically_JumpSize_Min', {value})
}

export function trackbar_parametersFilter_SpliceLineJumpingWhiteColorVertically_JumpSize_Max(value: number) {
    Axios.post('trackbar_parametersFilter_SpliceLineJumpingWhiteColorVertically_JumpSize_Max', {value})
}

export function trackbar_parametersFilter_SpliceLineJumpingWhiteColorHorizontally_JumpSize_Min(value: number) {
    Axios.post('trackbar_parametersFilter_SpliceLineJumpingWhiteColorHorizontally_JumpSize_Min', {value})
}

export function trackbar_parametersFilter_SpliceLineJumpingWhiteColorHorizontally_JumpSize_Max(value: number) {
    Axios.post('trackbar_parametersFilter_SpliceLineJumpingWhiteColorHorizontally_JumpSize_Max', {value})
}

export function trackbar_parametersFilter_FoundObjectSizeFilter_Min(value: number) {
    Axios.post('trackbar_parametersFilter_FoundObjectSizeFilter_Min', {value})
}

export function trackbar_parametersFilter_FoundObjectSizeFilter_Max(value: number) {
    Axios.post('trackbar_parametersFilter_FoundObjectSizeFilter_Max', {value})
}

export function trackbar_parametersFilter_VerticalLineSizeFilterOfFoundObject_Min(value: number) {
    Axios.post('trackbar_parametersFilter_VerticalLineSizeFilterOfFoundObject_Min', {value})
}

export function trackbar_parametersFilter_VerticalLineSizeFilterOfFoundObject_Max(value: number) {
    Axios.post('trackbar_parametersFilter_VerticalLineSizeFilterOfFoundObject_Max', {value})
}

export function trackbar_parametersFilter_HorizontallyLineSizeFilterOfFoundObject_Min(value: number) {
    Axios.post('trackbar_parametersFilter_HorizontallyLineSizeFilterOfFoundObject_Min', {value})
}

export function trackbar_parametersFilter_HorizontallyLineSizeFilterOfFoundObject_Max(value: number) {
    Axios.post('trackbar_parametersFilter_HorizontallyLineSizeFilterOfFoundObject_Max', {value})
}

export function trackbar_ResolutionPixMm_X(value: number) {
    Axios.post('trackbar_ResolutionPixMm_X', {value})
}

export function trackbar_ResolutionPixMm_Y(value: number) {
    Axios.post('trackbar_ResolutionPixMm_Y', {value})
}

export async function getFilters() {
    const {data} = await Axios.get('get_filters')
    return data
}

export async function saveFilters(name: string) {
    await Axios.post('save_filters', {name})
}

export async function deleteFilters() {
    await Axios.post('delete_filters')
}

export async function changeCurrentFilters(id: number) {
    await Axios.post('change_current_filters', {id})
}

export async function getCurrentFilterParams() {
    const {data} = await Axios.get('get_current_filter_params')
    return {
        name: data.name,
        selectFilterColor_Red_Min: data.selectFilterColor_Red_Min,
        selectFilterColor_Red_Max: data.selectFilterColor_Red_Max,
        selectFilterColor_Green_Min: data.selectFilterColor_Green_Min,
        var_parametersFilter_selectFilterColor_Green_Max: data.var_parametersFilter_selectFilterColor_Green_Max,
        selectFilterColor_Blue_Min: data.selectFilterColor_Blue_Min,
        selectFilterColor_Blue_Max: data.selectFilterColor_Blue_Max,
        DefinedAreaForFilter_init_X: data.DefinedAreaForFilter_init_X,
        DefinedAreaForFilter_init_Y: data.DefinedAreaForFilter_init_Y,
        Iterations_erode: data.Iterations_erode,
        Iterations_dilate: data.Iterations_dilate,
        SpliceLineJumpingWhiteColorVertically_JumpSize_Min: data.SpliceLineJumpingWhiteColorVertically_JumpSize_Min,
        SpliceLineJumpingWhiteColorVertically_JumpSize_Max: data.SpliceLineJumpingWhiteColorVertically_JumpSize_Max,
        SpliceLineJumpWhiteVer_IdAreasOfOperationInTheFilter: data.SpliceLineJumpWhiteVer_IdAreasOfOperationInTheFilter,
        SpliceLineJumpingWhiteColorHorizontally_JumpSize_Min: data.SpliceLineJumpingWhiteColorHorizontally_JumpSize_Min,
        SpliceLineJumpingWhiteColorHorizontally_JumpSize_Max: data.SpliceLineJumpingWhiteColorHorizontally_JumpSize_Max,
        SpliceLineJumpWhiteHor_IdAreasOfOperationInTheFilter: data.SpliceLineJumpWhiteHor_IdAreasOfOperationInTheFilter,
        SpliceLineJumpingBlackColorVertically_JumpSize_Min: data.SpliceLineJumpingBlackColorVertically_JumpSize_Min,
        SpliceLineJumpingBlackColorVertically_JumpSize_Max: data.SpliceLineJumpingBlackColorVertically_JumpSize_Max,
        SpliceLineJumpBlackVer_IdAreasOfOperationInTheFilter: data.SpliceLineJumpBlackVer_IdAreasOfOperationInTheFilter,
        SpliceLineJumpingBlackColorHorizontally_JumpSize_Min: data.SpliceLineJumpingBlackColorHorizontally_JumpSize_Min,
        SpliceLineJumpingBlackColorHorizontally_JumpSize_Max: data.SpliceLineJumpingBlackColorHorizontally_JumpSize_Max,
        SpliceLineJumpBlackHor_IdAreasOfOperationInTheFilter: data.SpliceLineJumpBlackHor_IdAreasOfOperationInTheFilter,
        FoundObjectSizeFilter_Min: data.FoundObjectSizeFilter_Min,
        FoundObjectSizeFilter_Max: data.FoundObjectSizeFilter_Max,
        VerticalLineSizeFilterOfFoundObject_Min: data.VerticalLineSizeFilterOfFoundObject_Min,
        VerticalLineSizeFilterOfFoundObject_Max: data.VerticalLineSizeFilterOfFoundObject_Max,
        HorizontalLineSizeFilterOfFoundObject_Min: data.HorizontalLineSizeFilterOfFoundObject_Min,
        HorizontalLineSizeFilterOfFoundObject_Max: data.HorizontalLineSizeFilterOfFoundObject_Max,
        ConstResolutionPixelMm_X: data.ConstResolutionPixelMm_X,
        ConstResolutionPixelMm_Y: data.ConstResolutionPixelMm_Y,
        labelWeb_RecipeName: data.labelWeb_RecipeName,
    }
}


export function verticallyWhite(value: number[]){
    Axios.post('vertically_white', {
        min: value[0],
        max: value[1]
    })

}
export function var_parametersFilter_SpliceLineJumpWhiteVer_IdAreasOfOperationInTheFilter(value: number) {
    Axios.post('var_parametersFilter_SpliceLineJumpWhiteVer_IdAreasOfOperationInTheFilter', {id: value})
}


export function horizontallyWhite(value: number[]) {
    Axios.post('horizontally_white', {
        min: value[0],
        max: value[1]
    })
}
export function var_parametersFilter_SpliceLineJumpWhiteHor_IdAreasOfOperationInTheFilter(value: number) {
    Axios.post('var_parametersFilter_SpliceLineJumpWhiteHor_IdAreasOfOperationInTheFilter', {id: value})
}


export function verticallyBlack(value: number[]){
    Axios.post('vertically_black', {
        min: value[0],
        max: value[1]
    })
}
export function var_parametersFilter_SpliceLineJumpBlackVer_IdAreasOfOperationInTheFilter(value: number) {
    Axios.post('var_parametersFilter_SpliceLineJumpBlackVer_IdAreasOfOperationInTheFilter', {id: value})
}


export function horizontalBlack(value: number[]){
    Axios.post('horizontal_black', {
        min: value[0],
        max: value[1]
    })
}
export function var_parametersFilter_SpliceLineJumpBlackHor_IdAreasOfOperationInTheFilter(value: number) {
    Axios.post('var_parametersFilter_SpliceLineJumpBlackHor_IdAreasOfOperationInTheFilter', {id: value})
}


export function found_object_size_filter(value: number[]){
    Axios.post('found_object_size_filter', {
        min: value[0],
        max: value[1]
    })
}

export function vertical_line_size_filter(value: number[]){
    Axios.post('vertical_line_size_filter', {
        min: value[0],
        max: value[1]
    })
}

export function horizontal_line_size(value: number[]){
    Axios.post('horizontal_line_size', {
        min: value[0],
        max: value[1]
    })
}

