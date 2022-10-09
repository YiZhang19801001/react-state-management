import React from 'react'
import {store} from './store'
import {Provider} from 'react-redux'
import Todos from '../../components/Todos'
import { useGetAllTodosQuery } from '../../services/jsonPlaceholder'

function Page() {
	const { data, error, isLoading } = useGetAllTodosQuery('')

	return <Todos data={data} error={error} isLoading={isLoading}/>
}

function ReduxToolKit() {
	return (
		<Provider store={store}>
    	<Page />
  	</Provider>
	)
}

export default ReduxToolKit