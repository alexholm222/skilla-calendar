import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	paymentInfo: (localStorage.getItem('paymentInfo') == "undefined" ? "" : JSON.parse(localStorage.getItem('paymentInfo'))) || {},
};

const lkPayment = createSlice({
	name: 'lkPayment',
	initialState,
	reducers: {
		setAddLoading(state, action) {
			state.isLoading = action.payload;
		},

		setAddPaymentInfo(state, action) {
			state.paymentInfo = action.payload;
		},
	},
});

export const { setAddLoading, setAddPaymentInfo } = lkPayment.actions;

export default lkPayment.reducer;
