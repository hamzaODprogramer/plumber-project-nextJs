import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    openAddDialoge: false,
    openUpdateDialoge : false,
    openDeleteDialoge : false
}

export const adminSlicer = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setOpenAddDialoge: (state, action) => {
            state.openAddDialoge = action.payload
        },
        setOpenUpdateDialoge: (state, action) => {
            state.openUpdateDialoge = action.payload
        },
        setOpenDeleteDialoge: (state, action) => {
            state.openDeleteDialoge = action.payload
        }
    }
})

export const { setOpenAddDialoge , setOpenUpdateDialoge , setOpenDeleteDialoge } = adminSlicer.actions
export default adminSlicer.reducer