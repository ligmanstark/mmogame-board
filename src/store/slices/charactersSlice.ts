import { createSlice } from '@reduxjs/toolkit';
import { characters } from '../../types/typesState';

const initialState: characters = {
  allChar: [],
  deleteChar: [],
  favoriteChar: [],
  selectChar: [],
  filter: false,
  page: 1,
  count: 0,
  next: null,
  pages: 0,
  prev: null
};

export const charactersSlice = createSlice({
  name: 'charactersSlice',
  initialState,
  reducers: {
    setCharacters(state: characters, action) {
      state.allChar = action.payload;
    },
    deleteCharacters(state: characters, action) {
      state.allChar = action.payload;
    },
    addDeleteList(state: characters, action) {
      state.deleteChar.push(action.payload);
    },
    setFavorites(state: characters, action) {
      state.favoriteChar.push(action.payload);
    },
    deleteFavorites(state: characters, action) {
      state.favoriteChar = action.payload;
    },
    setSelectChar(state: characters, action) {
      state.selectChar = action.payload;
    },
    deleteSelectChar(state: characters) {
      state.selectChar = [];
    },

    setPage(state: characters, action) {
      state.page = action.payload;
    },
    setFilter(state: characters, action) {
      state.filter = action.payload;
    },
    setInfo(state: characters, action) {
      state.count = action.payload.info?.count;
      state.next = action.payload.info?.next;
      state.prev = action.payload.info?.prev;
      state.pages = action.payload.info?.pages;
    }
  }
});

export const {
  setCharacters,
  deleteCharacters,
  addDeleteList,
  setFavorites,
  deleteFavorites,
  setFilter,
  setPage,
  setInfo,
  deleteSelectChar,
  setSelectChar
} = charactersSlice.actions;
export default charactersSlice.reducer;
