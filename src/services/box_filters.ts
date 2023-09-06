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
    try {
        Axios.post('selectFilterColorRedMin', { value })
    } catch (error) { 
         console.log(error)
    }
}

function selectFilterColorRedMax(value: number) {
    try {
        Axios.post('selectFilterColorRedMax', { value })
    } catch (error) { 
         console.log(error)
    }
}

function selectFilterColorGreenMin(value: number) {
    try {
        Axios.post('selectFilterColorGreenMin', { value })
    } catch (error) { 
         console.log(error)
    }
}

function selectFilterColorGreenMax(value: number) {
    try {
        Axios.post('selectFilterColorGreenMax', { value })
    } catch (error) { 
         console.log(error)
    }
}

function selectFilterColorBlueMin(value: number) {
    try {
        Axios.post('selectFilterColorBlueMin', { value })
    } catch (error) { 
         console.log(error)
    }
}

function selectFilterColorBlueMax(value: number) {
    try {
        Axios.post('selectFilterColorBlueMax', { value })
    } catch (error) { 
         console.log(error)
    }
}

export function trackbarParametersFilterIterationsErode(value: number) {
    try {
        Axios.post('parametersFilter_Iterations_erode', { value })
    } catch (error) { 
         console.log(error)
    }
}

export function trackbar_parametersFilter_iterations_dilate(value: number) {
    try {
        Axios.post('trackbar_parametersFilter_iterations_dilate', { value })
    } catch (error) { 
         console.log(error)
    }
}

export function trackbar_parametersFilter_SpliceLineJumpingWhiteColorVertically_JumpSize_Min(value: number) {
    try {
        Axios.post('trackbar_parametersFilter_SpliceLineJumpingWhiteColorVertically_JumpSize_Min', { value })
    } catch (error) { 
         console.log(error)
    }
}

export function trackbar_parametersFilter_SpliceLineJumpingWhiteColorVertically_JumpSize_Max(value: number) {
    try {
        Axios.post('trackbar_parametersFilter_SpliceLineJumpingWhiteColorVertically_JumpSize_Max', { value })
    } catch (error) { 
         console.log(error)
    }
}

export function trackbar_parametersFilter_SpliceLineJumpingWhiteColorHorizontally_JumpSize_Min(value: number) {
    try {
        Axios.post('trackbar_parametersFilter_SpliceLineJumpingWhiteColorHorizontally_JumpSize_Min', { value })
    } catch (error) { 
         console.log(error)
    }
}

export function trackbar_parametersFilter_SpliceLineJumpingWhiteColorHorizontally_JumpSize_Max(value: number) {
    try {
        Axios.post('trackbar_parametersFilter_SpliceLineJumpingWhiteColorHorizontally_JumpSize_Max', { value })
    } catch (error) { 
         console.log(error)
    }
}

export function trackbar_parametersFilter_FoundObjectSizeFilter_Min(value: number) {
    try {
        Axios.post('trackbar_parametersFilter_FoundObjectSizeFilter_Min', { value })
    } catch (error) { 
         console.log(error)
    }
}

export function trackbar_parametersFilter_FoundObjectSizeFilter_Max(value: number) {
    try {
        Axios.post('trackbar_parametersFilter_FoundObjectSizeFilter_Max', { value })
    } catch (error) { 
         console.log(error)
    }
}

export function trackbar_parametersFilter_VerticalLineSizeFilterOfFoundObject_Min(value: number) {
    try {
        Axios.post('trackbar_parametersFilter_VerticalLineSizeFilterOfFoundObject_Min', { value })
    } catch (error) { 
         console.log(error)
    }
}

export function trackbar_parametersFilter_VerticalLineSizeFilterOfFoundObject_Max(value: number) {
    try {
        Axios.post('trackbar_parametersFilter_VerticalLineSizeFilterOfFoundObject_Max', { value })
    } catch (error) { 
         console.log(error)
    }
}

export function trackbar_parametersFilter_HorizontallyLineSizeFilterOfFoundObject_Min(value: number) {
    try {
        Axios.post('trackbar_parametersFilter_HorizontallyLineSizeFilterOfFoundObject_Min', { value })
    } catch (error) { 
         console.log(error)
    }
}

