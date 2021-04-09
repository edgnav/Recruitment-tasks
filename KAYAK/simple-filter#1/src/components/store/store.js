import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import buttonsReducer from '../singleButtons/ButtonsSlice';

export default configureStore({
  reducer: {
    buttonsReducer: buttonsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
