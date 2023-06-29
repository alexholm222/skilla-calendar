import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  statusZoom: localStorage.getItem('statusZoom') == "undefined" ? "" : JSON.parse(localStorage.getItem("statusZoom")),
};

const lkZoom = createSlice({
  name: "lkZoom",
  initialState,
  reducers: {
    setAddStatusZoom(state, action) {
      state.statusZoom = action.payload;
    },
  },
});

export const { setAddStatusZoom } = lkZoom.actions;

export default lkZoom.reducer;
