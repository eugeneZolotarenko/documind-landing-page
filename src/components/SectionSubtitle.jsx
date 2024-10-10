import React from 'react'
import { motion } from 'framer-motion'
const SectionSubtitle = ({ children }) => {
	return (
		<motion.div
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
			className="flex max-w-fit items-center gap-2 rounded-full border border-greyscale-200 px-[14px] py-2 text-xs font-medium leading-none"
		>
			<img src="/star-icon.svg" alt="star icon" />
			{children}
			<img src="/star-icon.svg" alt="star icon" />
		</motion.div>
	)
}

export default SectionSubtitle
