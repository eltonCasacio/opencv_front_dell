import { UnitConverionInterface } from "../pages/constante/components/Sidebar"
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
         console.debug(error)
    }
}

function selectFilterColorRedMax(value: number) {
    try {
        Axios.post('selectFilterColorRedMax', { value })
    } catch (error) { 
         console.debug(error)
    }
}

function selectFilterColorGreenMin(value: number) {
    try {
        Axios.post('selectFilterColorGreenMin', { value })
    } catch (error) { 
         console.debug(error)
    }
}

function selectFilterColorGreenMax(value: number) {
    try {
        Axios.post('selectFilterColorGreenMax', { value })
    } catch (error) { 
         console.debug(error)
    }
}

function selectFilterColorBlueMin(value: number) {
    try {
        Axios.post('selectFilterColorBlueMin', { value })
    } catch (error) { 
         console.debug(error)
    }
}

function selectFilterColorBlueMax(value: number) {
    try {
        Axios.post('selectFilterColorBlueMax', { value })
    } catch (error) { 
         console.debug(error)
    }
}

export function trackbar_parametersFilter_FoundObjectSizeFilter_Min(value: number) {
    try {
        Axios.post('trackbar_parametersFilter_FoundObjectSizeFilter_Min', { value })
    } catch (error) { 
         console.debug(error)
    }
}

export function trackbar_parametersFilter_FoundObjectSizeFilter_Max(value: number) {
    try {
        Axios.post('trackbar_parametersFilter_FoundObjectSizeFilter_Max', { value })
    } catch (error) { 
         console.debug(error)
    }
}

export function trackbar_parametersFilter_VerticalLineSizeFilterOfFoundObject_Min(value: number) {
    try {
        Axios.post('trackbar_parametersFilter_VerticalLineSizeFilterOfFoundObject_Min', { value })
    } catch (error) { 
         console.debug(error)
    }
}

export function trackbar_parametersFilter_VerticalLineSizeFilterOfFoundObject_Max(value: number) {
    try {
        Axios.post('trackbar_parametersFilter_VerticalLineSizeFilterOfFoundObject_Max', { value })
    } catch (error) { 
         console.debug(error)
    }
}

export function trackbar_parametersFilter_HorizontallyLineSizeFilterOfFoundObject_Min(value: number) {
    try {
        Axios.post('trackbar_parametersFilter_HorizontallyLineSizeFilterOfFoundObject_Min', { value })
    } catch (error) { 
         console.debug(error)
    }
}

export function trackbar_parametersFilter_HorizontallyLineSizeFilterOfFoundObject_Max(value: number) {
    try {
        Axios.post('trackbar_parametersFilter_HorizontallyLineSizeFilterOfFoundObject_Max', { value })
    } catch (error) { 
         console.debug(error)
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
        console.debug("get_current_filter_params", error)
        return null
    }
}

export function found_object_size_filter(value: number[]) {
    try {
        Axios.post('found_object_size_filter', {
            min: value[0],
            max: value[1]
        })
    } catch (error) { 
         console.debug(error)
    }
}

export function vertical_line_size_filter(value: number[]) {
    try {
        Axios.post('vertical_line_size_filter', {
            min: value[0],
            max: value[1]
        })
    } catch (error) { 
         console.debug(error)
    }
}

export function horizontal_line_size(value: number[]) {
    try {
        Axios.post('horizontal_line_size', {
        min: value[0],
        max: value[1]
        })
    } catch (error) { 
         console.debug(error)
    }
}

export async function clear_filters_params() {
    try {
        await Axios.post('clear_filters_params')
    } catch (error) { 
         console.debug(error)
    }
}

export async function saveFilters() {
    try {
        await Axios.post('conv_pixel_to_unit_save')
    } catch (error) {
        console.debug("save unit conversion", error)
     }
}

export async function calculate(params:UnitConverionInterface) {
    try {
        await Axios.post('conv_pixel_to_unit_calculate', {...params})
    } catch (error) {
        console.debug("CALCULATE unit conversion", error)
     }
}

export async function load():Promise<UnitConverionInterface> {
    try {
       const {data} =  await Axios.get<UnitConverionInterface>('conv_pixel_to_unit_load')
       return data
    } catch (error) {
        console.debug("LOAD unit conversion", error)
        return {
                constanteUnidadeParaConvercaoPixelEmUnidade_EixoX: 0,
                constanteUnidadeParaConvercaoPixelEmUnidade_EixoY: 0,
                cameraDistanceFromObject: 0,
                medidaEmPixel_x: 0,
                medidadeEmUnidade_x: 0,
                medidaEmPixel_y: 0,
                medidadeEmUnidade_y: 0,
                current_unit: ""
        }
     }
}