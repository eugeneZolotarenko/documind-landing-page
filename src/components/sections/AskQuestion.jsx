import React from 'react'
import SectionTitle from '../SectionTitle'
import FeatureBlock from '../FeatureBlock'
import Button from '../Button'

const FEATURES_DATA = [
	{
		title: 'Engage with several PDFs simultaneously',
		iconUrl: '/feature-icon-1.svg',
	},
	{
		title: 'Chat across various languages',
		iconUrl: '/feature-icon-2.svg',
	},
	{
		title: 'Get accurate, relevant answers',
		iconUrl: '/feature-icon-3.svg',
	},
]

const AskQuestion = () => {
	return (
		<section>
			<div className="container">
				<div className="grid grid-cols-1 gap-2 md:grid-cols-2">
					<SectionTitle>Ask questions</SectionTitle>
					<div className="space-y-4 md:space-y-6">
						<p>
							Have conversation with PDFs to get answers in natural language,
							along with citations and the source PDF.
						</p>
						<a href="/" className="inline-block">
							<Button type="gradient">Start Now</Button>
						</a>
					</div>
				</div>

				<div className="my-4 flex items-center justify-center rounded-tl-2xl rounded-tr-2xl bg-greyscale-10 p-3 md:my-10 md:p-10 xl:p-20">
					<video
						controls
						className="aspect-video"
						src="/videos/question-purple.mp4"
					></video>
				</div>

				{/* Feature blocks */}
				<div className="grid gap-3 md:gap-6 lg:grid-cols-3">
					{FEATURES_DATA.map((feature, idx) => (
						<FeatureBlock key={idx} feature={feature} />
					))}
				</div>
			</div>
		</section>
	)
}

export default AskQuestion
