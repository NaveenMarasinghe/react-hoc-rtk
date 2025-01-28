import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse } from "../types/api.type";

export const dashboardAPI = createApi({
    reducerPath: 'dashboardApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/users' }),
    endpoints: (builder) => ({
        getDashboardData: builder.query<ApiResponse, null>({
            query: () => ({
                url: `/`,
                method: 'GET'
            })
        }),
        saveNotes: builder.mutation<ApiResponse, any>({
            query: (data) => ({
                url: `/challenges/${data.id}`,
                method: 'PUT',
                body: { ...data, note: data.note.note },
            }),
        }),
    })
})

export const {
    useLazyGetDashboardDataQuery
} = dashboardAPI;