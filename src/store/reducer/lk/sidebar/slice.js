import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeLink: (localStorage.getItem('activeLink') == "undefined" ? "" : JSON.parse(localStorage.getItem("activeLink"))) || 1,
  showMobile: (localStorage.getItem('showMobile') == "undefined" ? "" : JSON.parse(localStorage.getItem("showMobile"))) || false,
  socketData: null
};

const lkSidebar = createSlice({
  name: "lkSidebar",
  initialState,
  reducers: {
    setAddActiveLink(state, action) {
      state.activeLink = action.payload;
    },

    setShowSidebar(state, action) {
      state.showMobile = action.payload;
    },

    setAddSocket(state, action) {
      state.socketData = action.payload;
    }
  },
});

export const { setAddActiveLink, setShowSidebar, setAddSocket } = lkSidebar.actions;

export default lkSidebar.reducer;
