import React from 'react'
import SectionTitle from './SectionTitle'
import SectionSubtitle from './SectionSubtitle'

const ChatTools = () => {
	return (
		<section>
			<div className="container">
				<div className="flex flex-col items-center gap-4">
					<SectionSubtitle>Features</SectionSubtitle>
					<SectionTitle>Built for any PDF</SectionTitle>
				</div>
				<div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-6">
					<div className="flex flex-col">
						<div className="bg-greyscale-10 rounded-tl-2xl rounded-tr-2xl pt-3 sm:pt-6">
							<img src={'/pdf-1.png'} alt="image" />
						</div>
						<h3 className="mt-3 text-2xl font-semibold tracking-[-0.71px] text-greyscale-900 sm:mt-6">
							textbooks.pdf
						</h3>
						<p className="mt-2">
							Chat with pdf textbooks and engage in interactive conversation
							with your textbokksor a novel.
						</p>
					</div>

					<div className="flex flex-col">
						<div className="bg-greyscale-10 rounded-tl-2xl rounded-tr-2xl pt-3 sm:pt-6">
							<img src={'/pdf-2.png'} alt="image" />
						</div>
						<h3 className="mt-3 text-2xl font-semibold tracking-[-0.71px] text-greyscale-900 sm:mt-6">
							research_papers.pdf
						</h3>
						<p className="mt-2">
							Ask questions about complex topics with a simple chat interface
							for researchpapers. Take your research game to the next level.
						</p>
					</div>

					<div className="flex flex-col">
						<div className="bg-greyscale-10 rounded-tl-2xl rounded-tr-2xl pt-3 sm:pt-6">
							<img src={'/pdf-3.png'} alt="image" />
						</div>
						<h3 className="mt-3 text-2xl font-semibold tracking-[-0.71px] text-greyscale-900 sm:mt-6">
							legal_agreement.pdf
						</h3>
						<p className="mt-2">
							With Documind, legal documents becomes easier to understand and
							easier tosearch for contracts or key terms.
						</p>
					</div>

					<div className="flex flex-col">
						<div className="bg-greyscale-10 rounded-tl-2xl rounded-tr-2xl pt-3 sm:pt-6">
							<img src={'/pdf-4.png'} alt="image" />
						</div>
						<h3 className="mt-3 text-2xl font-semibold tracking-[-0.71px] text-greyscale-900 sm:mt-6">
							customer_support.pdf
						</h3>
						<p className="mt-2">
							Upload mutiple customer support manuals, guides & FAQ documents
							and askfor any information.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ChatTools
