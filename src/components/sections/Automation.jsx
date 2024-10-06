import React from 'react'
import SectionTitle from '../SectionTitle'
import SectionSubtitle from '../SectionSubtitle'

const AUTOMATION_DATA = [
	{
		imageUrl: '/ai-1.png',
		title: 'Manual work 😒',
		text: 'Managing PDFs manually involves repetitive and time-consuming tasks such as opening each document, reading through pages, extracting information, and organizing data yourself.',
	},
	{
		imageUrl: '/ai-2.png',
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
					<p>
						Busy students & professionals are saving 4.6 hours a week with AI
					</p>
				</div>
				<div className="mt-6 grid gap-3 md:grid-cols-2 md:gap-6">
					{AUTOMATION_DATA.map((item) => (
						<div key={item.imageUrl} className="flex flex-col">
							<div className="bg-greyscale-10 rounded-tl-2xl rounded-tr-2xl">
								<img src={item.imageUrl} alt="image" />
							</div>
							<h3 className="mt-3 text-center text-2xl font-semibold tracking-[-0.71px] text-greyscale-900 md:mt-6">
								{item.title}
							</h3>
							<p className="mt-2 text-balance text-center">{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Automation
