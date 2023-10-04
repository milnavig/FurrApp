import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  doctors: [],
  filtered_doctors: [],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setList: (state, action) => {
      state.doctors = action.payload;
    },
    setFilteredList: (state, action) => {
      state.filtered_doctors = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setList, setFilteredList } = listSlice.actions;

export default listSlice.reducer;