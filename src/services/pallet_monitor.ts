import { Axios } from "./api"

export type LogsParams = [[{
    text: string,
    color: string
}]]

export async function getLogs() {
    try {
        const { data } = await Axios.get<LogsParams>('get_log')
        return data
    } catch (error) {
        console.log(error)
        return null
    }
}