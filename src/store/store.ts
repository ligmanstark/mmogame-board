import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './slices/charactersSlice';
import { charactersService } from './services/charactersService';
import { selectCharService } from './services/selectCharService';
 
export const store = configureStore({
  reducer: {
    [charactersService.reducerPath]: charactersService.reducer,
    [selectCharService.reducerPath]: selectCharService.reducer,
    charactersReducer: charactersReducer,
   },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      charactersService.middleware,
      selectCharService.middleware
    )
});

export type RootState = ReturnType<typeof store.getState>;
