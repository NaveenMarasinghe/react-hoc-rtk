import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse } from "../types/api.type";
import { ISaveNoteRequest } from "../types/home.type";

export const homeAPI = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/users",
  }),
  endpoints: (builder) => ({
    getHomeData: builder.query({
      query: (pageId) => ({
        url: `/${pageId}`,
        method: "GET",
      }),
    }),
    saveNote: builder.mutation<ApiResponse, ISaveNoteRequest>({
      query: (data) => ({
        url: "/notes",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetHomeDataQuery, useSaveNoteMutation } = homeAPI;
