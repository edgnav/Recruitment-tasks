import { createSlice } from '@reduxjs/toolkit';

export const buttonsSlice = createSlice({
  name: 'buttons',
  initialState: {
    allButton: 0,
    middleButtons: [0, 0, 0, 0, 0],
    dropDown1CheckBoxes: [0, 0, 0, 0],
  },
  reducers: {
    setSelectedAllButton: (state, action) => {
      state.allButton = action.payload;
      state.middleButtons = [0, 0, 0, 0, 0];
      state.dropDown1CheckBoxes = [0, 0, 0, 0];
    },
    setSelectedMiddleButton: (state, action) => {
      state.middleButtons[action.payload.nth] = action.payload.action;
      state.allButton = 0;
    },
    setSelectedCheckbox: (state, action) => {
      state.dropDown1CheckBoxes[action.payload.nth] = action.payload.action;
      state.allButton = 0;
    },
  },
});

export const {
  setSelectedAllButton,
  setSelectedMiddleButton,
  setSelectedCheckbox,
} = buttonsSlice.actions;

export default buttonsSlice.reducer;