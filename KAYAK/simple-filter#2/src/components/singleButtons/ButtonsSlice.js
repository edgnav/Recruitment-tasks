import { createSlice } from '@reduxjs/toolkit';

export const buttonsSlice = createSlice({
  name: 'buttons',
  initialState: {
    middleButtons: [false, false, false, false],
    dropDown1CheckBoxes: [false, false, false, false],
    dropDownActive: false,
    checkBoxContent: [],
    count: 0,
  },
  reducers: {
    setSelectedMiddleButton: (state, action) => {
      action.payload.action
        ? (state.count = state.count + 1)
        : (state.count = state.count - 1);
      state.middleButtons[action.payload.nth] = action.payload.action;
    },
    setSelectedCheckbox: (state, action) => {
      state.dropDown1CheckBoxes[action.payload.nth] = action.payload.action;
      action.payload.action
        ? (state.count = state.count + 1)
        : (state.count = state.count - 1);
      action.payload.action
        ? (state.checkBoxContent = state.checkBoxContent.concat(
            action.payload.title
          ))
        : (state.checkBoxContent = state.checkBoxContent.splice(
            state.checkBoxContent.indexOf(action.payload.title),
            1
          ));
    },
    setSelectedDropdown: (state, action) => {
      state.dropDownActive = action.payload;
    },
    deleteDropdownContent: (state) => {
      state.count = state.count - state.checkBoxContent.length;
      state.dropDown1CheckBoxes = [false, false, false, false];
      state.checkBoxContent = [];
    },
    setInitialState: (state) => {
      state.middleButtons = [false, false, false, false];
      state.dropDown1CheckBoxes = [false, false, false, false];
      state.dropDownActive = false;
      state.checkBoxContent = [];
      state.count = 0;
    },
  },
});

export const {
  setSelectedMiddleButton,
  setSelectedCheckbox,
  setSelectedDropdown,
  deleteDropdownContent,
  setInitialState,
} = buttonsSlice.actions;

export default buttonsSlice.reducer;
