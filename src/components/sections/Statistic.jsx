import React from 'react'
import SectionTitle from '../SectionTitle'
import SectionSubtitle from '../SectionSubtitle'

const STATISTIC_DATA = [
	{
		imageUrl: '/statistic-1.png',
		title: '100,000+',
		text: 'Professionals',
	},
	{
		imageUrl: '/statistic-2.png',
		title: '500,000+',
		text: 'Hours saved',
	},
	{
		imageUrl: '/statistic-3.png',
		title: '1M+',
		text: 'Questions asked',
	},
	{
		imageUrl: '/statistic-4.png',
		title: '500%+',
		text: 'Return on investment',
	},
]

const Statistic = () => {
	return (
		<section>
			<div className="container">
				<div className="flex flex-col items-center gap-4 text-center">
					<SectionSubtitle>We In Numbers</SectionSubtitle>
					<SectionTitle>We help ambitious professionals succeed</SectionTitle>
					<p>Our results speak for themselves.</p>
				</div>
				<div className="mx-auto mt-6 grid max-w-[1040px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-10">
					{STATISTIC_DATA.map((item) => (
						<div
							key={item.imageUrl}
							className="first:active group flex flex-col rounded-2xl bg-greyscale-10 p-4 text-primary-600 first:bg-primary-600 first:!text-white md:p-6"
						>
							<div className="rounded-tl-2xl rounded-tr-2xl">
								<img src={item.imageUrl} alt="image" />
							</div>
							<h3 className="mt-3 text-2xl font-semibold tracking-[-0.71px] md:mt-6">
								{item.title}
							</h3>
							<p className="mt-2 text-balance font-medium text-greyscale-950">
								{item.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Statistic
