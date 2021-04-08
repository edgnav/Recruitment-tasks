import { createSlice } from '@reduxjs/toolkit';

export const buttonsSlice = createSlice({
  name: 'buttons',
  initialState: {
    allButton: 0,
    middleButtons: [0, 0, 0, 0, 0],
    dropDown1CheckBoxes: [false, false, false, false],
    dropDownActive: false,
    checkBoxContent: [],
  },
  reducers: {
    setSelectedAllButton: (state, action) => {
      state.allButton = action.payload;
      state.middleButtons = [0, 0, 0, 0, 0];
      state.dropDown1CheckBoxes = [0, 0, 0, 0];
      state.checkBoxContent = [];
    },
    setSelectedMiddleButton: (state, action) => {
      state.middleButtons[action.payload.nth] = action.payload.action;
      state.allButton = 0;
    },
    setSelectedCheckbox: (state, action) => {
      console.log(action);
      state.dropDown1CheckBoxes[action.payload.nth] = action.payload.action;
      action.payload.action
        ? (state.checkBoxContent = state.checkBoxContent.concat(
            action.payload.title
          ))
        : state.checkBoxContent.splice(
            state.checkBoxContent.indexOf(action.payload.title),
            1
          );
      state.allButton = 0;
    },
    setSelectedDropdown: (state, action) => {
      state.dropDownActive = action.payload;
    },
    deleteDropdownContent: (state) => {
      state.dropDown1CheckBoxes = [0, 0, 0, 0];
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
