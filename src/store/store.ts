import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './slices/charactersSlice';
import { charactersService } from './services/charactersService';
import infoReducer from '../store/slices/infoSlice';
import pageReducer from '../store/slices/pageSlice';
import favoritesReducer from './slices/favoritesSlice';
import filterReducer from './slices/FilterSlice';
export const store = configureStore({
  reducer: {
    [charactersService.reducerPath]: charactersService.reducer,
    charactersReducer: charactersReducer,
    infoReducer: infoReducer,
    pageReducer: pageReducer,
    favoritesReducer: favoritesReducer,
    filterReducer: filterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersService.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
