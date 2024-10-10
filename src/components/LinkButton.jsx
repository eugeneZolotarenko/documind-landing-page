import clsx from 'clsx'
import React from 'react'

const LinkButton = ({ type = 'primary', children, className, href }) => {
	const buttonClass = {
		primary: 'btn btn-primary',
		outline: 'btn btn-outline',
		gradient: 'btn btn-gradient',
	}[type]

	return (
		<a href={href} className={clsx(buttonClass, className)}>
			{children}
		</a>
	)
}

export default LinkButton
