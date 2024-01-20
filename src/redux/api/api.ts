import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://todo-app-server-bay.vercel.app',
  }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getTodosFromServer: builder.query({
      query: () => {
        return {
          url: '/todos',
          method: 'GET',
        };
      },
      providesTags: ['Todo'],
    }),
    addTodoInServer: builder.mutation({
      query: (todo) => {
        return {
          url: '/todos',
          method: 'POST',
          body: todo,
        };
      },
      invalidatesTags: ['Todo'],
    }),
    updateATodoInServer: builder.mutation({
      query: (options) => {
        const { id, ...rest } = options;
        return {
          url: `/todos/${id}`,
          method: 'PUT',
          body: rest,
        };
      },
      invalidatesTags: ['Todo'],
    }),
    deleteATodoFromServer: builder.mutation({
      query: (todo) => {
        return {
          url: `/todos/${todo?.id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const {
  useGetTodosFromServerQuery,
  useAddTodoInServerMutation,
  useUpdateATodoInServerMutation,
  useDeleteATodoFromServerMutation,
} = baseApi;
