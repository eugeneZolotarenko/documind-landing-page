import React from 'react'
import SectionTitle from '../SectionTitle'
import SectionSubtitle from '../SectionSubtitle'
import { motion } from 'framer-motion'
const Statistic = () => {
	return (
		<section>
			<div className="container">
				<div className="flex flex-col items-center gap-4 text-center">
					<SectionSubtitle>We In Numbers</SectionSubtitle>
					<SectionTitle>We help ambitious professionals succeed</SectionTitle>
					<motion.p
						viewport={{ once: true, margin: '-100px' }}
						initial={{
							opacity: 0,
							y: 50,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 0.5,
						}}
					>
						Our results speak for themselves.
					</motion.p>
				</div>
				<motion.div
					viewport={{ once: true, margin: '-300px' }}
					initial={{
						opacity: 0,
					}}
					whileInView={{
						opacity: 1,
					}}
					transition={{
						duration: 0.3,
					}}
					className="mx-auto mt-6 grid max-w-[1040px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-10"
				>
					<div className="group flex flex-col rounded-2xl bg-primary-600 p-4 md:p-6">
						<div className="rounded-tl-2xl rounded-tr-2xl">
							<img src={'statistic-1.webp'} alt="image" />
						</div>
						<h3 className="mt-3 text-2xl font-semibold tracking-[-0.71px] text-white md:mt-6">
							100,000+
						</h3>
						<p className="mt-2 text-balance font-medium text-white">
							Professionals
						</p>
					</div>

					<div className="group flex flex-col rounded-2xl bg-greyscale-10 p-4 md:p-6">
						<div className="rounded-tl-2xl rounded-tr-2xl">
							<img src={'statistic-2.webp'} alt="image" />
						</div>
						<h3 className="mt-3 text-2xl font-semibold tracking-[-0.71px] text-primary-600 md:mt-6">
							500,000+
						</h3>
						<p className="mt-2 text-balance font-medium text-greyscale-950">
							Hours saved
						</p>
					</div>

					<div className="group flex flex-col rounded-2xl bg-greyscale-10 p-4 md:p-6">
						<div className="rounded-tl-2xl rounded-tr-2xl">
							<img src={'statistic-3.webp'} alt="image" />
						</div>
						<h3 className="mt-3 text-2xl font-semibold tracking-[-0.71px] text-primary-600 md:mt-6">
							1M+
						</h3>
						<p className="mt-2 text-balance font-medium text-greyscale-950">
							Questions asked
						</p>
					</div>

					<div className="group flex flex-col rounded-2xl bg-greyscale-10 p-4 md:p-6">
						<div className="rounded-tl-2xl rounded-tr-2xl">
							<img src={'statistic-3.webp'} alt="image" />
						</div>
						<h3 className="mt-3 text-2xl font-semibold tracking-[-0.71px] text-primary-600 md:mt-6">
							500%+
						</h3>
						<p className="mt-2 text-balance font-medium text-greyscale-950">
							Return on investment
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

export default Statistic
