import { Axios } from "./api"

export interface CreateAreasParams {
    name: string
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
export function createAreas(params: CreateAreasParams) {
    Axios.post('create_areas', params)
}