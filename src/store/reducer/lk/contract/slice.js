import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	premium: null,
	isContract: (localStorage.getItem('isContract') == "undefined" ? "" : JSON.parse(localStorage.getItem('isContract'))) || false,
	is_online: (localStorage.getItem('is_online') == "undefined" ? "" : JSON.parse(localStorage.getItem('is_online'))) || true,
	persent: (localStorage.getItem('persent') == "undefined" ? "" : JSON.parse(localStorage.getItem('persent'))) || null,
	resultContract: "",
	contractText: "",
	showModalForm: false,
	numberReg: "",
	signed: (localStorage.getItem('signed') == "undefined" ? "": JSON.parse(localStorage.getItem('signed'))) || "",
	date: null,
	contractNumber: null,
	isOverlay: false,
	isCheckFromPage: (localStorage.getItem('isCheckFromPage') == "undefined" ? "" : JSON.parse(localStorage.getItem('isCheckFromPage'))) || false,
};

const lkContract = createSlice({
	name: 'lkSidebar',
	initialState,
	reducers: {
		setAddLoading(state, action) {
			state.isLoading = action.payload;
		},

		setAddCheckPremium(state, action) {
			state.premium = action.payload;
		},

		setAddContact(state, action) {
			state.isContract = action.payload;
		},

		setAddContactText(state, action) {
			state.contractText = action.payload;
		},

		setAddIsOnline(state, action) {
			state.is_online = action.payload;
		},

		setAddIsPersent(state, action) {
			state.persent = action.payload;
		},

		setAddShowModalForm(state, action) {
			state.showModalForm = action.payload;
		},

		setAddNumberReg(state, action) {
			state.numberReg = action.payload;
		},

		setAddResultContract(state, action) {
			state.resultContract = action.payload;
		},

		setAddSigned(state, action) {
			state.signed = action.payload;
		},

		setAddDate(state, action) {
			state.date = action.payload;
		},

		setAddContractNumber(state, action) {
			state.contractNumber = action.payload;
		},

		setAddOverlay(state, action) {
			state.isOverlay = action.payload;
		},
		setIsCheckFromPage(state, action) {
			state.isCheckFromPage = action.payload;
		},
	},
});

export const {
	setAddLoading,
	setAddCheckPremium,
	setAddContact,
	setAddContactText,
	setAddShowModalForm,
	setAddNumberReg,
	setAddIsOnline,
	setAddIsPersent,
	setAddResultContract,
	setAddIsResult,
	setAddSigned,
	setAddDate,
	setAddContractNumber,
	setAddOverlay,
	setIsCheckFromPage
} = lkContract.actions;

export default lkContract.reducer;
