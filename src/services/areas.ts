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
    getAreas().then(res => {
        console.log(res)
    })
}

export async function getAreas() {
    const {data} = await Axios.get('get_areas')
    return data
}
