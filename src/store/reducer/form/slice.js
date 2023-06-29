import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isFormSubmit: JSON.parse(localStorage.getItem("isFormSubmit")),
  isFormSubmitDefault: false,
  step: JSON.parse(localStorage.getItem("step")),
  stepDiagnostics: JSON.parse(localStorage.getItem("stepDiagnostics")),
  phoneBusiness: JSON.parse(localStorage.getItem("phoneBusiness")),
  nameBusiness: JSON.parse(localStorage.getItem("nameBusiness")),
  formSendBusiness: JSON.parse(localStorage.getItem("formSendBusiness")),
  formSendDiagnostics: false,
  emailBusiness: JSON.parse(localStorage.getItem("emailBusiness")),
  messageWhy: "",
  completeForm: false,
  isExpPeoples: null,
  isExpBusiness: null,
  onClick: false,
  sendRequest: false,
  id: JSON.parse(localStorage.getItem("id")) || "",
  idCopy: JSON.parse(localStorage.getItem("idCopy")) || "",
  formSendCustomer: false,
  sendFormFounder: false,
  formSendBook: false,


  phoneSave: (localStorage.getItem('phoneSave') == "undefined" ? "" : JSON.parse(localStorage.getItem("phoneSave"))) || '',
  phoneFromBookFooter: (localStorage.getItem('phoneFromBookFooter') == "undefined" ? "" : JSON.parse(localStorage.getItem("phoneFromBookFooter"))) || '',
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setAddLoading(state, action) {
      state.loading = action.payload;
    },

    setAddFormSubmit(state, action) {
      state.isFormSubmit = action.payload;
    },

    setAddFormSubmitDefault(state, action) {
      state.isFormSubmitDefault = action.payload;
    },

    setAddStep(state, action) {
      state.step = action.payload;
    },

    setAddEmailBusiness(state, action) {
      state.emailBusiness = action.payload;
    },

    setAddMessageBusiness(state, action) {
      state.messageBusiness = action.payload;
    },

    setAddPhoneBusiness(state, action) {
      state.phoneBusiness = action.payload;
    },

    setAddNameBusiness(state, action) {
      state.nameBusiness = action.payload;
    },

    setAddCompleteForm(state, action) {
      state.completeForm = action.payload;
    },

    setAddSendBusiness(state, action) {
      state.formSendBusiness = action.payload;
    },

    setAddSendDiagnostics(state, action) {
      state.formSendDiagnostics = action.payload;
    },

    setAddIsExpPeoples(state, action) {
      state.isExpPeoples = action.payload;
    },

    setAddIsExpBusiness(state, action) {
      state.isExpBusiness = action.payload;
    },

    setAddMessage(state, action) {
      state.messageWhy = action.payload;
    },

    setAddOnClick(state, action) {
      state.onClick = action.payload;
    },

    setAddSendRequest(state, action) {
      state.sendRequest = action.payload;
    },

    setAddId(state, action) {
      state.id = action.payload;
    },

    setAddIdCopy(state, action) {
      state.idCopy = action.payload;
    },

    setAddformSendCustomer(state, action) {
      state.formSendCustomer = action.payload;
    },
    setAddformSendFounder(state, action) {
      state.formSendFounder = action.payload;
    },
    setAddformSendBook(state, action) {
      state.formSendBook = action.payload;
    },

    setAddPhoneSave(state, action) {
      state.phoneSave = action.payload;
    },

    setAddPhoneFromBookFooter(state, action) {
      state.phoneFromBookFooter = action.payload;
    },
  },
});

export const {
  setAddLoading,
  setAddFormSubmit,
  setAddFormSubmitDefault,
  setAddStep,
  setAddSendBusiness,
  setAddCompleteForm,
  setAddPhoneBusiness,
  setAddNameBusiness,
  setAddIsExpPeoples,
  setAddIsExpBusiness,
  setAddMessage,
  setAddOnClick,
  setAddEmailBusiness,
  setAddSendRequest,
  setAddId,
  setAddIdCopy,
  setAddformSendCustomer,
  setAddSendDiagnostics,
  setAddformSendFounder,
  setAddformSendBook,

  
  setAddPhoneSave,
  setAddPhoneFromBookFooter
} = formSlice.actions;

export default formSlice.reducer;
