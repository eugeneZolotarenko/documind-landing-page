import React, { useState } from 'react'
import SectionSubtitle from '../SectionSubtitle'
import SectionTitle from '../SectionTitle'
import Button from '../Button'

const pricingData = {
	premium: {
		label: 'Premium',
		monthlyPrice: '9.93',
		monthlyOldPrice: '20',
		yearlyPrice: '76.93',
		yearlyOldPrice: '95',
	},
	professional: {
		label: 'Professional',
		monthlyPrice: '14.93',
		monthlyOldPrice: '30',
		yearlyPrice: '123.98',
		yearlyOldPrice: '295',
	},
	enterprise: {
		label: 'Enterprise',
		monthlyPrice: '39.93',
		monthlyOldPrice: '80',
		yearlyPrice: '489.96',
		yearlyOldPrice: '800',
	},
}
const Price = () => {
	const [isYearly, setIsYearly] = useState(false)

	return (
		<section>
			<div className="container">
				<div className="mx-auto flex max-w-[600px] flex-col items-center gap-4 text-center">
					<SectionSubtitle>Pricing</SectionSubtitle>
					<SectionTitle>Stop working so hard, put AI to work!</SectionTitle>
					<p>
						AI is something we all can benefit from, and our mission at Documind
						is to help you make your work quicker and easier.
					</p>
				</div>

				{/* Toggle Switch */}
				<button
					onClick={() => setIsYearly(!isYearly)}
					className="relative mx-auto my-6 grid w-full grid-cols-2 items-center justify-center rounded-2xl bg-greyscale-50 p-1 xs:gap-2 sm:max-w-[286px] lg:my-11"
				>
					<span
						className={`absolute left-1 top-[4px] z-0 flex h-[76px] w-1/2 items-center justify-center rounded-xl bg-white transition-all xs:h-[48px] ${isYearly && '!left-1/2 -ml-1'}`}
					/>

					<p className="relative z-0 px-6 py-3 text-center font-semibold leading-normal text-greyscale-950">
						Monthly
					</p>
					<p className="z-0 flex flex-col justify-center gap-1 px-6 py-3 text-center font-semibold leading-normal text-greyscale-950 xs:flex-row">
						Yearly
						<span className="ml-2 flex shrink-0 items-center justify-center rounded-full bg-primary-50 px-2 py-1 text-xs font-semibold tracking-[-0.24px] text-primary-600">
							30% off
						</span>
					</p>
				</button>

				{/* Pricing Table */}
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{/* Premium */}
					<div className="rounded-2xl border border-greyscale-100 p-4 md:p-6">
						<h3 className="text-2xl font-semibold tracking-[-0.71px] text-greyscale-900 md:mt-6">
							{pricingData.premium.label}
						</h3>
						<span className="mt-2 inline-flex rounded-full bg-[#F7F0FE] px-2 py-1 text-xs font-medium tracking-[-0.24px] text-[#A655F6]">
							For High Achiever Students
						</span>
						<div className="my-5 flex items-end justify-between gap-1">
							<div className="flex items-end gap-1">
								<p className="text-[40px] font-semibold leading-none tracking-[-1.68px] text-greyscale-950 lg:text-[56px]">
									$
									{!isYearly
										? pricingData.premium.monthlyPrice
										: pricingData.premium.yearlyPrice}
								</p>
								<p>/{!isYearly ? 'month' : 'year'}</p>
							</div>

							<p className="text-2xl font-medium tracking-[-0.72px] line-through">
								$
								{!isYearly
									? pricingData.premium.monthlyOldPrice
									: pricingData.premium.yearlyOldPrice}
							</p>
						</div>
						<a href="/" className="flex w-full max-w-full justify-center">
							<Button
								type="outline"
								className={'flex w-full max-w-full justify-center'}
							>
								Upgrade Now
							</Button>
						</a>

						<p className="mt-4 text-sm">Included:</p>
						<ul className="mt-3 space-y-2 md:mt-4">
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-950">
									Unlimited Monthly Chats
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-950">
									100 PDF uploads
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-950">
									50MB PDF size limit
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-950">
									Priority Support
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-950">
									Using GPT-4o - Best AI model
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-950">
									Generate articles, reports
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-950">
									Summarize long PDFs
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-950">
									Upload PDFs in bulk
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-950">
									Chat with multiple documents
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-950">
									Organize files in folders
								</p>
							</li>
						</ul>

						<ul className="mt-3 space-y-2 md:space-y-3">
							<li className="flex items-center gap-2">
								<img src="/minus.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-400">
									Unlimited Monthly Chats
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/minus.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-400">
									Share your Chatbot
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/minus.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-400">
									Embed on your website
								</p>
							</li>
						</ul>
					</div>
					{/* Professional */}
					<div className="rounded-2xl border border-primary-950 bg-primary-950 p-4 md:p-6">
						<div className="flex items-center justify-between gap-4 md:mt-6">
							<div>
								<h3 className="text-2xl font-semibold tracking-[-0.71px] text-white">
									{pricingData.professional.label}
								</h3>
								<span className="mt-2 inline-flex rounded-full bg-[#A655F633]/20 px-2 py-1 text-center text-xs font-medium tracking-[-0.24px] text-[#CC9EFA]">
									For High Achiever Students
								</span>
							</div>

							<div className="shrink-0 rounded-full bg-primary-gradient px-4 py-2 text-sm font-semibold tracking-[-0.28px] text-white">
								MOST POPULAR
							</div>
						</div>
						<div className="my-5 flex items-end justify-between gap-1">
							<div className="flex items-end gap-1">
								<p className="text-[40px] font-semibold leading-none tracking-[-1.68px] text-white lg:text-[56px]">
									$
									{!isYearly
										? pricingData.professional.monthlyPrice
										: pricingData.professional.yearlyPrice}
								</p>
								<p>/{!isYearly ? 'month' : 'year'}</p>
							</div>

							<p className="text-2xl font-medium tracking-[-0.72px] line-through">
								$
								{!isYearly
									? pricingData.professional.monthlyOldPrice
									: pricingData.professional.yearlyOldPrice}
							</p>
						</div>
						<a href="/" className="flex w-full max-w-full justify-center">
							<Button
								type="gradient"
								className={'flex w-full max-w-full justify-center'}
							>
								Upgrade Now
							</Button>
						</a>

						<p className="mt-4 text-sm">Everything in Premium plus:</p>
						<ul className="mt-3 space-y-2 md:mt-4">
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-white">
									Unlimited Monthly Chats
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-white">
									1000 PDF uploads
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-white">
									100MB PDF size limit
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-white">
									Full API access
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-white">
									Share your Chatbot
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-white">
									Embed on your website
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-white">
									Priority Support
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-white">
									Priority access to new features
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-white">
									Using GPT-4o - Best AI model
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-white">
									Generate articles, reports
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-white">
									Summarize long PDFs
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-white">
									Upload PDFs in bulk
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-white">
									Chat with multiple documents
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-white">
									Organize files in folders
								</p>
							</li>
						</ul>
					</div>
					{/* Enterprise */}
					<div className="rounded-2xl border border-greyscale-100 p-4 md:col-span-2 md:p-6 lg:col-span-1">
						<h3 className="text-2xl font-semibold tracking-[-0.71px] text-greyscale-900 md:mt-6">
							{pricingData.enterprise.label}
						</h3>
						<span className="mt-2 inline-flex rounded-full bg-[#F7F0FE] px-2 py-1 text-xs font-medium tracking-[-0.24px] text-[#A655F6]">
							For High Achiever Students
						</span>
						<div className="my-5 flex items-end justify-between gap-1">
							<div className="flex items-end gap-1">
								<p className="text-[40px] font-semibold leading-none tracking-[-1.68px] text-greyscale-950 lg:text-[56px]">
									$
									{!isYearly
										? pricingData.enterprise.monthlyPrice
										: pricingData.enterprise.yearlyPrice}
								</p>
								<p>/{!isYearly ? 'month' : 'year'}</p>
							</div>

							<p className="text-2xl font-medium tracking-[-0.72px] line-through">
								$
								{!isYearly
									? pricingData.enterprise.monthlyOldPrice
									: pricingData.enterprise.yearlyOldPrice}
							</p>
						</div>

						<a href="/" className="flex w-full max-w-full justify-center">
							<Button
								type="outline"
								className={'flex w-full max-w-full justify-center'}
							>
								Upgrade Now
							</Button>
						</a>

						<p className="mt-4 text-sm">Included:</p>
						<ul className="mt-3 space-y-2 md:mt-4">
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-950">
									Unlimited Monthly Chats
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-950">
									10,000 PDF uploads
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-950">
									150MB PDF size limit
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-950">
									Full API access
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-950">
									Share your Chatbot
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-950">
									Embed on your website
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-950">
									Priority access to new features
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-950">
									Remove Documind branding
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-950">
									Dedicated 24/7 support
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-950">
									Using GPT-4o - Best AI model
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-950">
									Generate articles, reports
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-950">
									Summarize long PDFs
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-950">
									Upload PDFs in bulk
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-950">
									Chat with multiple documents
								</p>
							</li>
							<li className="flex items-center gap-2">
								<img src="/check-icon.svg" alt="check arrow" />
								<p className="text-sm font-medium tracking-[-0.36px] text-greyscale-950">
									Organize files in folders
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Price
