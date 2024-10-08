import React from 'react'
import Menu from './Menu'
import MobileMenu from './MobileMenu'
import Button from './Button'

const Header = () => {
	return (
		<header className="sticky left-0 top-4 z-20">
			<div className="container">
				<div className="relative z-20 mx-auto my-4 flex max-w-[900px] items-center justify-between rounded-xl border border-greyscale-100 bg-white p-3">
					{/* Logo */}
					<a href="/">
						<img
							className="max-w-[106px] md:max-w-[145px]"
							src="/logo.svg"
							alt="logo"
						/>
					</a>
					{/* Desktop Menu */}
					<Menu />

					{/* CTA */}
					<div className="ml-auto flex gap-2">
						<Button type="outline" className="hidden sm:flex">
							Login
						</Button>
						<Button type={'gradient'}>Start Free</Button>
					</div>

					{/* Mobile Menu */}
					<MobileMenu />
				</div>
			</div>
		</header>
	)
}

export default Header
