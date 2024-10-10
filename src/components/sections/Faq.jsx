import React, { useEffect, useState } from 'react'
import SectionTitle from '../SectionTitle'
import SectionSubtitle from '../SectionSubtitle'

const FAQ_DATA = [
	{
		question: 'How can it benefit in my work?',
		answer:
			'Documind is used to ask questions, summarize document, generate reports or create a chatbot trained on your documents. Whether you"re a student drowning in textbooks, a researcher struggling to understand complex topics, a professional buried in contracts, or just someone tired of endless scrolling. Documind is here to simplify your life.',
	},
	{
		question: 'Is it helpful for students too?',
		answer:
			'Documind is used to ask questions, summarize document, generate reports or create a chatbot trained on your documents. Whether you"re a student drowning in textbooks, a researcher struggling to understand complex topics, a professional buried in contracts, or just someone tired of endless scrolling. Documind is here to simplify your life.',
	},
	{
		question: 'How do I set this up for my organization?',
		answer:
			'Documind is used to ask questions, summarize document, generate reports or create a chatbot trained on your documents. Whether you"re a student drowning in textbooks, a researcher struggling to understand complex topics, a professional buried in contracts, or just someone tired of endless scrolling. Documind is here to simplify your life.',
	},
	{
		question: 'Does it support other languages?',
		answer:
			'Documind is used to ask questions, summarize document, generate reports or create a chatbot trained on your documents. Whether you"re a student drowning in textbooks, a researcher struggling to understand complex topics, a professional buried in contracts, or just someone tired of endless scrolling. Documind is here to simplify your life.',
	},
	{
		question: 'Where is my data stored?',
		answer:
			'Documind is used to ask questions, summarize document, generate reports or create a chatbot trained on your documents. Whether you"re a student drowning in textbooks, a researcher struggling to understand complex topics, a professional buried in contracts, or just someone tired of endless scrolling. Documind is here to simplify your life.',
	},
	{
		question: 'I want my teammates to chat with my documents.',
		answer:
			'Documind is used to ask questions, summarize document, generate reports or create a chatbot trained on your documents. Whether you"re a student drowning in textbooks, a researcher struggling to understand complex topics, a professional buried in contracts, or just someone tired of endless scrolling. Documind is here to simplify your life.',
	},
	{
		question: 'What if i don"t like the tool after purchasing?',
		answer:
			'Documind is used to ask questions, summarize document, generate reports or create a chatbot trained on your documents. Whether you"re a student drowning in textbooks, a researcher struggling to understand complex topics, a professional buried in contracts, or just someone tired of endless scrolling. Documind is here to simplify your life.',
	},
]

const Faq = () => {
	const [openIndexes, setOpenIndexes] = useState([])

	const toggleFAQ = (index) => {
		if (openIndexes.includes(index)) {
			setOpenIndexes(openIndexes.filter((i) => i !== index))
		} else {
			setOpenIndexes([...openIndexes, index])
		}
	}

	return (
		<section>
			<div className="container">
				<div className="flex flex-col items-center gap-4 text-center">
					<SectionSubtitle>FAQ</SectionSubtitle>
					<SectionTitle>You asked, we answer</SectionTitle>
				</div>
				<div className="mx-auto mt-6 grid max-w-[846px] gap-3 md:gap-6 lg:mt-[50px]">
					{FAQ_DATA.map((faq, idx) => (
						<div
							key={idx}
							className={`flex h-full flex-col rounded-xl bg-greyscale-50`}
						>
							<button
								onClick={() => toggleFAQ(idx)}
								className={`text-grey-60 flex items-center justify-between p-4 text-xl font-semibold sm:text-left sm:text-base md:p-6`}
							>
								<span className="pr-5 font-semibold tracking-[-0.32px] text-greyscale-950 md:text-lg">
									{faq.question}
								</span>

								<div className="w-3">
									<span
										className={`flex h-[2px] translate-y-[2px] rotate-90 rounded-full bg-primary-600 transition-transform ${openIndexes.includes(idx) && '-rotate-90 scale-0'}`}
									></span>
									<span className="flex h-[2px] rounded-full bg-primary-600"></span>
								</div>
							</button>

							<div
								className={`grid overflow-hidden transition-all ${openIndexes.includes(idx) ? 'grid-rows-[1fr] pb-4 pl-4 opacity-100 md:pb-6 md:pl-6' : 'grid-rows-[0fr] opacity-0'} `}
							>
								<p className="overflow-hidden text-base font-medium tracking-[-0.32px] text-greyscale-500 md:text-lg">
									{faq.answer}
								</p>
							</div>
						</div>
					))}
				</div>

				<div className="mt-3 flex justify-center md:mt-6">
					<p className="text-base font-semibold tracking-[-0.32px] text-greyscale-500">
						More questions?&nbsp;
						<a
							href="/"
							className="text-base font-semibold tracking-[-0.32px] text-primary-600 underline-offset-4 hover:underline"
						>
							Contact Us
						</a>
					</p>
				</div>
			</div>
		</section>
	)
}

export default Faq
