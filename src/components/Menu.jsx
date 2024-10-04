import React from 'react'
import { MENU_LINKS_DATA } from '../utils/data'

const Menu = () => {
	const links = MENU_LINKS_DATA
	return (
		<nav className="hidden flex-1 items-center justify-center md:flex">
			<ul className="flex gap-8">
				{links.map((link, idx) => (
					<li key={idx}>
						<a
							href={link.href}
							className="relative text-sm font-medium text-greyscale-950 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:scale-0 after:bg-current after:transition-transform hover:after:scale-100"
						>
							{link.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Menu
