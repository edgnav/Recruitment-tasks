import { createSlice } from '@reduxjs/toolkit';

export const buttonsSlice = createSlice({
  name: 'buttons',
  initialState: {
    middleButtons: [false, false, false, false],
    dropDown1CheckBoxes: [false, false, false, false],
    dropDownActive: false,
    checkBoxContent: [],
  },
  reducers: {
    setSelectedAllButton: (state, action) => {
      state.allButton = action.payload;
      state.middleButtons = [false, false, false, false];
      state.dropDown1CheckBoxes = [false, false, false, false];
      state.checkBoxContent = [];
    },
    setSelectedMiddleButton: (state, action) => {
      state.middleButtons[action.payload.nth] = action.payload.action;
    },
    setSelectedCheckbox: (state, action) => {
      state.dropDown1CheckBoxes[action.payload.nth] = action.payload.action;
      action.payload.action
        ? (state.checkBoxContent = state.checkBoxContent.concat(
            action.payload.title
          ))
        : state.checkBoxContent.splice(
            state.checkBoxContent.indexOf(action.payload.title),
            1
          );
    },
    setSelectedDropdown: (state, action) => {
      state.dropDownActive = action.payload;
    },
    deleteDropdownContent: (state) => {
      state.dropDown1CheckBoxes = [false, false, false, false];
      state.checkBoxContent = [];
    },
  },
});

export const {
  setSelectedAllButton,
  setSelectedMiddleButton,
  setSelectedCheckbox,
  setSelectedDropdown,
  deleteDropdownContent,
} = buttonsSlice.actions;

export default buttonsSlice.reducer;
