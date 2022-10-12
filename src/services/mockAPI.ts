// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

// Define a service using a base URL and expected endpoints
export const mockApi = createApi({
  reducerPath: 'mockApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://634009f5e44b83bc73c76aac.mockapi.io/',
  }),
  tagTypes: ['Todo'],
  endpoints: builder => ({
    getAllTodos: builder.query<Todo[], void>({
      query: () => 'todos',
      providesTags: ['Todo'],
    }),
    addTodo: builder.mutation<Todo, Partial<Todo>>({
      query: body => ({
        url: 'todos',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Todo'],
    }),
    updateTodo: builder.mutation<Todo, Partial<Todo>>({
      query: body => ({
        url: `todos/${body.id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Todo'],
    }),
    deleteTodo: builder.mutation<Todo, number>({
      query(id) {
        return {
          url: `todos/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Todo'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = mockApi;
