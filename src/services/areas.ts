import { Axios } from "./api"

const Areas = {
    name: "",
    area01_X1: 0,
    area01_Y1: 0,
    area01_X2: 0,
    area01_Y2: 0,
    area02_X1: 0,
    area02_Y1: 0,
    area02_X2: 0,
    area02_Y2: 0,
    area03_X1: 0,
    area03_Y1: 0,
    area03_X2: 0,
    area03_Y2: 0,
    area04_X1: 0,
    area04_Y1: 0,
    area04_X2: 0,
    area04_Y2: 0,
}

export interface Teste {
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
export function setAreaTeste(value:Teste) {
    setAreasAPI()
}

export function setArea01_X1_x2(value:number[]) {
    Areas.area01_X1 = value[0]
    Areas.area01_X2 = value[1]
    setAreasAPI()
}

export function setArea01_Y1_Y2(value:number[]) {
    Areas.area01_Y1 = value[1]
    Areas.area01_Y2 = value[0]
    setAreasAPI()
}

export function setArea02_X1_X2(value:number[]) {
    Areas.area02_X1 = value[0]
    Areas.area02_X2 = value[1]
    setAreasAPI()
}

export function setArea02_Y1_Y2(value:number[]) {
    Areas.area02_Y1 = value[0]
    Areas.area02_Y2 = value[1]
    setAreasAPI()
}

export function setArea03_X1_X2(value:number[]) {
    Areas.area03_X1 = value[0]
    Areas.area03_X2 = value[1]
    setAreasAPI()
}

export function setArea03_Y1_Y2(value:number[]) {
    Areas.area03_Y1 = value[0]
    Areas.area03_Y2 = value[1]
    setAreasAPI()
}

export function setArea04_X1_X2(value:number[]) {
    Areas.area04_X1 = value[0]
    Areas.area04_X2 = value[1]
    setAreasAPI()
}

export function setArea04_Y1_Y2(value:number[]) {
    Areas.area04_Y1 = value[0]
    Areas.area04_Y2 = value[1]
    setAreasAPI()
}

async function setAreasAPI() {
    await Axios.post('set_areas', Areas)
    getAreas().then(res => {
        console.log(res)
    })
}

export async function getAreas() {
    const {data} = await Axios.get('get_areas')
    return data
}
