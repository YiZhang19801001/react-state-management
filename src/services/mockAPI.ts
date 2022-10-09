// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export type Todo = {
	id: number,
	title: string,
	completed: boolean,
}

// Define a service using a base URL and expected endpoints
export const mockApi = createApi({
  reducerPath: 'mockApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://634009f5e44b83bc73c76aac.mockapi.io/' }),
  endpoints: (builder) => ({
    getAllTodos: builder.query<Todo[], void>({
      query: () => 'todos',
    }),
    addTodo: builder.mutation<Todo, Partial<Todo>>({
      query: (body) => ({
        url: 'todos',
        method: 'POST',
        body,
      }),
      // invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllTodosQuery, useAddTodoMutation } = mockApi