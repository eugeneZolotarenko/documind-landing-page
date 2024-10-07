import React from 'react'

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<hr className="h-px w-full border border-greyscale-200" />
				<div className="my-6 grid grid-cols-2 justify-between md:flex lg:my-14">
					<div className="flex-0 space-y-[10px]">
						<a href="/">
							<img
								className="max-w-[106px] lg:max-w-[136px]"
								src="/logo.svg"
								alt="logo"
							/>
						</a>

						<ul className="flex gap-3">
							<li className="flex size-8 items-center justify-center lg:size-10">
								<a
									href="/"
									className="flex rounded-lg bg-white p-[7px] hover:bg-greyscale-100"
								>
									<img src="/twitter.svg" alt="twitter icon" />
								</a>
							</li>
							<li className="flex size-8 items-center justify-center lg:size-10">
								<a
									href="/"
									className="flex rounded-lg bg-white p-[7px] hover:bg-greyscale-100"
								>
									<img src="/discord.svg" alt="discord icon" />
								</a>
							</li>
						</ul>
					</div>

					<ul className="order-3 col-span-2 flex flex-col items-center gap-3 md:-order-none md:flex-1 md:flex-row md:justify-center lg:gap-10">
						<li>
							<a
								className="text-sm font-semibold tracking-[-0.28px] text-greyscale-950 underline-offset-4 hover:underline"
								href="/"
							>
								API Docs
							</a>
						</li>
						<li>
							<a
								className="text-sm font-semibold tracking-[-0.28px] text-greyscale-950 underline-offset-4 hover:underline"
								href="/"
							>
								Privacy Policy
							</a>
						</li>
						<li>
							<a
								className="text-sm font-semibold tracking-[-0.28px] text-greyscale-950 underline-offset-4 hover:underline"
								href="/"
							>
								Terms & Conditions
							</a>
						</li>
						<li>
							<a
								className="text-sm font-semibold tracking-[-0.28px] text-greyscale-950 underline-offset-4 hover:underline"
								href="/"
							>
								Become an Affiliate
							</a>
						</li>
					</ul>

					<a href="/" className="ml-auto">
						<img className="lg:w-[148px]" src="/google.svg" alt="google logo" />
					</a>
				</div>
				<hr className="h-px w-full border border-greyscale-200" />
			</div>
		</footer>
	)
}

export default Footer
