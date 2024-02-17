import { createSlice } from '@reduxjs/toolkit';

interface pageProps {
  page: number;
}

const initialState: pageProps = {
  page: 1
};

export const pageSlice = createSlice({
  name: 'pageSlice',
  initialState,
  reducers: {
    setPage(state: pageProps, action) {
      state.page = action.payload;
    }
  }
});

export const { setPage } = pageSlice.actions;

export default pageSlice.reducer;
