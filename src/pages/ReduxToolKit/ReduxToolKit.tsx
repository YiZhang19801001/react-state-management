import React from 'react'
import {store} from './store'
import {Provider} from 'react-redux'
import Todos from '../../components/Todos'
import { useGetAllTodosQuery } from '../../services/mockAPI'

function Page() {
	const { data, error, isLoading } = useGetAllTodosQuery()

	return (<div className="page">
		<Todos data={data} error={error} isLoading={isLoading}/>
	</div>)
}

function ReduxToolKit() {
	return (
		<Provider store={store}>
    	<Page />
  	</Provider>
	)
}

export default ReduxToolKit