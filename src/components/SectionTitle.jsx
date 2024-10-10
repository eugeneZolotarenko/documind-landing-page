import { motion } from 'framer-motion'
const SectionTitle = ({ children }) => {
	return (
		<motion.h2
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
			className="text-balance text-[32px] font-semibold leading-snug tracking-[-0.96px] text-greyscale-950 lg:text-[56px] lg:leading-tight lg:tracking-[-1.68px]"
		>
			{children}
		</motion.h2>
	)
}

export default SectionTitle
