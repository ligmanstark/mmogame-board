import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './slices/charactersSlice';
import { charactersService } from './services/charactersService';
import { selectCharService } from './services/selectCharService';
import infoReducer from '../store/slices/infoSlice';
import pageReducer from '../store/slices/pageSlice';
import favoritesReducer from './slices/favoritesSlice';
import filterReducer from './slices/FilterSlice';
import selectCharReducer from './slices/selectCharSlice';
export const store = configureStore({
  reducer: {
    [charactersService.reducerPath]: charactersService.reducer,
    [selectCharService.reducerPath]: selectCharService.reducer,
    charactersReducer: charactersReducer,
    infoReducer: infoReducer,
    pageReducer: pageReducer,
    favoritesReducer: favoritesReducer,
    filterReducer: filterReducer,
    selectCharReducer: selectCharReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      charactersService.middleware,
      selectCharService.middleware
    )
});

export type RootState = ReturnType<typeof store.getState>;
