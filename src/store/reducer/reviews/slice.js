import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  reviews: [],
  reviewsId: {}
}

export const fetchReviews = createAsyncThunk('reviews/fetchReviews', async () => {
   const {data} = await axios.get(
      `/reviewsData.json`,
    );
    return data;
}, );

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setAddReviews(state, action) {
      state.reviews = action.payload;
    },

    setAddReviewsId(state, action) {
      state.reviewsId = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchReviews.pending, (state) => {


    });
    builder.addCase(fetchReviews.fulfilled, (state, action) => {
      state.reviews = action.payload;

    });
    builder.addCase(fetchReviews.rejected, (state) => {

    });
  },
});


export const {
  setAddReviews,
  setAddReviewsId
} = reviewsSlice.actions;

export default reviewsSlice.reducer;