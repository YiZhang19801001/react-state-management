import React from 'react'
import type {Todo} from '../services/jsonPlaceholder'

type TodoProps = {
	error?: object,
	isLoading: boolean,
	data?: Todo[]
}

function Todos({error,isLoading,data}:TodoProps) {

	return (
		<div className='page'>      
		{error ? (
			<>Oh no, there was an error</>
		) : isLoading ? (
			<>Loading...</>
		) : data ? (
			<>
				{data.map(todo =><div key={todo.id}>{todo.id} | {todo.title} | {todo.completed.toString()}</div>)}
			</>
		) : null}</div>
	)
}

export default Todos