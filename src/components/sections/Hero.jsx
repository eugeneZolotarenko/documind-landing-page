import React from 'react'
import Button from '../Button'

const Hero = () => {
	const heroImages = {
		lightblue: {
			mobile: '/hero-lightblue-mob.png',
			desktop: '/hero-lightblue.png',
		},
		blue: {
			mobile: '/blue-mob.png',
			desktop: '/blue.png',
		},
	}
	return (
		<section className="py-0">
			<div className="container">
				{/* LightBlue */}
				{/* <picture className="-z-10">
					<source
						media="(max-width: 768px)"
						srcSet={heroImages.lightblue.mobile}
					/>
					<source
						media="(min-width: 769px)"
						srcSet={heroImages.lightblue.desktop}
					/>
					<img src={heroImages.lightblue.desktop} alt="hero image" />
				</picture> */}

				{/* Blue */}
				<picture className="-z-10 flex justify-center lg:mb-20">
					<source media="(max-width: 768px)" srcSet={heroImages.blue.mobile} />
					<source media="(min-width: 769px)" srcSet={heroImages.blue.desktop} />
					<img src={heroImages.blue.desktop} alt="hero image" />
				</picture>

				<div className="relative after:absolute after:left-1/2 after:top-1/2 after:-z-10 after:h-full after:w-full after:-translate-x-1/2 after:-translate-y-1/2 after:bg-[#4e46dc]/[0.08] after:blur-[125px] lg:-mt-[135px]">
					<div className="mx-auto max-w-[650px]">
						<h1 className="text-center text-[40px] font-semibold leading-snug tracking-[-1.2px] text-greyscale-950 lg:text-[68px]">
							Extract insights from
							<span className="text-primary-600"> your PDF&nbsp;data</span>
						</h1>
						<p className="mt-2 text-balance text-center lg:mt-4">
							Join thousands of professionals using GPT4 to understand and
							answer questions from vast amount of PDF data
						</p>
						<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
							<a href="/">
								<Button
									type="gradient"
									className="w-full max-w-full sm:max-w-fit"
								>
									<span className="flex shrink-0">Get Started - Free</span>
								</Button>
							</a>
							<a href="/">
								<Button
									type="outline"
									className="w-full max-w-full sm:max-w-fit"
								>
									<span className="flex shrink-0">Upload Your PDF</span>
								</Button>
							</a>
						</div>
					</div>

					<img
						className="absolute -bottom-4 left-[112px] hidden lg:block"
						src="/hero-left-icon.png"
						alt="icon"
					/>
					<img
						className="absolute -bottom-4 right-0 hidden lg:block"
						src="/hero-right-icon.png"
						alt="icon"
					/>
				</div>

				<div className="mx-auto mt-6 flex max-w-fit gap-3 md:my-8">
					<img className="w-20" src="/avatars.png" alt="avatars" />
					<div className="space-y-[2px]">
						<img src="/stars.svg" alt="stars" />
						<p className="text-xs text-greyscale-950">Loved by 63,577 users</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
