import {createSlice } from '@reduxjs/toolkit';

const initialState = {
 loading: false,
 textarea: false,
 doNotUnsubscribe: false,
 unsubscribe: false,
}

const formUnsubscribe = createSlice({
   name: 'formUnsubscribe',
   initialState,
   reducers: {
    setAddLoading(state, action) {
      state.loading = action.payload;
    },
    setAddTextarea(state, action) {
      state.textarea = action.payload;
    },

    setAddDoNotUnsubscribe(state, action) {
      state.doNotUnsubscribe = action.payload;
    },

    setAddUnsubscribe(state, action) {
      state.unsubscribe = action.payload;
    },
   },
 });


 export const { setAddTextarea, setAddDoNotUnsubscribe, setAddUnsubscribe, setAddLoading } = formUnsubscribe.actions;

 export default formUnsubscribe.reducer;
