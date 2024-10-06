import React from 'react'
import Menu from './Menu'

const Header = () => {
	return (
		<header className="sticky left-0 top-4 z-10 bg-white">
			<div className="container">
				<div className="mx-auto my-4 flex max-w-[900px] items-center justify-between rounded-xl border border-greyscale-100 p-3">
					<a href="/">
						<img
							className="max-w-[106px] sm:max-w-[145px]"
							src="/logo.svg"
							alt="logo"
						/>
					</a>
					{/* Desktop Menu */}
					<Menu />

					<a href="/" className="btn btn-primary ml-auto">
						Start Free
					</a>

					{/* Mobile Menu */}
					<button className="ml-2 flex size-[34px] items-center justify-center rounded-md border border-greyscale-200 shadow-xs md:hidden">
						<img src="/burger-icon.svg" alt="icon" />
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
