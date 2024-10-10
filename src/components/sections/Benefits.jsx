import React from 'react'
import SectionTitle from '../SectionTitle'
import SectionSubtitle from '../SectionSubtitle'
import { motion } from 'framer-motion'
const BENEFITS_DATA = [
	{
		imageUrl: '/benefits-1.svg',
		title: 'Hosted in the European Union',
		text: 'We are proudly hosted in the European Union which means that you are protected under the toughest privacy law in the world (GDPR) as well as UK GDPR as we are based in the United',
	},
	{
		imageUrl: '/benefits-2.svg',
		title: 'Trust',
		text: 'We appreciate our users trusting us with their sensitive document information. No data is used to train AI model or shared with anyone and all data is fully encrypted on our servers.',
	},
	{
		imageUrl: '/benefits-3.svg',
		title: 'Regular Security Audits',
		text: 'Our commitment to data security is demonstrated through regular, comprehensive security audits to ensure the integrity of our systems.',
	},
	{
		imageUrl: '/benefits-4.svg',
		title: 'Secure Data Transmission',
		text: 'All data sent to and from our tool is encrypted using SSL/TLS, safeguarding it from interception using transmission.',
	},
]

const Benefits = () => {
	return (
		<section>
			<div className="container">
				<div className="flex flex-col items-center gap-4 text-center">
					<SectionSubtitle>Benefits</SectionSubtitle>
					<SectionTitle>We respect your Data & Security</SectionTitle>
					<motion.p
						viewport={{ once: true, margin: '-100px' }}
						initial={{
							opacity: 0,
							y: 50,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 0.5,
						}}
					>
						We follow industry standards while constantly investing in privacy
						of our users.
					</motion.p>
				</div>
				<div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-x-6 md:gap-y-10">
					{BENEFITS_DATA.map((item) => (
						<motion.div
							viewport={{ once: true, margin: '-300px' }}
							initial={{
								opacity: 0,
							}}
							whileInView={{
								opacity: 1,
							}}
							transition={{
								duration: 0.3,
							}}
							key={item.imageUrl}
							className="flex flex-col rounded-2xl bg-greyscale-10 p-4 md:p-6 lg:p-10"
						>
							<div className="rounded-tl-2xl rounded-tr-2xl">
								<img src={item.imageUrl} alt="image" />
							</div>
							<h3 className="mt-3 text-2xl font-semibold tracking-[-0.71px] text-greyscale-900 md:mt-6">
								{item.title}
							</h3>
							<p className="mt-2 text-balance">{item.text}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Benefits
