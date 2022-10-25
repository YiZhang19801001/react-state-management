import React, { Suspense } from 'react';
import { Provider, useAtom } from 'jotai';
import _sortBy from 'lodash/sortBy';
import Todos from '../../components/Todos';

import {
  addTodoAtom,
  Todo,
  todosAtom,
  updateTodoAtom,
  removeTodoAtom,
  toggleTodoAtom,
} from './store';

const Page = () => {
  const [todos, dispatch] = useAtom(todosAtom);
  const [, addTodo] = useAtom(addTodoAtom);
  const [, removeTodo] = useAtom(removeTodoAtom);
  const [, toggleTodo] = useAtom(toggleTodoAtom);

  const addTask = (title: string) => {
    addTodo(title);
    dispatch({ type: 'refetch' });
  };

  const error = undefined;
  const isLoading = false;
  const updateTask = (newTodo: Todo) => {
    toggleTodo(newTodo);
  };
  const deleteTask = (id: number) => {
    removeTodo(id);
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
};

function Jotai() {
  return (
    <Provider>
      <Suspense fallback={<div className="page">loading...</div>}>
        <Page />
      </Suspense>
    </Provider>
  );
}

export default Jotai;