export function trackbar_parametersFilter_HorizontallyLineSizeFilterOfFoundObject_Max(value: number) {
    try {
        Axios.post('trackbar_parametersFilter_HorizontallyLineSizeFilterOfFoundObject_Max', { value })
    } catch (error) { 
         console.log(error)
    }
}

export function trackbar_ResolutionPixMm_X(value: number) {
    try {
        Axios.post('trackbar_ResolutionPixMm_X', { value })
    } catch (error) { 
         console.log(error)
    }
}

export function trackbar_ResolutionPixMm_Y(value: number) {
    try {
        Axios.post('trackbar_ResolutionPixMm_Y', { value })
    } catch (error) { 
         console.log(error)
    }
}

export async function getFilters() {
    try {
        const { data } = await Axios.get('get_filters')
        return data
    } catch (error) {
        console.log("getFilters", error)
        return null
    } 
}

export async function saveFilters(name: string) {
    try {
        await Axios.post('save_filters', { name })
    } catch (error) {
        console.log("saveFilters", error)
     }
}

export async function deleteFilters() {
    try {
        await Axios.post('delete_filters')
    } catch (error) {
        console.log("delete_filters", error)
     }
}

export async function changeCurrentFilters(id: number) {
    try {
        await Axios.post('change_current_filters', { id })
    } catch (error) {
        console.log("change_current_filters", error)
     }
}

export async function getCurrentFilterParams() {
    try {
        const {data} = await Axios.get('get_current_filter_params')
        return {
            name: data?.name || "",
            selectFilterColor_Red_Min: data?.selectFilterColor_Red_Min || 0,
            selectFilterColor_Red_Max: data?.selectFilterColor_Red_Max || 0,
            selectFilterColor_Green_Min: data?.selectFilterColor_Green_Min || 0,
            var_parametersFilter_selectFilterColor_Green_Max: data?.var_parametersFilter_selectFilterColor_Green_Max || 0,
            selectFilterColor_Blue_Min: data?.selectFilterColor_Blue_Min || 0,
            selectFilterColor_Blue_Max: data?.selectFilterColor_Blue_Max || 0,
            DefinedAreaForFilter_init_X: data?.DefinedAreaForFilter_init_X || 0,
            DefinedAreaForFilter_init_Y: data?.DefinedAreaForFilter_init_Y || 0,
            Iterations_erode: data?.Iterations_erode || 0,
            Iterations_dilate: data?.Iterations_dilate || 0,
            SpliceLineJumpingWhiteColorVertically_JumpSize_Min: data?.SpliceLineJumpingWhiteColorVertically_JumpSize_Min || 0,
            SpliceLineJumpingWhiteColorVertically_JumpSize_Max: data?.SpliceLineJumpingWhiteColorVertically_JumpSize_Max || 0,
            SpliceLineJumpWhiteVer_IdAreasOfOperationInTheFilter: data?.SpliceLineJumpWhiteVer_IdAreasOfOperationInTheFilter || 0,
            SpliceLineJumpingWhiteColorHorizontally_JumpSize_Min: data?.SpliceLineJumpingWhiteColorHorizontally_JumpSize_Min || 0,
            SpliceLineJumpingWhiteColorHorizontally_JumpSize_Max: data?.SpliceLineJumpingWhiteColorHorizontally_JumpSize_Max || 0,
            SpliceLineJumpWhiteHor_IdAreasOfOperationInTheFilter: data?.SpliceLineJumpWhiteHor_IdAreasOfOperationInTheFilter || 0,
            SpliceLineJumpingBlackColorVertically_JumpSize_Min: data?.SpliceLineJumpingBlackColorVertically_JumpSize_Min || 0,
            SpliceLineJumpingBlackColorVertically_JumpSize_Max: data?.SpliceLineJumpingBlackColorVertically_JumpSize_Max || 0,
            SpliceLineJumpBlackVer_IdAreasOfOperationInTheFilter: data?.SpliceLineJumpBlackVer_IdAreasOfOperationInTheFilter || 0,
            SpliceLineJumpingBlackColorHorizontally_JumpSize_Min: data?.SpliceLineJumpingBlackColorHorizontally_JumpSize_Min || 0,
            SpliceLineJumpingBlackColorHorizontally_JumpSize_Max: data?.SpliceLineJumpingBlackColorHorizontally_JumpSize_Max || 0,
            SpliceLineJumpBlackHor_IdAreasOfOperationInTheFilter: data?.SpliceLineJumpBlackHor_IdAreasOfOperationInTheFilter || 0,
            FoundObjectSizeFilter_Min: data?.FoundObjectSizeFilter_Min || 0,
            FoundObjectSizeFilter_Max: data?.FoundObjectSizeFilter_Max || 0,
            VerticalLineSizeFilterOfFoundObject_Min: data?.VerticalLineSizeFilterOfFoundObject_Min || 0,
            VerticalLineSizeFilterOfFoundObject_Max: data?.VerticalLineSizeFilterOfFoundObject_Max || 0,
            HorizontalLineSizeFilterOfFoundObject_Min: data?.HorizontalLineSizeFilterOfFoundObject_Min || 0,
            HorizontalLineSizeFilterOfFoundObject_Max: data?.HorizontalLineSizeFilterOfFoundObject_Max || 0,
            ConstResolutionPixelMm_X: data?.ConstResolutionPixelMm_X || 0,
            ConstResolutionPixelMm_Y: data?.ConstResolutionPixelMm_Y || 0,
            labelWeb_RecipeName: data?.labelWeb_RecipeName || 0,
        }
    } catch (error) { 
        console.log("get_current_filter_params", error)
        return null
    }
}

