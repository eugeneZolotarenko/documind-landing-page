import React, { useState } from 'react'

export const MENU_LINKS_DATA = [
	{
		title: 'Products',
		href: '/roducts',
	},
	{
		title: 'AI Tools',
		href: '/ai-tools',
	},
	{
		title: 'Pricing',
		href: '/pricing',
	},
	{
		title: 'Blog',
		href: '/blog',
	},
]

const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="ml-2 flex size-[34px] items-center justify-center rounded-md border border-greyscale-200 shadow-xs md:hidden"
			>
				<img src="/burger-icon.svg" alt="icon" />
			</button>

			<div className="absolute left-0 top-full -z-10 -mt-5 h-auto w-full rounded-bl-2xl rounded-br-2xl rounded-tl-none rounded-tr-none border-t-0 bg-white">
				<div
					className={`-z-10 grid overflow-hidden border border-transparent transition-[grid-rows-[1fr]] ${isOpen ? 'grid-rows-[1fr] !border-greyscale-100 !border-t-transparent pt-2 opacity-100' : 'grid-rows-[0fr] opacity-0'} `}
				>
					<div className="overflow-hidden text-base font-medium tracking-[-0.32px] text-greyscale-500 md:text-lg">
						<nav className="flex-1 items-center justify-center">
							<ul className="flex flex-col gap-6 p-6">
								{MENU_LINKS_DATA.map((link, idx) => (
									<li key={idx} className="text-center">
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
					</div>
				</div>
			</div>
		</div>
	)
}

export default MobileMenu
