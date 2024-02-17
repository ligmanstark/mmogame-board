import { createSlice } from '@reduxjs/toolkit';
import { characters } from '../../types/typesState';

const initialState: characters = {
  characters: []
};

export const favoritesSlice = createSlice({
  name: 'favoritesSlice',
  initialState,
  reducers: {
    setFavorites(state: characters, action) {
      state.characters.push(action.payload);
     },
    deleteFavorites(state: characters, action) {
      state.characters = action.payload;
    }
  }
});

export const { setFavorites, deleteFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
