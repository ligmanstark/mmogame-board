import { createSlice } from '@reduxjs/toolkit';
import { characters } from '../../types/typesState';

const initialState: characters = {
  characters: []
};

export const charactersSlice = createSlice({
  name: 'charactersSlice',
  initialState,
  reducers: {
    setCharacters(state: characters, action) {
      state.characters = action.payload.results;
    },
    deleteCharacters(state: characters, action) {
      state.characters = action.payload;
    }
  }
});

export const { setCharacters, deleteCharacters } = charactersSlice.actions;
export default charactersSlice.reducer;
