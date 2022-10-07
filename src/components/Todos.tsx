import React from 'react'
import { useGetAllTodosQuery } from '../services/jsonPlaceholder'

function Todos() {

	const { data, error, isLoading } = useGetAllTodosQuery('')

	return (
		<div className='page'>      
		{error ? (
			<>Oh no, there was an error</>
		) : isLoading ? (
			<>Loading...</>
		) : data ? (
			<>
				{data.map(todo=><div key={todo.id}>{todo.id} | {todo.title} | {todo.completed.toString()}</div>)}
			</>
		) : null}</div>
	)
}

export default Todos