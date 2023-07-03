import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface FilterInterface {
  id: string
  name: string;
}

const filters: FilterInterface[] = [
  { id: '1', name: 'filter1' },
  { id: '2', name: 'filter2' },
  { id: '3', name: 'filter3' },
  { id: '4', name: 'filter4' },
  { id: '10', name: 'filter10' },
  { id: '20', name: 'filter20' },
  { id: '30', name: 'filter30' },
  { id: '40', name: 'filter40' },
]

export const initialState = filters


const filtersSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    createFilter(state, action) { },
    listFilters(state, action) { },
    deleteFilter(state, action) { }
  }
})


// Selectors
export const selectFilters = (state: RootState) => state.filters

export default filtersSlice.reducer