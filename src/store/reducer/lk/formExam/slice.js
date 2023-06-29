import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: (localStorage.getItem('statusExam') == "undefined" ? "" : JSON.parse(localStorage.getItem("statusExam"))) || null,
  step: (localStorage.getItem('stepExam') == "undefined" ? "" : JSON.parse(localStorage.getItem("stepLkExam"))) || 0,
  data: (localStorage.getItem('dataExam') == "undefined" ? "" : JSON.parse(localStorage.getItem("dataExam"))) || {},
  incorrect: (localStorage.getItem('inccorectExam') == "undefined" ? "" : JSON.parse(localStorage.getItem("inccorectExam"))) || [],
};

const lkFormExam = createSlice({
  name: "lkFormExam",
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

    setAddIncorrect(state, action) {
      state.incorrect = action.payload;
    },
  },
});

export const { setAddStep, setAddData, setAddStatus, setAddIncorrect } = lkFormExam.actions;

export default lkFormExam.reducer;
