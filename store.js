import { configureStore } from '@reduxjs/toolkit'

import listReducer from './features/list/listSlice';
import formReducer from './features/form/formSlice';

export const store = configureStore({
  reducer: {
    list: listReducer,
    form: formReducer,
  },
});