import React from 'react'
import SectionTitle from '../SectionTitle'
import FeatureBlock from '../FeatureBlock'

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
						<a href="/" className="btn btn-primary">
							Start Now
						</a>
					</div>
				</div>

				<div className="bg-greyscale-10 my-4 flex items-center justify-center rounded-tl-2xl rounded-tr-2xl p-3 md:my-10 md:p-10 xl:p-20">
					<img src={'/video.png'} alt="image" />
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
