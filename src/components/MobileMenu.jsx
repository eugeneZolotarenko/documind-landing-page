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
				className="relative ml-2 flex size-[34px] items-center justify-center rounded-md border border-greyscale-200 shadow-xs md:hidden"
			>
				{/* <img src="/burger-icon.svg" alt="icon" /> */}
				<span
					className={`absolute left-1/2 top-[10px] flex h-[2px] w-4 -translate-x-1/2 bg-black transition-transform ${isOpen && 'translate-y-[5px] rotate-45'} `}
				></span>
				<span
					className={`absolute left-1/2 top-1/2 flex h-[2px] w-4 -translate-x-1/2 -translate-y-1/2 bg-black transition-transform ${isOpen && 'opacity-0'}`}
				></span>
				<span
					className={`absolute bottom-[10px] left-1/2 flex h-[2px] w-4 -translate-x-1/2 bg-black transition-transform ${isOpen && '-translate-y-[5px] -rotate-45'}`}
				></span>
			</button>

			{/* <button className="group relative z-20 block h-3 w-4 md:hidden">
				<span className="absolute left-0 top-0 flex h-px w-4 bg-black transition-transform group-[.active]:translate-y-2 group-[.active]:rotate-45 group-[.active]:bg-white"></span>
				<span className="absolute left-0 top-1/2 flex h-px w-4 -translate-y-1/2 translate-x-0 bg-black transition-transform group-[.active]:opacity-0"></span>
				<span className="absolute bottom-0 left-0 flex h-px w-4 bg-black transition-transform group-[.active]:-translate-y-[10px] group-[.active]:-rotate-45 group-[.active]:bg-white"></span>
			</button> */}

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
