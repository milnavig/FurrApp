import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  purpose: null,
  animal: null,
  location: null,
  date: (new Date()).toISOString().split('T')[0],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setPurpose: (state, action) => {
      state.purpose = action.payload;
    },
    setAnimal: (state, action) => {
      state.animal = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPurpose, setAnimal, setLocation, setDate } = formSlice.actions;

export default formSlice.reducer;