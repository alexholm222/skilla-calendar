import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	information: (localStorage.getItem('information') == "undefined" ? "" : JSON.parse(localStorage.getItem("information"))) || {},
	isModalCode: false
}

const lkSuccessSlice = createSlice({
	name: 'lkSuccess',
	initialState,
	reducers: {
		setAddInformation(state, action) {
			state.information = action.payload
		},

		setAddModalCode(state, action) {
			state.isModalCode = action.payload
		}
	}
})

export const {setAddInformation, setAddModalCode} = lkSuccessSlice.actions

export default lkSuccessSlice.reducer
