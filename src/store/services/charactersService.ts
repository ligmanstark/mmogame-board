import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/consts';
import { ricksState } from '../../types/typesState';
export const charactersService = createApi({
  reducerPath: 'charactersService',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => ({
    getCharacter: builder.query<ricksState, number>({
      query: (page) => ({
        url: `?page=${page}`,
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
    })
  })
});

export const { useGetCharacterQuery, useLazyGetCharacterQuery } =
  charactersService;
