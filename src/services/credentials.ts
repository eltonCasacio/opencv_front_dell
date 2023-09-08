import { Axios } from "./api"

export interface CredentialsResponse {
    id: number
    username: string
    level_permission: number
}

export interface RegisterCredentials {
    username: string
    password: string
    level_permission: number
}

export interface EditCredentials {
    id: number
    username: string
    password: string
    level_permission: number
}

interface CREDENTIALS_ERROR extends CredentialsResponse {
    username: string
    password: string
    level_permission: number
    msg_error: any
}

export async function loginService(username: string, password: string): Promise<CredentialsResponse | CREDENTIALS_ERROR> {
    try {
        const { data } = await Axios.post<CredentialsResponse>('login', { username, password })
        return data
    } catch (error) {
        return {
            id: 0,
            username: '',
            level_permission: 0,
            msg_error: error
        }
    }
}

export async function registerUserService({ username, password, level_permission }: RegisterCredentials): Promise<void | string> {
    try {
        await Axios.post('register_user', { username, password, level_permission })
    } catch (error) {
        return String(error)
    }
}

export async function getUsersService(): Promise<CredentialsResponse[]> {
    try {
        const { data } = await Axios.get<CredentialsResponse[]>('users')
        return data
    } catch (error) {
        return [{ id: 0, level_permission: 0, username: "" }]
    }
}

export async function deleteUserService(user_id: number): Promise<string> {
    try {
        await Axios.post('user_delete', { id: user_id })
        return "deleted user success"
    } catch (error) {
        return "delete user error"
    }
}

export async function editUserService({id, username, password, level_permission }: EditCredentials): Promise<void | string> {
    try {
        await Axios.post('edit_user', { id, username, password, level_permission })
    } catch (error) {
        return String(error)
    }
}

export async function getUserByIDService(user_id: number): Promise<CredentialsResponse> {
    try {
        const { data } = await Axios.get<CredentialsResponse>(`user/${user_id}`)
        return data
    } catch (error) {
        return { id: 0, level_permission: 0, username: "" }
    }
}