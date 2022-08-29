import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IGetMoviesByField } from '../types/films'

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints: builder => ({
    getPopular: builder.query<IGetMoviesByField, number>({
      query: (page = 1) =>
        `/movie/popular?page=${page}&api_key=${process.env.REACT_APP_API_KEY}`,
    }),
    getNewest: builder.query<IGetMoviesByField, number>({
      query: (page = 1) =>
        `/search/movie?api_key=${
          process.env.REACT_APP_API_KEY
        }&query=${'dead'}&page=${page}&include_adult=false`,
    }),
  }),
})

export const { useGetPopularQuery, useGetNewestQuery } = movieApi
