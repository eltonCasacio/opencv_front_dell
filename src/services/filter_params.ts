import { Axios } from "./api"

type COLOR = 'VERMELHO' | 'VERDE' | 'AZUL'
interface MINMAX { min: number, max: number }

interface sendLowHeightValuesParams extends MINMAX {
    color: COLOR
}
async function sendLowHeightValues(params: sendLowHeightValuesParams): Promise<any> {
    const low = params.min
    const hight = params.max
    if (params.min >= 0 && params.max >= 0) {
        return Axios.post('loeheight', { color: params.color, low, hight })
    }
}

interface SendTamMinMaxlvlhParams {
    attr: 'LV' | 'LH'
    value: number[]
}
async function sendTamMinMaxlvlh(params: SendTamMinMaxlvlhParams): Promise<any> {
    const min = params.value[0]
    const max = params.value[1]
    if (params.value[0] >= 0 && params.value[1] >= 0) {
        return Axios.post('tamminmaxlvlh', { attr: params.attr, min, max })
    }
}

async function sendTamminmax(values: number[]): Promise<any> {
    const min = values[0]
    const max = values[1]
    if (min >= 0 && max >= 0) {
        return Axios.post('tamminmax', { min, max })
    }
}

async function sendSimpleValue(value: number, url: string): Promise<any> {
    if (value >= 0) {
        return Axios.post(url, { value: value })
    }
}

async function saveFilter(fileName: string): Promise<any> {
    return Axios.post('save-filter', { fileName: fileName })
}

async function changeFilter(fileName: string): Promise<any> {
    return Axios.post('filter', { fileName: fileName })
}

async function getFilters(): Promise<any> {
    return Axios.get('filters')
}

async function getCurrentFilter(): Promise<any> {
    return Axios.get('current_filter')
}

export { getCurrentFilter, getFilters, changeFilter, sendSimpleValue, sendTamminmax, saveFilter, sendTamMinMaxlvlh, sendLowHeightValues }