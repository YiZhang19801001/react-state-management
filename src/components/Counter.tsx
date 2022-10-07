import React, {MouseEventHandler} from 'react'

type CounterProps = {
	count: number,
	handleIncrement: MouseEventHandler<HTMLButtonElement>,
	handleDecrement: MouseEventHandler<HTMLButtonElement>,
}

function Counter({count,handleDecrement,handleIncrement}: CounterProps) {
	return (
		<div className='page'>
			<div>
				<button
					aria-label="Increment value"
					onClick={handleIncrement}
				>
					Increment
				</button>
				<span>{count}</span>
				<button
					aria-label="Decrement value"
					onClick={handleDecrement}
				>
					Decrement
				</button>
			</div>
		</div>
	)
}

export default Counter