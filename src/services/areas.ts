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

export type Area = 'area01_X' | 'area01_Y' | 'area02_X' | 'area02_Y' | 'area03_X' | 'area03_Y' | 'area04_X' | 'area04_Y'

export async function updateAreaAPI(area_eixo: Area, value:number[]) {
    try {
        await Axios.post('set_areas', { area_eixo, value})
    } catch (error) {}
}

export async function getCurrentAreasParams() {
    try {
        const {data} = await Axios.get('get_current_areas_params')
        return data
    } catch (error) {}
}

export async function getAreas() {
    try {
        const {data} = await Axios.get('get_areas')
        return data
    } catch (error) {}
}

export async function changeCurrentAreas(id: number) {
    try {
        await Axios.post('change_current_areas', {id})
    } catch (error) {}
}

export async function saveAreas(name: string) {
    try {
        await Axios.post('save_areas', {name})
    } catch (error) {}
}

export async function deleteAreas() {
    try {
        await Axios.post('delete_areas')
    } catch (error) {}
}


export async function clear_areas_params(){
    try {
        await Axios.post('clear_areas_params')
    } catch (error) {}
   
}
