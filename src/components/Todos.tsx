import React, {useReducer, useEffect} from 'react'
import type {Todo} from '../services/jsonPlaceholder'
import './Todos.css';

type TodoProps = {
	error?: object,
	isLoading: boolean,
	data?: Todo[],
	onChange?: Function,
}

const Error = ({error}:{error:object}) => <span>{JSON.stringify(error)}</span>

const Loader = () => <div>Loading...</div>

const initState = {
	list: []
}

type Action =
 | { type: 'set-list',payload: Todo[] }
 | { type: 'check-by-id', payload: number }
 | { type: 'reset' };

const reducer = (state:any, action: Action) => {
	if(!action) return state;
	switch (action.type) {
		case 'set-list':
			
			return {
				...state,
				list: action.payload
			};
			case 'check-by-id':
				return {
					...state,
					list: state.list.map((ele:Todo)=>{
						if(ele.id===action.payload) return {...ele, completed: !ele.completed}

						return ele;
					})
				}
	case 'reset':
		return initState;
		default:
			return state;
	}
}

const TodoList = ({data,onChange}:{data:Todo[],onChange?:Function}) => {
	const [state,dispatch] = useReducer<React.Reducer<any, any>>(reducer, initState)

	const {list} = state;

	useEffect(()=>{
		dispatch({type:'set-list',payload:data})
	},[]);

	const checkTaskById = (taskId:number) => {
		dispatch({type:'check-by-id',payload:taskId});
	}

	return <div className="todo-list">
		{list.map(({id, completed, title}:Todo)=>(
				<label key={id} htmlFor={`todo-item-${id}`}>
					<input
						type="checkbox"
						id={`todo-item-${id}`}
						checked={completed}
						onChange={()=>{checkTaskById(id)}}
					/>
					<i></i>
					<span>{title}</span>
				</label>
		))}
	</div>
}

function Todos({error,isLoading,data, onChange}:TodoProps) {

	if(error) return <Error error={error}/>

	if(isLoading) return <Loader />

	if(data) return <TodoList data={data} onChange={onChange}/>

	return null;
}

export default Todos