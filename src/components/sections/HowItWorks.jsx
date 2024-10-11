import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import LinkButton from '../LinkButton'
import SectionSubtitle from '../SectionSubtitle'
import SectionTitle from '../SectionTitle'

const TABS_DATA = [
	{
		id: '1',
		title: 'Bulk upload 100s of PDF documents',
		text: 'Risus facilisis pellentesque dapibus at est nunc duis nunc. Sed scelerisque tincidunt magna',
		imageUrl: '/tab-1-full.webp',
	},
	{
		id: '2',
		title: 'GPT4 turbo will process your documents',
		text: 'Ask questions, extract information, and summarize everything with our advanced and friendly AI.',
		imageUrl: '/tab-2-full.webp',
	},
	{
		id: '3',
		title: 'Ask questions and chat with documents',
		text: 'With the AI-generated output, you can quickly extract important data, navigate through the document with smart search.',
		imageUrl: '/tab-3-full.webp',
	},
]
const HowItWorks = () => {
	const [activeTab, setActiveTab] = useState(0)
	const sectionRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start start', 'end end'],
	})

	const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05])
	const imageOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 1])

	useEffect(() => {
		const unsubscribe = scrollYProgress.on('change', (progress) => {
			const nextTab = Math.floor(progress * TABS_DATA.length)
			if (nextTab >= 0 && nextTab < TABS_DATA.length) {
				setActiveTab(nextTab)
			}
		})
		return () => unsubscribe()
	}, [scrollYProgress])
	return (
		<section ref={sectionRef} className="relative min-h-[160vh]">
			<div className="container sticky top-20">
				<SectionSubtitle>How It Works</SectionSubtitle>
				<div className="mt-3 grid grid-cols-1 gap-2 md:mt-4 md:grid-cols-2 lg:gap-10">
					<div>
						<SectionTitle>Easy step transforming your documents</SectionTitle>
					</div>
					<motion.div
						initial={{ y: 50, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true, margin: '-100px' }}
						className="space-y-4 md:space-y-6"
					>
						<p>
							Our process is designed to be simple and efficient, allowing you
							to unlock the full potential of your PDFs with minimal effort.
						</p>

						<LinkButton href={'/'} type="gradient">
							Upload Your PDF
						</LinkButton>
					</motion.div>
				</div>

				<div className="mt-6 md:mt-10 lg:mt-20">
					<div className="relative">
						<div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-6 lg:gap-20">
							<motion.div
								style={{ scale: imageScale, opacity: imageOpacity }}
								className="flex w-full items-center justify-center overflow-hidden rounded-2xl bg-greyscale-10 md:w-1/2"
							>
								<motion.img
									key={TABS_DATA[activeTab].imageUrl}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.8 }}
									transition={{ duration: 0.5 }}
									className="h-auto w-full max-w-full"
									src={TABS_DATA[activeTab].imageUrl}
									alt={`Image for ${TABS_DATA[activeTab].title}`}
								/>
							</motion.div>

							<ul className="w-full space-y-10 md:w-1/2">
								{TABS_DATA.map((tab, idx) => (
									<motion.li
										key={tab.id}
										initial={{ opacity: 0, x: 50 }}
										animate={{
											opacity: activeTab >= idx ? 1 : 0.5,
											x: 0,
										}}
										transition={{ duration: 0.5, delay: idx * 0.1 }}
										className="group relative z-10 overflow-visible"
									>
										<motion.div
											className={`flex gap-3 text-left`}
											animate={{
												scale: activeTab === idx ? 1.05 : 1,
											}}
											transition={{ duration: 0.3 }}
										>
											<motion.span
												animate={{
													backgroundColor:
														activeTab === idx ? '#6366f1' : '#ffffff',
													color:
														activeTab === idx
															? '#ffffff'
															: activeTab > idx
																? '#9CA3AF'
																: '#1f2937',
													borderColor:
														activeTab === idx ? '#6366f1' : '#e5e7eb',
												}}
												transition={{ duration: 0.3 }}
												className={`flex size-8 shrink-0 items-center justify-center rounded-full border text-center font-semibold`}
											>
												{idx + 1}
											</motion.span>
											<div className="space-y-2 pt-1">
												<motion.h3
													animate={{
														color: activeTab > idx ? '#9CA3AF' : '#1F2937',
													}}
													className="text-base font-semibold tracking-[-0.5px] md:text-xl lg:text-2xl"
												>
													{tab.title}
												</motion.h3>
												<motion.p
													initial={{ opacity: 0, y: 10 }}
													animate={{
														opacity: activeTab === idx ? 1 : 0.7,
														y: activeTab === idx ? 0 : 5,
														color: activeTab > idx ? '#9CA3AF' : '#5D5D5D',
													}}
													transition={{ duration: 0.3 }}
													className="text-sm md:text-base"
												>
													{tab.text}
												</motion.p>
											</div>
										</motion.div>
									</motion.li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HowItWorks
