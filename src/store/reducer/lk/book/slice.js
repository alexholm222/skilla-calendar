import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isModal: (localStorage.getItem('isModal') == "undefined" ? "" : JSON.parse(localStorage.getItem("isModal"))) || false,
	InfoBook: {},
	waitingBook: (localStorage.getItem('waitingBook') == "undefined" ? "" : JSON.parse(localStorage.getItem("waitingBook"))) || false,
	isLoadingFooterBook: false
};

const lkBookSlice = createSlice({
	name: 'lkBook',
	initialState,
	reducers: {
		setOpenModal(state, action) {
			state.isModal = action.payload;
		},

		setAddInfoBook(state, action) {
			state.InfoBook = action.payload;
		},

		setAddWaitingBook(state, action) {
			state.waitingBook = action.payload;
		},

		setLoadingFooterBook(state, action) {
			state.isLoadingFooterBook = action.payload;
		},
	},
});

export const { setOpenModal, setAddInfoBook, setAddWaitingBook, setLoadingFooterBook } = lkBookSlice.actions;

export default lkBookSlice.reducer;
