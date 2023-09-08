import { Axios } from "./api"

interface CredentialsResponse {
    id: number
    username: string
    level_permission: number
}

export async function loginService(username: string, password: string) {
    try {
        const { data } = await Axios.post<CredentialsResponse>('login', { username, password })
        return data
    } catch (error) {
        console.log(error)
        return null
    }
}