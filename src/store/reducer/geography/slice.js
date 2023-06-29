import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { getPartners} from '../../../Api/index'

const initialState = {
   offices: {},
   searchValue: '',
   status: 'loading'
}

export const fetchOfficeCity = createAsyncThunk('offices/fetchOfficeCity', async () => {
   const {
      data
   } = await getPartners()
   return data;
}, );

const officesSlice = createSlice({
   name: 'offices',
   initialState,
   reducers: {
      setAddOffices(state, action) {
         state.offices = action.payload
      },

      setAddSearchValue(state, action) {
         state.searchValue = action.payload
      },
   },

   extraReducers: (builder) => {
      builder.addCase(fetchOfficeCity.pending, (state) => {
         state.status = 'loading';
      });
      builder.addCase(fetchOfficeCity.fulfilled, (state, action) => {
         state.offices = action.payload
         state.status = 'success';

      });
      builder.addCase(fetchOfficeCity.rejected, (state) => {
         state.status = 'error';
         state.offices = {};
      });
   },
});


export const {
   setAddOffices,
   setAddSearchValue
} = officesSlice.actions;

export default officesSlice.reducer;