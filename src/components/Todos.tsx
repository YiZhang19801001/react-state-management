import React, {useState} from 'react'
import type {Todo} from '../services/jsonPlaceholder'
import './Todos.css';

type TodoProps = {
	error?: object,
	isLoading: boolean,
	data?: Todo[],
	addTask?: Function,
	updateTask?: Function,
	deleteTask?:Function,
}

const Error = ({error}:{error:object}) => <span>{JSON.stringify(error)}</span>

const Loader = () => <div>Loading...</div>

const TodoList = ({data,toggleTask,deleteTask}:{data:Todo[],toggleTask?:Function,deleteTask?:Function}) => {
	const checkTaskById = (taskId:number) => {
		if(typeof toggleTask === 'function') toggleTask(taskId)
	}

	return <div className="todo-list">
		{data.map(({id, completed, title}:Todo)=>(
			<div key={id} className="todo-item">
				<label htmlFor={`todo-item-${id}`}>
					<input
						type="checkbox"
						id={`todo-item-${id}`}
						checked={completed}
						onChange={()=>{checkTaskById(id)}}
					/>
					<i></i>
					<span>{title}</span>
				</label>
				<button onClick={e=>{
					e.preventDefault();
					if(typeof deleteTask === 'function') deleteTask(id)
				}}>delete</button>
			</div>
		))}
	</div>
}

function Todos({error,isLoading,data, addTask, updateTask, deleteTask}:TodoProps) {

	const [newTaskTitle, setNewTaskTitle] = useState('')

	if(error) return <Error error={error}/>

	if(isLoading) return <Loader />

	const handleOnKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
		if(e.key==='Enter' && typeof addTask === 'function') {
			addTask(newTaskTitle);
		}
	}

	const toggleTask = (id:number) => {
		const matchedTodo = data?.find(ele=>ele.id===id)
		if(matchedTodo && typeof updateTask === 'function') updateTask({id, completed: !matchedTodo.completed})
	}

	if(data) return (
		<>
			<input 
				placeholder="Add new tasks..." 
				type="text" 
				value={newTaskTitle} 
				onChange={(e)=>setNewTaskTitle(e.target.value)}
				onKeyDown={handleOnKeyDown}
			/>
			<TodoList data={data} toggleTask={toggleTask} deleteTask={deleteTask}/>
		</>
	)

	return null;
}

export default Todos