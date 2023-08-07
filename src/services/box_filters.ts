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

export function changeCurrentFilters(id: number) {
    Axios.post('change_current_filters', {id})
}