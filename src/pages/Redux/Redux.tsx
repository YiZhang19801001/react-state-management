import React, { useEffect } from 'react';
import _sortBy from 'lodash/sortBy';
import store from './store';
import {
  loadTodos,
  stateType,
  addTodo,
  updateTodo,
  deleteTodo,
  Todo,
} from './reducer';
import Todos from '../../components/Todos';
import { Provider, useSelector, useDispatch } from 'react-redux';

function Page() {
  const { todos, isLoading } = useSelector((state: stateType) => state);
  const dispatch: typeof store.dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  const error = undefined;

  const addTask = (title: string) => {
    dispatch(addTodo(title));
  };

  const updateTask = (todo: Todo) => {
    dispatch(updateTodo(todo));
  };

  const deleteTask = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="page">
      <Todos
        data={_sortBy(todos, ['completed'])}
        error={error}
        isLoading={isLoading}
        addTask={addTask}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

function Redux() {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
}

export default Redux;
