import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IGetMoviesByField, IGetMoviesById } from '../types/films'

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
    getTopRating: builder.query<IGetMoviesByField, number>({
      query: (page = 1) =>
        `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`,
    }),
    getById: builder.query<IGetMoviesById, string>({
      query: (id = '') =>
        `/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`,
    }),
  }),
})

export const {
  useGetPopularQuery,
  useGetTopRatingQuery,
  useLazyGetPopularQuery,
  useGetByIdQuery,
} = movieApi
