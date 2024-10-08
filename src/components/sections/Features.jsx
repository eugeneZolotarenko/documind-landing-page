import React from 'react'
import SectionSubtitle from '../SectionSubtitle'
import SectionTitle from '../SectionTitle'
import Button from '../Button'

const Features = () => {
	return (
		<section>
			<div className="container">
				<div className="flex flex-col items-center gap-4">
					<SectionSubtitle>Features</SectionSubtitle>
					<SectionTitle>Built for any PDF</SectionTitle>
				</div>

				<div className="mt-6 md:mt-10">
					<div className="grid rounded-2xl bg-greyscale-10 md:grid-cols-2">
						<div className="p-4 md:p-6 lg:p-10">
							<h3 className="text-2xl font-semibold tracking-[-0.71px] text-greyscale-900">
								Ask Questions
							</h3>
							<p className="mt-[6px] text-balance">
								Have conversation with PDFs to get answers in natural language,
								along with citations and the source PDF.
							</p>
							<ul className="mb-4 mt-3 space-y-2 md:mb-8 md:mt-4 md:space-y-3">
								<li className="flex items-center gap-2">
									<img src="/check-icon.svg" alt="check arrow" />
									<p className="text-base tracking-[-0.36px] text-greyscale-950 md:text-lg">
										Engage with several PDFs simultaneously
									</p>
								</li>
								<li className="flex items-center gap-2">
									<img src="/check-icon.svg" alt="check arrow" />
									<p className="text-base tracking-[-0.36px] text-greyscale-950 md:text-lg">
										Chat across various languages
									</p>
								</li>
								<li className="flex items-center gap-2">
									<img src="/check-icon.svg" alt="check arrow" />
									<p className="text-base tracking-[-0.36px] text-greyscale-950 md:text-lg">
										Get accurate, relevant answers
									</p>
								</li>
							</ul>

							<a href="/">
								<Button type="gradient">
									<span>Get Started</span>
									<img src="/btn-arrow.svg" alt="arrow-icon" />
								</Button>
							</a>
						</div>
						<div className="mt-auto rounded-tl-2xl rounded-tr-2xl">
							<img src={'/features-3.png'} alt="image" />
						</div>
					</div>

					<div className="mt-3 grid gap-3 md:mt-6 md:grid-cols-2 md:gap-6">
						<div className="flex flex-col-reverse rounded-2xl bg-greyscale-10 md:flex-col">
							<div className="rounded-tl-2xl rounded-tr-2xl">
								<img src={'/features-1.png'} alt="image" />
							</div>
							<div className="p-4 md:p-6 lg:p-10">
								<h3 className="text-2xl font-semibold tracking-[-0.71px] text-greyscale-900">
									Generate Content
								</h3>
								<p className="mt-[6px] text-balance">
									Unlock your content creation potential effortlessly with
									Documind. Streamline the process of generating articles,
									crafting essays, and brainstorming ideas.
								</p>
								<ul className="mb-4 mt-3 space-y-2 md:mb-8 md:mt-4 md:space-y-3">
									<li className="flex items-center gap-2">
										<img src="/check-icon.svg" alt="check arrow" />
										<p className="text-base tracking-[-0.36px] text-greyscale-950 md:text-lg">
											Generate reports and essays quickly
										</p>
									</li>
									<li className="flex items-center gap-2">
										<img src="/check-icon.svg" alt="check arrow" />
										<p className="text-base tracking-[-0.36px] text-greyscale-950 md:text-lg">
											Brainstorm ideas effortlessly
										</p>
									</li>
									<li className="flex items-center gap-2">
										<img src="/check-icon.svg" alt="check arrow" />
										<p className="text-base tracking-[-0.36px] text-greyscale-950 md:text-lg">
											Get accurate, relevant answers
										</p>
									</li>
								</ul>

								<a href="/">
									<Button type="gradient">
										<span>Get Started</span>
										<img src="/btn-arrow.svg" alt="arrow-icon" />
									</Button>
								</a>
							</div>
						</div>
						<div className="flex flex-col-reverse rounded-2xl bg-greyscale-10 md:flex-col">
							<div className="rounded-tl-2xl rounded-tr-2xl">
								<img src={'/features-2.png'} alt="image" />
							</div>
							<div className="p-4 md:p-6 lg:p-10">
								<h3 className="text-2xl font-semibold tracking-[-0.71px] text-greyscale-900">
									Train Chatbot
								</h3>
								<p className="mt-[6px] text-balance">
									Create a chatbot trained on your documents and share it with
									anyone with a shareable link. No signup required to use your
									link, and you can also place it on your website for easy
									access.
								</p>
								<ul className="mb-4 mt-3 space-y-2 md:mb-8 md:mt-4 md:space-y-3">
									<li className="flex items-center gap-2">
										<img src="/check-icon.svg" alt="check arrow" />
										<p className="text-base tracking-[-0.36px] text-greyscale-950 md:text-lg">
											Share with others easily
										</p>
									</li>
									<li className="flex items-center gap-2">
										<img src="/check-icon.svg" alt="check arrow" />
										<p className="text-base tracking-[-0.36px] text-greyscale-950 md:text-lg">
											Embed directly on your website
										</p>
									</li>
									<li className="flex items-center gap-2">
										<img src="/check-icon.svg" alt="check arrow" />
										<p className="text-base tracking-[-0.36px] text-greyscale-950 md:text-lg">
											Use without needing to sign up
										</p>
									</li>
								</ul>

								<a href="/">
									<Button type="gradient">
										<span>Get Started</span>
										<img src="/btn-arrow.svg" alt="arrow-icon" />
									</Button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Features
