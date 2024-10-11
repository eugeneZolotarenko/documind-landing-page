import React from 'react'
import SectionTitle from '../SectionTitle'
import SectionSubtitle from '../SectionSubtitle'
import { motion } from 'framer-motion'
const AUTOMATION_DATA = [
	{
		imageUrl: '/ai-1.webp',
		title: 'Manual work 😒',
		text: 'Managing PDFs manually involves repetitive and time-consuming tasks such as opening each document, reading through pages, extracting information, and organizing data yourself.',
	},
	{
		imageUrl: '/ai-2.webp',
		title: 'Documind chat 😀',
		text: 'Automatically process documents, extracting key information, summarizing content, and organizing data in a fractionof the time. ',
	},
]

const Automation = () => {
	return (
		<section>
			<div className="container">
				<div className="flex flex-col items-center gap-4 text-center">
					<SectionSubtitle>AI Automation</SectionSubtitle>
					<SectionTitle>Work 10x Faster with AI</SectionTitle>
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
						Busy students & professionals are saving 4.6 hours a week with AI
					</motion.p>
				</div>
				<div className="mt-6 grid gap-6 md:grid-cols-2">
					{AUTOMATION_DATA.map((item) => (
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
							key={item.imageUrl}
							className="flex flex-col"
						>
							<div className="rounded-2xl bg-greyscale-10">
								<img src={item.imageUrl} alt="image" />
							</div>
							<h3 className="mt-3 text-center text-2xl font-semibold tracking-[-0.71px] text-greyscale-900 md:mt-6">
								{item.title}
							</h3>
							<p className="mt-2 text-balance text-center">{item.text}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Automation
