import { motion } from 'framer-motion'
import LinkButton from '../LinkButton'
import SectionSubtitle from '../SectionSubtitle'
import SectionTitle from '../SectionTitle'

const BLOCKS_DATA = [
	{
		id: '1',
		title: 'Bulk upload 100s of PDF documents',
		text: 'Risus facilisis pellentesque dapibus at est nunc duis nunc. Sed scelerisque tincidunt magna',
		imageUrl: '/how-1.png',
	},
	{
		id: '2',
		title: 'GPT4 turbo will process your documents',
		text: 'Ask questions, extract information, and summarize everything with our advanced and friendly AI.',
		imageUrl: '/how-2.png',
	},
	{
		id: '3',
		title: 'Ask questions and chat with documents',
		text: 'With the AI-generated output, you can quickly extract important data, navigate through the document with smart search.',
		imageUrl: '/how-3.png',
	},
]
const HowItWorks = () => {
	return (
		<section>
			<div className="container">
				<SectionSubtitle>How It Works</SectionSubtitle>
				<div className="mt-3 grid grid-cols-1 gap-2 md:mt-4 md:grid-cols-2 lg:gap-10">
					<div>
						<SectionTitle>Easy step transforming your documents</SectionTitle>
					</div>
					<motion.div
						initial={{ y: 50, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true, margin: '-100px' }}
						className="space-y-4 md:space-y-6"
					>
						<p>
							Our process is designed to be simple and efficient, allowing you
							to unlock the full potential of your PDFs with minimal effort.
						</p>

						<LinkButton href={'/'} type="gradient">
							Upload Your PDF
						</LinkButton>
					</motion.div>
				</div>

				<div className="mt-6 md:mt-10 lg:mt-20">
					<div className="grid gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
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
							className="relative rounded-3xl border border-[#CAD4FB] bg-primary-50 p-4 md:p-6"
						>
							<div className="bg-circle-blue-gradient shadow-circle-blue absolute -top-6 left-1/2 flex size-[51px] -translate-x-1/2 items-center justify-center rounded-full border border-white bg-red-300 text-lg font-semibold">
								1
							</div>

							<div className="flex items-center md:min-h-[200px]">
								<img
									className="h-auto w-full max-w-full"
									src="/how-1.webp"
									alt="image"
								/>
							</div>
							<div>
								<h3 className="mt-3 text-lg font-semibold tracking-[-0.71px] text-greyscale-900 md:mt-6">
									Bulk upload 100s of PDF documents
								</h3>
								<p className="mt-2">
									Upload and manage hundreds of PDF documents at once with our
									bulk upload feature, saving you time and making document
									management easier.
								</p>
							</div>
						</motion.div>
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
							className="relative rounded-3xl border border-[#B8ECFF] bg-[#EFFAFF] p-6"
						>
							<div className="bg-circle-lightblue-gradient shadow-circle-lightblue absolute -top-6 left-1/2 flex size-[51px] -translate-x-1/2 items-center justify-center rounded-full border border-white bg-red-300 text-lg font-semibold">
								2
							</div>
							<div className="flex items-center md:min-h-[200px]">
								<img
									className="flex h-auto w-full max-w-full"
									src="/how-2.webp"
									alt="image"
								/>
							</div>
							<div>
								<h3 className="mt-3 text-lg font-semibold tracking-[-0.71px] text-greyscale-900 md:mt-6">
									GPT4 turbo will process your documents
								</h3>
								<p className="mt-2">
									Process your documents with speed and precision, ensuring that
									all your files are handled efficiently and accurately, and
									saving you time.
								</p>
							</div>
						</motion.div>
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
							className="relative rounded-3xl border border-[#C6ECC9] bg-[#F2FBF3] p-6 md:col-span-2 lg:col-span-1"
						>
							<div className="bg-circle-lightgreen-gradient shadow-circle-lightgreen absolute -top-6 left-1/2 flex size-[51px] -translate-x-1/2 items-center justify-center rounded-full border border-white bg-red-300 text-lg font-semibold">
								3
							</div>
							<div className="flex items-center md:min-h-[200px]">
								<img
									className="h-auto w-full max-w-full"
									src="/how-3.webp"
									alt="image"
								/>
							</div>
							<div>
								<h3 className="mt-3 text-lg font-semibold tracking-[-0.71px] text-greyscale-900 md:mt-6">
									Ask questions and chat with documents
								</h3>
								<p className="mt-2">
									Engage with your documents. Ask questions, extract
									information, and summarize everything with our advanced and
									friendly AI.
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HowItWorks
