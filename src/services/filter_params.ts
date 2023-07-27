import { Axios } from "./api"

type COLOR = 'VERMELHO' | 'VERDE' | 'AZUL'
interface MINMAX { min: number, max: number }

interface sendLowHeightValuesParams extends MINMAX {
    color: COLOR
}
function sendLowHeightValues(params: sendLowHeightValuesParams) {
    const low = params.min
    const hight = params.max
    if (params.min >= 0 && params.max >= 0) {
        // const res = await Axios.post('parametersFilter_selectFilterColor', { color: params.color, low, hight })

    }
}

interface SendTamMinMaxlvlhParams {
    attr: 'LV' | 'LH'
    value: number[]
}
function sendTamMinMaxlvlh(params: SendTamMinMaxlvlhParams) {
    const min = params.value[0]
    const max = params.value[1]
    if (params.value[0] >= 0 && params.value[1] >= 0) {
        // const res = await Axios.post('parametersFilter_SpliceLineJumpingWhiteColor_JumpSize', { attr: params.attr, min, max })

    }
}
function sendTamminmax(values: number[]) {
    const min = values[0]
    const max = values[1]
    if (min >= 0 && max >= 0) {
        // const res = await Axios.post('parametersFilter_FoundObjectSizeFilter', { min, max })

    }
}
function sendSimpleValue(value: number, url: string) {
    if (value >= 0) {
        // const res = await Axios.post(url, { value: value })

    }
}
function saveFilter(fileName: string) {
    // const res = await Axios.post('save-filter', { fileName: fileName })
}
function changeFilter(fileName: string) {
    // const res = await Axios.post('filter', { fileName: fileName })
}
async function getFilters() {
    // const {data} = await Axios.get('filters')
    // return data
}

async function getCurrentFilter() {
    // try {
    //     const {data} = await Axios.get('current_filter')
    //     return data
    // } catch (error) {
    //     throw new Error("request error on getCurrentFilter")
    // }

}

export { getCurrentFilter, getFilters, changeFilter, sendSimpleValue, sendTamminmax, saveFilter, sendTamMinMaxlvlh, sendLowHeightValues }