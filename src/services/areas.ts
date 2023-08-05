import { Axios } from "./api"

export interface Areas {
    name: string,
    area01_X1: number
    area01_Y1: number
    area01_X2: number
    area01_Y2: number
    area02_X1: number
    area02_Y1: number
    area02_X2: number
    area02_Y2: number
    area03_X1: number
    area03_Y1: number
    area03_X2: number
    area03_Y2: number
    area04_X1: number
    area04_Y1: number
    area04_X2: number
    area04_Y2: number
}

export function updateAreaAPI(value:Areas) {
    Axios.post('set_areas', value)
}

export async function getCurrentAreasParams() {
    const {data} = await Axios.get('get_current_areas_params')
    return data
}

export async function getAreas() {
    const {data} = await Axios.get('get_areas')
    return data
}

export function changeCurrentAreas(id: number) {
    Axios.post('change_current_areas', {id})
}

export function saveAreas(name: string) {
    Axios.post('save_areas', {name})
}

export async function deleteAreas() {
    await Axios.post('delete_areas')
}

