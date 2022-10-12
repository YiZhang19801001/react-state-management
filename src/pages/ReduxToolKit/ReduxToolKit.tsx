import React from 'react';
import _sortBy from 'lodash/sortBy';
import { store } from './store';
import { Provider } from 'react-redux';
import Todos from '../../components/Todos';
import {
  useGetAllTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  Todo,
  useDeleteTodoMutation,
} from '../../services/mockAPI';

function Page() {
  const { data, error, isLoading } = useGetAllTodosQuery();
  const [addTodo, { isLoading: addingTask }] = useAddTodoMutation();
  const [updateTodo, { isLoading: updatingTask }] = useUpdateTodoMutation();
  const [deleteTodo, { isLoading: deletingTask }] = useDeleteTodoMutation();

  const addTask = async (title: string) => {
    await addTodo({ title });
  };

  const updateTask = async (todo: Todo) => {
    await updateTodo(todo);
  };

  const deleteTask = async (id: number) => {
    await deleteTodo(id);
  };

  if (addingTask || updatingTask || deletingTask)
    return <div className="page">loading...</div>;

  return (
    <div className="page">
      <Todos
        data={_sortBy(data, ['completed'])}
        error={error}
        isLoading={isLoading}
        addTask={addTask}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

function ReduxToolKit() {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
}

export default ReduxToolKit;