export function verticallyWhite(value: number[]) {
    try {
        Axios.post('vertically_white', {
            min: value[0],
            max: value[1]
        })
    } catch (error) { 
         console.log(error)
    }
}

export function var_parametersFilter_SpliceLineJumpWhiteVer_IdAreasOfOperationInTheFilter(value: number) {
    try {
        Axios.post('var_parametersFilter_SpliceLineJumpWhiteVer_IdAreasOfOperationInTheFilter', { id: value })
    } catch (error) { 
         console.log(error)
    }
}


export function horizontallyWhite(value: number[]) {
    try {
        Axios.post('horizontally_white', {
            min: value[0],
            max: value[1]
        })
    } catch (error) { 
         console.log(error)
    }
}

export function var_parametersFilter_SpliceLineJumpWhiteHor_IdAreasOfOperationInTheFilter(value: number) {
    try {
        Axios.post('var_parametersFilter_SpliceLineJumpWhiteHor_IdAreasOfOperationInTheFilter', { id: value })
    } catch (error) { 
         console.log(error)
    }
}


export function verticallyBlack(value: number[]) {
    try {
        Axios.post('vertically_black', {
            min: value[0],
            max: value[1]
        })
    } catch (error) { 
         console.log(error)
    }
}

export function var_parametersFilter_SpliceLineJumpBlackVer_IdAreasOfOperationInTheFilter(value: number) {
    try {
        Axios.post('var_parametersFilter_SpliceLineJumpBlackVer_IdAreasOfOperationInTheFilter', { id: value })
    } catch (error) { 
         console.log(error)
    }
}

export function horizontalBlack(value: number[]) {
    try {
        Axios.post('horizontal_black', {
            min: value[0],
            max: value[1]
        })
    } catch (error) { 
         console.log(error)
    }
}

export function var_parametersFilter_SpliceLineJumpBlackHor_IdAreasOfOperationInTheFilter(value: number) {
    try {
        Axios.post('var_parametersFilter_SpliceLineJumpBlackHor_IdAreasOfOperationInTheFilter', { id: value })
    } catch (error) { 
         console.log(error)
    }
}

export function found_object_size_filter(value: number[]) {
    try {
        Axios.post('found_object_size_filter', {
            min: value[0],
            max: value[1]
        })
    } catch (error) { 
         console.log(error)
    }
}

export function vertical_line_size_filter(value: number[]) {
    try {
        Axios.post('vertical_line_size_filter', {
            min: value[0],
            max: value[1]
        })
    } catch (error) { 
         console.log(error)
    }
}

export function horizontal_line_size(value: number[]) {
    try {
        Axios.post('horizontal_line_size', {
        min: value[0],
        max: value[1]
        })
    } catch (error) { 
         console.log(error)
    }
}

export async function clear_filters_params() {
    try {
        await Axios.post('clear_filters_params')
    } catch (error) { 
         console.log(error)
    }
}