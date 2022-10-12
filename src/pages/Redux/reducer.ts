import axios from 'axios'
// import {appDispatch} from './store';

export type Todo = {
	id: number,
	title: string,
	completed: boolean
}

export type stateType = {
	todos: Todo[],
	isLoading: boolean,
	error?: object,
}

export type actionType = {
	type: string,
	payload?: any,
}


const initState = {
	todos: [],
	isLoading: false,
}
type DispatchType = (args: actionType) => actionType

function reducer(state:stateType = initState, action:actionType): stateType{
	switch (action.type) {
		case 'TODOS_LOADED':
      return {...state, todos: action.payload, isLoading: false, error: undefined};

			case 'TODO_LOADING':
				case 'TODO_ADDING':
					case 'TODO_UPDATING':
						case 'TODO_DELETING':
							return {...state, isLoading:true, error: undefined}

							case 'REQUEST_FAILED':
								return {...state, error: action.payload}

		default:
			return state;
	}
}

export function loadTodos() {
	return async (dispatch: DispatchType) => {
		try {
			dispatch({
				type: 'TODO_LOADING'
			})
	
			const response = await axios.get('https://634009f5e44b83bc73c76aac.mockapi.io/todos');
	
			dispatch({
				type: 'TODOS_LOADED',
				payload: response.data
			})
		} catch (error) {
			dispatch({
				type:'REQUEST_FAILED',
				payload: error
			})
		}
	}
}

export function addTodo(todo:Todo) {
	return async (dispatch: DispatchType) => {
		try {
			dispatch({
				type: 'TODO_ADDING'
			})
	
			await axios.post('https://634009f5e44b83bc73c76aac.mockapi.io/todos',{
				...todo
			})
	
			const response = await axios.get('https://634009f5e44b83bc73c76aac.mockapi.io/todos');
	
			dispatch({
				type: 'TODOS_LOADED',
				payload: response.data
			})
		} catch (error) {
			dispatch({
				type: 'REQUEST_FAILED',
				payload: error
			})
		}
	}
}

export function updateTodo(todo:Todo) {
	return async (dispatch: DispatchType) => {
		dispatch({
			type: 'TODO_ADDING'
		})

		try {
			await axios.put(`https://634009f5e44b83bc73c76aac.mockapi.io/todos/${todo.id}`,{
			...todo
		})

		const response = await axios.get('https://634009f5e44b83bc73c76aac.mockapi.io/todos');
	
		dispatch({
			type: 'TODOS_LOADED',
			payload: response.data
		})
		} catch (error) {
			dispatch({
				type: 'REQUEST_FAILED',
				payload: error
			})
		}
	}
}

export function deleteTodo(id:number) {
	return async (dispatch: DispatchType) => {
		try {
			dispatch({
				type: 'TODO_ADDING'
			})
	
			await axios.delete(`https://634009f5e44b83bc73c76aac.mockapi.io/todos/${id}`)
	
			const response = await axios.get('https://634009f5e44b83bc73c76aac.mockapi.io/todos');
	
			dispatch({
				type: 'TODOS_LOADED',
				payload: response.data
			})
		} catch (error) {
			dispatch({
				type: 'REQUEST_FAILED',
				payload: error
			})
		}
	}
}

export default reducer;