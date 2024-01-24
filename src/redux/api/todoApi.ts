import { baseApi } from './baseApi';

const todoApi = baseApi.injectEndpoints({
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
    getTodosForASpecificUserFromServer: builder.query({
      query: (email) => {
        return {
          url: `/todos/${email}`,
          method: 'GET',
        };
      },
      providesTags: ['Todo'],
    }),
    addTodoInServer: builder.mutation({
      query: (todo) => {
        console.log(todo);

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
  useGetTodosForASpecificUserFromServerQuery,
  useAddTodoInServerMutation,
  useUpdateATodoInServerMutation,
  useDeleteATodoFromServerMutation,
} = todoApi;
