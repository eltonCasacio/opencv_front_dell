import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    id: 0,
    username: '',
    levelPermission: 0
}

const credentialsSlice = createSlice({
    name:'credentials',
    initialState: initialState,
    reducers: {
        update: (state, action) => {
            state = action.payload
        },
        getCredentials: (state) => {
            return state
        }
    }
})

export const {getCredentials, update} = credentialsSlice.actions

export default credentialsSlice.reducer