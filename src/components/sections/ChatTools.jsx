import React from 'react'
import SectionTitle from '../SectionTitle'
import SectionSubtitle from '../SectionSubtitle'
import { motion } from 'framer-motion'

const CHAT_TOOLS_DATA = [
	{
		imageUrl: '/pdf-1.png',
		title: 'textbooks.pdf',
		text: 'Chat with pdf textbooks and engage in interactive conversation with your textbokksor a novel.',
	},
	{
		imageUrl: '/pdf-2.png',
		title: 'research_papers.pdf',
		text: 'Ask questions about complex topics with a simple chat interface for researchpapers. Take your research game to the next level.',
	},
	{
		imageUrl: '/pdf-3.png',
		title: 'legal_agreement.pdf',
		text: 'With Documind, legal documents becomes easier to understand and easier tosearch for contracts or key terms.',
	},
	{
		imageUrl: '/pdf-4.png',
		title: 'customer_support.pdf',
		text: 'Upload mutiple customer support manuals, guides & FAQ documents and askfor any information.',
	},
]

const ChatTools = () => {
	return (
		<section>
			<div className="container">
				<div className="flex flex-col items-center gap-4">
					<SectionSubtitle>Chat Tools</SectionSubtitle>
					<SectionTitle>Built for any PDF</SectionTitle>
				</div>
				<div className="mt-6 grid gap-6 md:grid-cols-2">
					{CHAT_TOOLS_DATA.map((item) => (
						<motion.div
							viewport={{ once: true, margin: '-300px' }}
							initial={{
								opacity: 0,
							}}
							whileInView={{
								opacity: 1,
							}}
							transition={{
								duration: 0.6,
							}}
							key={item.imageUrl}
							className="flex flex-col"
						>
							<div className="rounded-tl-2xl rounded-tr-2xl bg-greyscale-10 pt-3 md:pt-6">
								<img src={item.imageUrl} alt="image" />
							</div>
							<h3 className="mt-3 text-2xl font-semibold tracking-[-0.71px] text-greyscale-900 md:mt-6">
								{item.title}
							</h3>
							<p className="mt-2">{item.text}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default ChatTools
