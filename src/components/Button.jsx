import clsx from 'clsx'
import React from 'react'

const Button = ({ type = 'primary', children, onClick, className }) => {
	const buttonClass = {
		primary: 'btn btn-primary',
		outline: 'btn btn-outline',
		gradient: 'btn btn-gradient',
	}[type]

	return (
		<button className={clsx(buttonClass, className)} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
