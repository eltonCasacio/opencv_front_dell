import { Axios } from "./api"

type COLOR = 'VERMELHO' | 'VERDE' | 'AZUL'
interface SelectFilterColorRGBParams {
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
    Axios.post('/', {
        trackbar_parametersFilter_selectFilterColor_Red_Min: value,
        number_parametersFilter_selectFilterColor_Red_Min: value
    })
}

function selectFilterColorRedMax(value: number) {
    Axios.post('/', {
        trackbar_parametersFilter_selectFilterColor_Red_Max: value,
        number_parametersFilter_selectFilterColor_Red_Max: value
    })
}

function selectFilterColorGreenMin(value: number) {
    Axios.post('/', {
        trackbar_parametersFilter_selectFilterColor_Green_Min: value,
        number_parametersFilter_selectFilterColor_Green_Min: value
    })
}

function selectFilterColorGreenMax(value: number) {
    Axios.post('/', {
        trackbar_parametersFilter_selectFilterColor_Green_Max: value,
        number_parametersFilter_selectFilterColor_Green_Max: value
    })
}

function selectFilterColorBlueMin(value: number) {
    Axios.post('/', {
        trackbar_parametersFilter_selectFilterColor_Blue_Min: value,
        number_parametersFilter_selectFilterColor_Blue_Min: value
    })
}

function selectFilterColorBlueMax(value: number) {
    Axios.post('/', {
        trackbar_parametersFilter_selectFilterColor_Blue_Max: value,
        number_parametersFilter_selectFilterColor_Blue_Max: value
    })
}

export function trackbarParametersFilterIterationsErode(value: number) {
    Axios.post('/', {
        trackbar_parametersFilter_iterations_erode: value,
        number_parametersFilter_iterations_erode: value
    })
}

export function trackbar_parametersFilter_iterations_dilate(value: number) {
    Axios.post('/', {
        trackbar_parametersFilter_iterations_dilate: value,
        number_parametersFilter_iterations_dilate: value
    })
}

export function trackbar_parametersFilter_SpliceLineJumpingWhiteColorVertically_JumpSize_Min(value: number) {
    Axios.post('/', {
        trackbar_parametersFilter_SpliceLineJumpingWhiteColorVertically_JumpSize_Min: value,
        number_parametersFilter_SpliceLineJumpingWhiteColorVertically_JumpSize_Min: value
    })
}

export function trackbar_parametersFilter_SpliceLineJumpingWhiteColorVertically_JumpSize_Max(value: number) {
    Axios.post('/', {
        trackbar_parametersFilter_SpliceLineJumpingWhiteColorVertically_JumpSize_Max: value,
        number_parametersFilter_SpliceLineJumpingWhiteColorVertically_JumpSize_Max: value
    })
}

export function trackbar_parametersFilter_SpliceLineJumpingWhiteColorHorizontally_JumpSize_Min(value: number) {
    Axios.post('/', {
        trackbar_parametersFilter_SpliceLineJumpingWhiteColorHorizontally_JumpSize_Min: value,
        number_parametersFilter_SpliceLineJumpingWhiteColorHorizontally_JumpSize_Min: value
    })
}

export function trackbar_parametersFilter_SpliceLineJumpingWhiteColorHorizontally_JumpSize_Max(value: number) {
    Axios.post('/', {
        trackbar_parametersFilter_SpliceLineJumpingWhiteColorHorizontally_JumpSize_Max: value,
        number_parametersFilter_SpliceLineJumpingWhiteColorHorizontally_JumpSize_Max: value
    })
}

export function trackbar_parametersFilter_FoundObjectSizeFilter_Min(value: number) {
    Axios.post('/', {
        trackbar_parametersFilter_FoundObjectSizeFilter_Min: value,
        number_parametersFilter_FoundObjectSizeFilter_Min: value
    })
}

export function trackbar_parametersFilter_FoundObjectSizeFilter_Max(value: number) {
    Axios.post('/', {
        trackbar_parametersFilter_FoundObjectSizeFilter_Max: value,
        number_parametersFilter_FoundObjectSizeFilter_Max: value
    })
}

export function trackbar_parametersFilter_VerticalLineSizeFilterOfFoundObject_Min(value: number) {
    Axios.post('/', {
        trackbar_parametersFilter_VerticalLineSizeFilterOfFoundObject_Min: value,
        number_parametersFilter_VerticalLineSizeFilterOfFoundObject_Min: value
    })
}

export function trackbar_parametersFilter_VerticalLineSizeFilterOfFoundObject_Max(value: number) {
    Axios.post('/', {
        trackbar_parametersFilter_VerticalLineSizeFilterOfFoundObject_Max: value,
        number_parametersFilter_VerticalLineSizeFilterOfFoundObject_Max: value
    })
}

export function trackbar_parametersFilter_HorizontallyLineSizeFilterOfFoundObject_Min(value: number) {
    Axios.post('/', {
        trackbar_parametersFilter_HorizontallyLineSizeFilterOfFoundObject_Min: value,
        number_parametersFilter_HorizontallyLineSizeFilterOfFoundObject_Min: value
    })
}

export function trackbar_parametersFilter_HorizontallyLineSizeFilterOfFoundObject_Max(value: number) {
    Axios.post('/', {
        trackbar_parametersFilter_HorizontallyLineSizeFilterOfFoundObject_Max: value,
        number_parametersFilter_HorizontallyLineSizeFilterOfFoundObject_Max: value
    })
}

export function trackbar_ResolutionPixMm_X(value: number) {
    Axios.post('/', {
        trackbar_ResolutionPixMm_X: value,
        number_ResolutionPixMm_X: value
    })
}

export function trackbar_ResolutionPixMm_Y(value: number) {
    Axios.post('/', {
        trackbar_ResolutionPixMm_Y: value,
        number_ResolutionPixMm_Y: value
    })
}