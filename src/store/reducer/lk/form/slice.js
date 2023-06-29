import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: (localStorage.getItem('status') == "undefined" ? "" : JSON.parse(localStorage.getItem("status"))) || null,
  step: (localStorage.getItem('step') == "undefined" ? "" : JSON.parse(localStorage.getItem("stepLk"))) || 1,
  data: (localStorage.getItem('data') == "undefined" ? "" : JSON.parse(localStorage.getItem("data"))) || {},
};

const lkForm = createSlice({
  name: "lkForm",
  initialState,
  reducers: {
    setAddStatus(state, action) {
      state.status = action.payload;
    },

    setAddStep(state, action) {
      state.step = action.payload;
    },

    setAddData(state, action) {
      state.data = { ...state.data, ...action.payload };
    },
  },
});

export const { setAddStep, setAddData, setAddStatus } = lkForm.actions;

export default lkForm.reducer;
