import { Axios } from "./api"

type COLOR = 'VERMELHO' | 'VERDE' | 'AZUL'

interface SendValuesParams {
    url: string
    color: COLOR
    values: number[]
}
async function sendValues(params: SendValuesParams): Promise<any> {
    const low = params.values[0]
    const hight = params.values[1]
    if (params.values[0] >= 0 && params.values[1] >= 0) {
        return Axios.post(params.url, { color: params.color, low, hight })
    }
}

interface SendTamMinMaxlvlhParams {
    attr: 'lv' | 'lh'
    values: number[]
}
async function sendTamMinMaxlvlh(params: SendTamMinMaxlvlhParams): Promise<any> {
    const min = params.values[0]
    const max = params.values[1]
    if (params.values[0] >= 0 && params.values[1] >= 0) {
        return Axios.post('tamminmaxlvlh', { attr: params.attr, min, max })
    }
}

async function sendSimpleValue(url: string, value: number): Promise<any> {
    if (value >= 0) {
        return Axios.post(url, { value: value })
    }
}

interface SendTamminmaxParams {
    min: number
    max: number
}
async function sendTamminmax({ min, max }: SendTamminmaxParams): Promise<any> {
    if (min >= 0 && max >= 0) {
        return Axios.post('tamminmax', { min, max })
    }
}

async function saveFilter(fileName: string): Promise<any> {
    return Axios.post('save-filter', { fileName: fileName })
}

async function changeFilter(fileName: string): Promise<any> {
    return Axios.post('filter', { fileName: fileName })
}

function getFilters(): Promise<any> {
    return Axios.get('filters')
}

async function getCurrentFilter(): Promise<any> {
    return Axios.get('current_filter')
}

export { getCurrentFilter, getFilters, changeFilter, saveFilter }