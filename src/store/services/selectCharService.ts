import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { characters } from '@/types/typesState';
import { BASE_URL } from '@/utils/consts';
export const selectCharService = createApi({
  reducerPath: 'selectCharService',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => ({
    getSelectChar: builder.query<characters, string>({
      query: (charId) => ({
        url: `/${charId}`,
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
    })
  })
});

export const { useLazyGetSelectCharQuery } = selectCharService;
