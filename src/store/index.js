import { combineReducers, configureStore } from "@reduxjs/toolkit";
import lkCalendarSlice from './reducer/lk/calendar/slice'


export const rootReducer = combineReducers({
  lkCalendarSlice
  
});

export const store = configureStore({
  reducer: rootReducer,
});
