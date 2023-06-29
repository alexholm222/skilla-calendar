import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	activeTarget: JSON.parse(localStorage.getItem('activeTarget')) || 'customer',
	activeLink: window.location.href,
	activeLoadingPage: 'customer',
	activeColorLink:
		JSON.parse(localStorage.getItem('activeColorLink')) ||
		'www.skilla.ru/customer',
	activeBurgerColorLink:
		JSON.parse(localStorage.getItem('activeBurgerColorLink')) ||
		'www.skilla.ru/customer',
	idVideo: null,
	hideNavBar: null,
	utm: '',
	eid: '',
	onClickForm: false,
	onClickFormDiagnostics: false,

	pageBook:
		(localStorage.getItem('pageBook') == 'undefined'
			? ''
			: JSON.parse(localStorage.getItem('pageBook'))) || '',
	statusBook:
		(localStorage.getItem('statusBook') == 'undefined'
			? ''
			: JSON.parse(localStorage.getItem('statusBook'))) || '',
	waitingStatusPayBook:
		(localStorage.getItem('waitingStatusPayBook') == 'undefined'
			? ''
			: JSON.parse(localStorage.getItem('waitingStatusPayBook'))) || false,

	bookPaymentForm: {},
	modalBookProcess:
		(localStorage.getItem('modalBookProcess') == 'undefined'
			? ''
			: JSON.parse(localStorage.getItem('modalBookProcess'))) || false,
	typeBook: 'ebook',
	orderId:
		(localStorage.getItem('orderId') == 'undefined'
			? ''
			: JSON.parse(localStorage.getItem('orderId'))) || '',
};

const mainSlice = createSlice({
	name: 'main',
	initialState,
	reducers: {
		setAddActiveTarget(state, action) {
			state.activeTarget = action.payload;
		},

		setAddActiveLink(state, action) {
			state.activeLink = action.payload;
		},
		setAddActiveLoadingPage(state, action) {
			state.activeLoadingPage = action.payload;
		},
		setAddActiveColorLink(state, action) {
			state.activeColorLink = action.payload;
		},
		setAddActiveBurgerColorLink(state, action) {
			state.activeBurgerColorLink = action.payload;
		},

		setAddId(state, action) {
			state.idVideo = action.payload;
		},

		setAddHideNavBar(state, action) {
			state.hideNavBar = action.payload;
		},

		setAddUtm(state, action) {
			state.utm = action.payload;
		},

		setAddEid(state, action) {
			state.eid = action.payload;
		},

		setAddOnClickForm(state, action) {
			state.onClickForm = action.payload;
		},
		setAddOnClickFormDiagnostics(state, action) {
			state.onClickFormDiagnostics = action.payload;
		},

		setCheckPageBook(state, action) {
			state.pageBook = action.payload;
		},
		setAddStatusBook(state, action) {
			state.statusBook = action.payload;
		},

		setAddWaitingStatusPayBook(state, action) {
			state.waitingStatusPayBook = action.payload;
		},

		setAddbookPaymentForm(state, action) {
			state.bookPaymentForm = action.payload;
		},

		setIsModalBookProcess(state, action) {
			state.modalBookProcess = action.payload;
		},

		setAddTypeBook(state, action) {
			state.typeBook = action.payload;
		},

		setAddOrderId(state, action) {
			state.orderId = action.payload;
		},
	},
});

export const {
	setAddActiveTarget,
	setAddActiveLink,
	setAddActiveLoadingPage,
	setAddActiveColorLink,
	setAddId,
	setAddHideNavBar,
	setAddUtm,
	setAddEid,
	setAddOnClickForm,
	setAddOnClickFormDiagnostics,
	setAddActiveBurgerColorLink,
	setCheckPageBook,
	setAddStatusBook,
	setAddWaitingStatusPayBook,
	setAddbookPaymentForm,
	setIsModalBookProcess,
	setAddTypeBook,
	setAddOrderId
} = mainSlice.actions;

export default mainSlice.reducer;
