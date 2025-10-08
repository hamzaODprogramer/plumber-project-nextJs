import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    openAddDialoge: false,
    openUpdateDialoge : false,
    openDeleteDialoge : false,
    openShowDialoge : false,
    openShowImageDialoge : false,
    openDeleteImageDialoge : false,
    openOtpCompteAdminDialoge: false
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
        },
        setOpenShowDialoge: (state, action) => {
            state.openShowDialoge = action.payload
        },
        setOpenShowImageDialoge: (state, action) => {
            state.openShowImageDialoge = action.payload
        },
        setOpenDeleteImageDialoge: (state, action) => {
            state.openDeleteImageDialoge = action.payload
        },
        setOpenOtpCompteAdminDialoge: (state, action) => {
            state.openOtpCompteAdminDialoge = action.payload
        }
    }
})

export const { setOpenAddDialoge , setOpenUpdateDialoge , setOpenDeleteDialoge , setOpenShowDialoge , setOpenShowImageDialoge , setOpenDeleteImageDialoge , setOpenOtpCompteAdminDialoge} = adminSlicer.actions
export default adminSlicer.reducer