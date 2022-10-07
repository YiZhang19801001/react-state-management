import React from 'react'
import {store} from './store'
import {Provider} from 'react-redux'
import Counter from '../../components/Counter'
import Todos from '../../components/Todos'
import type { RootState } from './store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

function Page() {
	// const count = useSelector((state: RootState) => state.counter.value)
  // const dispatch = useDispatch()

	// const handleIncrement = () => dispatch(increment())
	// const handleDecrement = () => dispatch(decrement())

	// return <Counter 
	// 	count={count} 
	// 	handleIncrement={handleIncrement}
	// 	handleDecrement={handleDecrement}
	// />
	return <Todos/>
}

function ReduxToolKit() {
	return (
		<Provider store={store}>
    	<Page />
  	</Provider>
	)
}

export default ReduxToolKit