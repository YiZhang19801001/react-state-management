import React from 'react'
import store from './store'
import { Provider } from 'react-redux';


function Redux() {
	return (
		<Provider store={store}>
			<div>Redux</div>
		</Provider>
	)
}

export default Redux