import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface UserInterface {
    id: number,
    username: string,
    level_permission: number
}

const loggedUser:UserInterface = {
    id: 0,
    username: "",
    level_permission: 0
}

const users:UserInterface[] = [
    { id: 1, username: "user1", level_permission: 1},
    { id: 2, username: "user2", level_permission: 2},
    { id: 3, username: "user3", level_permission: 3},
]

const state = {
    loggedUser:loggedUser,
    users:users
}

const usersSlice = createSlice({
    name: 'users',
    initialState: state,
    reducers: {
        updateLoggedUser: (state, action: PayloadAction<UserInterface>) => {
            state.loggedUser = action.payload
            localStorage.setItem("user", JSON.stringify(action.payload))
         },
    }
})

export const getLoggedUser = (state: RootState) => state.users.loggedUser

export const selectUsers = (state: RootState) => state.users.users

export const selectUserByID = (state: RootState, id:number) => {
    return state.users.users.find((user) => user.id === id)
}

export const { updateLoggedUser } = usersSlice.actions
export default usersSlice.reducer