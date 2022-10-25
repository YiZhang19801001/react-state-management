import { atom } from 'jotai';
import axios from 'axios';
import { atomWithQuery } from 'jotai/query';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

// Atoms
export const todosAtom = atomWithQuery(get => ({
  queryKey: ['todos'],
  queryFn: async ({ queryKey: [] }) => {
    const res = await axios.get(
      'https://634009f5e44b83bc73c76aac.mockapi.io/todos'
    );
    return res.data;
  },
}));

export const toggleTodoAtom = atom(
  () => '',
  async (get, set, todo: Todo) => {
    await axios.put(
      `https://634009f5e44b83bc73c76aac.mockapi.io/todos/${todo.id}`,
      {
        ...todo,
      }
    );
    set(todosAtom, { type: 'refetch' });
  }
);

export const updateTodoAtom = atom(
  () => '',
  async (get, set, todo: Todo) => {
    await axios.put(
      `https://634009f5e44b83bc73c76aac.mockapi.io/todos/${todo.id}`,
      {
        ...todo,
      }
    );
    set(todosAtom, { type: 'refetch' });
  }
);

export const removeTodoAtom = atom(
  () => '',
  async (get, set, id: number) => {
    await axios.delete(
      `https://634009f5e44b83bc73c76aac.mockapi.io/todos/${id}`
    );
    set(todosAtom, { type: 'refetch' });
  }
);

export const addTodoAtom = atom(null, async (get, set, title: string) => {
  await axios.post('https://634009f5e44b83bc73c76aac.mockapi.io/todos', {
    title,
  });

  set(todosAtom, { type: 'refetch' });
});
