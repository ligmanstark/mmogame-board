import { createSlice } from '@reduxjs/toolkit';
import { characters } from '@/types/typesState';

const initialState: characters = {
  characters: []
};

export const selectCharSlice = createSlice({
  name: 'selectCharSlice',
  initialState,
  reducers: {
    setSelectChar(state: characters, action) {
      state.characters = action.payload;
    },
    deleteSelectChar(state: characters) {
      state.characters = [];
    }
  }
});

export const { setSelectChar, deleteSelectChar } = selectCharSlice.actions;
export default selectCharSlice.reducer;
