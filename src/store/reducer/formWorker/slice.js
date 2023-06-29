import {
   createSlice
} from '@reduxjs/toolkit';

const initialState = {
   step: 1,
   modalMenu: false,
   valueCity: '',
   valueAge: '',
   valueCitizenship: '',
   valueName: '',
   valuePhoneNumber: '',
   valueRadio: '',
   valueMessage: '',

}

const formWorkerSlice = createSlice({
   name: 'formWorker',
   initialState,
   reducers: {
      setAddStep(state, action) {
         state.step = action.payload;
      },

      setAddModalMenu(state, action) {
         state.modalMenu = action.payload;
      },

      setAddCityValue(state, action) {
         state.valueCity = action.payload;
      },

      setAddAgeValue(state, action) {
         state.valueAge = action.payload;
      },
      setAddCitizenshipValue(state, action) {
         state.valueCitizenship = action.payload;
      },

      setAddNameValue(state, action) {
         state.valueName= action.payload;
      },

      setAddPhoneNumberValue(state, action) {
         state.valuePhoneNumber = action.payload;
      },
      setAddRadioValue(state, action) {
         state.valueRadio = action.payload;
      },
      setAddMessageValue(state, action) {
         state.valueMessage = action.payload;
      },
   }
})

export const {
   setAddStep,
   setAddModalMenu,
   setAddCityValue,
   setAddAgeValue,
   setAddCitizenshipValue,
   setAddNameValue,
   setAddPhoneNumberValue,
   setAddRadioValue,
   setAddMessageValue
} = formWorkerSlice.actions
export default formWorkerSlice.reducer