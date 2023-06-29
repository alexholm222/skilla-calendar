import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: (localStorage.getItem('auth') == "undefined" ? "" : JSON.parse(localStorage.getItem("auth"))) || false,
  logOut: false,
  user: (localStorage.getItem('user') == "undefined" ? "" : JSON.parse(localStorage.getItem("user"))) || {},
  phoneNumber: (localStorage.getItem('phoneNumber') == "undefined" ? "" : JSON.parse(localStorage.getItem("phoneNumber"))) || null,
  phoneNumberFromUrl: null,
  helpSupport: false,
  checkDownloadedApp: (localStorage.getItem('checkDownloadedApp') == "undefined" ? "" : JSON.parse(localStorage.getItem("checkDownloadedApp"))) || "failure",
  namePage: ''
};

const lkAuthSlice = createSlice({
  name: "lkAuth",
  initialState,
  reducers: {
    setAddAuth(state, action) {
      state.auth = action.payload;
    },

    setAddPageName(state, action) {
      state.namePage = action.payload;
    },


    setAddPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },

    setAddPhoneNumberFromUrl(state, action) {
      state.phoneNumberFromUrl = action.payload;
    },

    setAddUser(state, action) {
      state.user = action.payload;
    },

    setHelpSupport(state, action) {
      state.helpSupport = action.payload;
    },

    setCheckDownloadedApp(state, action) {
      state.checkDownloadedApp = action.payload;
    },

    setAddLogOut(state, action) {
      state.logOut = action.payload;
    },
  },
});

export const {
  setAddAuth,
  setAddPageName,
  setAddPhoneNumber,
  setAddPhoneNumberFromUrl,
  setAddUser,
  setHelpSupport,
  setCheckDownloadedApp,
  setAddLogOut
} = lkAuthSlice.actions;

export default lkAuthSlice.reducer;
