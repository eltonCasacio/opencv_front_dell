import { Axios } from "./api"

export interface UserResponse {
    id: number
    password: string
    username: string
    level_permission: number
}

export interface RegisterUser {
    username: string
    password: string
    level_permission: number
}

export interface EditUser {
    id: number
    username: string
    password: string
    level_permission: number
}

interface USER_ERROR extends UserResponse {
    username: string
    password: string
    level_permission: number
    msg_error: any
}

export async function loginService(username: string, password: string): Promise<UserResponse | USER_ERROR> {
    try {
        const { data } = await Axios.post<UserResponse>('login', { username, password })
        return data
    } catch (error) {
        return {
            id: 0,
            username: '',
            password: "",
            level_permission: 0,
            msg_error: error
        }
    }
}

export async function registerUserService({ username, password, level_permission }: RegisterUser): Promise<void | string> {
    try {
        await Axios.post('register_user', { username, password, level_permission })
    } catch (error) {
        return String(error)
    }
}

export async function getUsersService(): Promise<UserResponse[]> {
    try {
        const { data } = await Axios.get<UserResponse[]>('users')
        return data
    } catch (error) {
        return [{ id: 0, username: "", password: "", level_permission: 0 }]
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

export async function getUserByIDService(user_id: number): Promise<UserResponse> {
    try {
        const { data } = await Axios.get<UserResponse>(`user/${user_id}`)
        return data
    } catch (error) {
        return { id: 0, username: "", password: "", level_permission: 0, }
    }
}

export async function editUserService({ id, username, password, level_permission }: EditUser): Promise<void | string> {
    try {
        const res = localStorage.getItem("user")
        if (res) {
            const logged_user = JSON.parse(res)
            await Axios.put(`user/${logged_user.id}`, { user_id: id, username, password, level_permission })
        }
    } catch (error) {
        return String(error)
    }
}