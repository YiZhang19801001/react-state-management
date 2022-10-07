import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import {jsonPlaceholderApi} from '../../services/jsonPlaceholder'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [jsonPlaceholderApi.reducerPath]:jsonPlaceholderApi.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch