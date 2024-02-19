import { createSlice } from '@reduxjs/toolkit';
import { characters } from '../../types/typesState';

const initialState: characters = {
  characters: [],
  deleteChar: []
};

export const charactersSlice = createSlice({
  name: 'charactersSlice',
  initialState,
  reducers: {
    setCharacters(state: characters, action) {
      state.characters = action.payload;
    },
    deleteCharacters(state: characters, action) {
      state.characters = action.payload;
    },
    addDeleteList(state: characters, action) {
      state.deleteChar.push(action.payload);
    }
  }
});

export const { setCharacters, deleteCharacters, addDeleteList } =
  charactersSlice.actions;
export default charactersSlice.reducer;
