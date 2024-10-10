import React from 'react'
import SectionTitle from '../SectionTitle'
import FeatureBlock from '../FeatureBlock'
import LinkButton from '../LinkButton'

import { motion } from 'framer-motion'

const FEATURES_DATA = [
	{
		title: 'Share with others easily',
		iconUrl: '/feature-icon-1.svg',
	},
	{
		title: 'Embed directly on your website',
		iconUrl: '/feature-icon-2.svg',
	},
	{
		title: 'Use without needing to sign up',
		iconUrl: '/feature-icon-3.svg',
	},
]

const ChatBot = () => {
	return (
		<section>
			<div className="container">
				<div className="grid grid-cols-1 gap-2 md:grid-cols-2">
					<SectionTitle>Train Chatbot</SectionTitle>
					<motion.div
						initial={{
							y: 50,
						}}
						whileInView={{
							y: 0,
						}}
						transition={{
							duration: 1,
						}}
						viewport={{ once: true, margin: '-100px' }}
						className="space-y-4 md:space-y-6"
					>
						<p>
							Create a chatbot trained on your documents and share it with
							anyone with a shareable link. No signup required to use your link,
							and you can also place it on your website for easy access.
						</p>

						<LinkButton href={'/'} type="gradient">
							Start Now
						</LinkButton>
					</motion.div>
				</div>

				<div className="my-6 flex items-center justify-center rounded-tl-2xl rounded-tr-2xl md:my-10">
					<video
						autoPlay
						muted
						controls
						className="aspect-video"
						src="/videos/chatbot-purple.mp4"
					></video>
				</div>

				{/* Feature blocks */}
				<div className="grid gap-4 md:gap-6 lg:grid-cols-3">
					{FEATURES_DATA.map((feature, idx) => (
						<FeatureBlock key={idx} feature={feature} />
					))}
				</div>
			</div>
		</section>
	)
}

export default ChatBot
