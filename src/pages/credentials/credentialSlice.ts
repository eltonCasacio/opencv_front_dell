import {PayloadAction, createSlice} from '@reduxjs/toolkit'

const initialState = {
    id: 0,
    username: '',
    level_permission: 0
}

const credentialsSlice = createSlice({
    name:'credentials',
    initialState: initialState,
    reducers: {
        update: (state, action:PayloadAction<typeof initialState>) => {
            state.id = action.payload.id
            state.level_permission = action.payload.level_permission
            state.username = action.payload.username
            localStorage.setItem("user", JSON.stringify(state))
        },
        getCredentials: (state) => {
            return state
        },
        logout:(state) => {          
            state.id = 0
            state.level_permission = 0
            state.username = ""
            localStorage.clear()
        },
    }
})

export const {getCredentials, update, logout} = credentialsSlice.actions

export default credentialsSlice.reducer