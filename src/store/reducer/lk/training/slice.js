import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	placePicker: (localStorage.getItem('placePicker') == "undefined" ? "" : JSON.parse(localStorage.getItem("placePicker"))) || 1,
	datePicker: null,
	dateForApi:  null,
	isModal: false,
	checkedDateInput: false,
	isSendData: false,
	trainingInfo: (localStorage.getItem('trainingInfo') == "undefined" ? "" : JSON.parse(localStorage.getItem("trainingInfo"))) || {},
};

const lkTraining = createSlice({
	name: 'lkSidebar',
	initialState,
	reducers: {
		setAddLoading(state, action) {
			state.isLoading = action.payload;
		},

		setAddPlacePicker(state, action) {
			state.placePicker = action.payload;
		},

		setAdddatePicker(state, action) {
			state.datePicker = action.payload;
		},

		setAddDateForApi(state, action) {
			state.dateForApi = action.payload;
		},

		setAddModal(state, action) {
			state.isModal = action.payload;
		},

		setAddTrainingInfo(state, action) {
			state.trainingInfo = action.payload;
		},

		setAddCheckedDateInput(state, action) {
			state.checkedDateInput = action.payload;
		},

		setAddSendData(state, action) {
			state.isSendData = action.payload;
		},
	},
});

export const {
	setAddLoading,
	setAddPlacePicker,
	setAdddatePicker,
	setAddDateForApi,
	setAddModal,
	setAddTrainingInfo,
	setAddCheckedDateInput,
	setAddSendData,
} = lkTraining.actions;

export default lkTraining.reducer;
