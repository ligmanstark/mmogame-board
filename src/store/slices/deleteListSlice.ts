import { createSlice } from '@reduxjs/toolkit';
import { characters } from '@/types/typesState';

const initialState: characters = {
  characters: []
};

export const deleteListSlice = createSlice({
  name: 'deleteListSlice',
  initialState,
  reducers: {
    addDeleteList(state: characters, action) {
      state.characters.push(action.payload);
    }
  }
});

export const { addDeleteList } = deleteListSlice.actions;

export default deleteListSlice.reducer;
