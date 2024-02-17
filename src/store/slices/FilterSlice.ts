import { createSlice } from '@reduxjs/toolkit';

interface IFilter {
  filter: boolean;
}

const initialState: IFilter = {
  filter: false
};

export const FilterSlice = createSlice({
  name: 'FilterSlice',
  initialState,
  reducers: {
    setFilter(state: IFilter, action) {
      state.filter = action.payload;
    }
  }
});

export const { setFilter } = FilterSlice.actions;

export default FilterSlice.reducer;
