import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openAddDialoge: false,
  openUpdateDialoge: false,
  openDeleteDialoge: false,
  openShowDialoge: false,
  openShowImageDialoge: false,
  openDeleteImageDialoge: false,
  openOtpCompteAdminDialoge: false,
  sideBarVisibility: true,
  lang : 'fr',
  reloadData: false,
  currendId: -1
};

export const adminSlicer = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setOpenAddDialoge: (state, action) => {
      state.openAddDialoge = action.payload;
    },
    setOpenUpdateDialoge: (state, action) => {
      state.openUpdateDialoge = action.payload;
    },
    setOpenDeleteDialoge: (state, action) => {
      state.openDeleteDialoge = action.payload;
    },
    setOpenShowDialoge: (state, action) => {
      state.openShowDialoge = action.payload;
    },
    setOpenShowImageDialoge: (state, action) => {
      state.openShowImageDialoge = action.payload;
    },
    setOpenDeleteImageDialoge: (state, action) => {
      state.openDeleteImageDialoge = action.payload;
    },
    setOpenOtpCompteAdminDialoge: (state, action) => {
      state.openOtpCompteAdminDialoge = action.payload;
    },
    setSideBarVisibility: (state, action) => {
      state.sideBarVisibility = action.payload;
    },
    setLang: (state, action) => {
      state.lang = action.payload;
    },
    setReloadData: (state, action) => {
      state.reloadData = action.payload;
    },
    setCurrentId: (state,action) => {
      state.currendId = action.payload
    }
  },
});

export const {
  setOpenAddDialoge,
  setOpenUpdateDialoge,
  setOpenDeleteDialoge,
  setOpenShowDialoge,
  setOpenShowImageDialoge,
  setOpenDeleteImageDialoge,
  setOpenOtpCompteAdminDialoge,
  setSideBarVisibility,
  setLang,
  setReloadData,
  setCurrentId
} = adminSlicer.actions;
export default adminSlicer.reducer;
