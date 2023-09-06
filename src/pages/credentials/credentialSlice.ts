import {PayloadAction, createSlice} from '@reduxjs/toolkit'

const initialState = {
    id: 0,
    username: '',
    levelPermission: 0
}

const credentialsSlice = createSlice({
    name:'credentials',
    initialState: initialState,
    reducers: {
        update: (state, action:PayloadAction<typeof initialState>) => {
            state.id = action.payload.id
            state.levelPermission = action.payload.levelPermission
            state.username = action.payload.username
        },
        getCredentials: (state) => {
            return state
        },
        logout:(state) => {
            localStorage.clear()
            state.id = 0
            state.levelPermission = 0
            state.username = ""
        },
    }
})

export const {getCredentials, update, logout} = credentialsSlice.actions

export default credentialsSlice.reducer