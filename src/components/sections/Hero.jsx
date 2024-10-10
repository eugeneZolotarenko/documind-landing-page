import React from 'react'
import LinkButton from '../LinkButton'
import { motion } from 'framer-motion'
const Hero = () => {
	const heroImages = {
		lightblue: {
			mobile: '/hero-lightblue-mob.webp',
			desktop: '/hero-lightblue.webp',
		},
		blue: {
			mobile: '/blue-mob.webp',
			desktop: '/blue.webp',
		},
	}
	return (
		<section className="overflow-hidden pt-0 lg:py-[72px]">
			<div className="container">
				<motion.div
					initial={{
						opacity: 0,
						scale: 0.95,
					}}
					whileInView={{
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 0.5,
					}}
					viewport={{ once: true }}
				>
					{/* LightBlue */}
					{/* <div className="relative w-full after:absolute after:left-0 after:top-[144px] after:-z-0 after:h-[258px] after:w-full after:bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,#FFF_100%)]">
					<picture className="-z-10">
						<source
							media="(max-width: 768px)"
							srcSet={heroImages.lightblue.mobile}
						/>
						<source
							media="(min-width: 769px)"
							srcSet={heroImages.lightblue.desktop}
						/>
						<img src={heroImages.lightblue.desktop} alt="hero image" />
					</picture>
				</div> */}

					{/* Blue */}
					<div className="relative w-full after:absolute after:left-0 after:top-[144px] after:-z-0 after:h-[258px] after:w-full after:bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,#FFF_100%)]">
						<picture className="-z-10 flex justify-center lg:mb-20">
							<source
								media="(max-width: 768px)"
								srcSet={heroImages.blue.mobile}
							/>
							<source
								media="(min-width: 769px)"
								srcSet={heroImages.blue.desktop}
							/>
							<img src={heroImages.blue.desktop} alt="hero image" />
						</picture>
					</div>
				</motion.div>

				<motion.div
					initial={{
						opacity: 0,
						y: 50,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
					}}
					viewport={{ once: true }}
					transition={{
						duration: 0.5,
					}}
					className="relative z-10 after:absolute after:bottom-[53px] after:left-[72px] after:-z-10 after:h-[224px] after:w-[1055px] after:rounded-[1055px] after:bg-[#4e46dc]/[0.08] after:blur-[125px] lg:-mt-[135px]"
				>
					<div className="mx-auto max-w-[650px]">
						<h1 className="text-center text-[40px] font-semibold leading-[1.2] tracking-[-1.2px] text-greyscale-950 lg:text-[68px] lg:leading-[1.2]">
							Extract insights from
							<span className="text-primary-600"> your PDF&nbsp;data</span>
						</h1>
						<p className="mt-2 text-balance text-center lg:mt-4">
							Join thousands of professionals using GPT4 to understand and
							answer questions from vast amount of PDF data
						</p>
						<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
							<LinkButton
								href={'/'}
								type="gradient"
								className="w-full max-w-full py-3 sm:max-w-fit"
							>
								<span className="flex shrink-0">Get Started - Free</span>
							</LinkButton>

							<LinkButton
								href={'/'}
								type="outline"
								className="w-full max-w-full py-3 sm:max-w-fit"
							>
								<span className="flex shrink-0">Upload Your PDF</span>
							</LinkButton>
						</div>
					</div>
					<img
						className="absolute -bottom-4 left-[112px] hidden lg:block"
						src="/hero-left-icon.webp"
						alt="icon"
					/>
					<img
						className="absolute -bottom-4 right-0 hidden lg:block"
						src="/hero-right-icon.webp"
						alt="icon"
					/>
				</motion.div>

				<div className="mx-auto mt-6 flex max-w-fit gap-3 md:my-8">
					<img className="w-20" src="/avatars.webp" alt="avatars" />
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
