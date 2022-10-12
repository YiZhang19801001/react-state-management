import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import { mockApi } from '../../services/mockAPI';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [mockApi.reducerPath]: mockApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(mockApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
