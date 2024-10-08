import React from 'react'
import SectionSubtitle from '../SectionSubtitle'
import SectionTitle from '../SectionTitle'
import Tabs from '../Tabs'

const HowItWotks = () => {
	return (
		<section>
			<div className="container">
				<SectionSubtitle>How It Works </SectionSubtitle>
				<div className="mt-3 grid grid-cols-1 gap-2 md:mt-4 md:grid-cols-2">
					<div>
						<SectionTitle>Easy step transforming your documents</SectionTitle>
					</div>
					<div className="space-y-4 md:space-y-6">
						<p>
							Our process is designed to be simple and efficient, allowing you
							to unlock the full potential of your PDFs with minimal effort.
						</p>
						<a href="/" className="btn btn-primary">
							Upload Your PDF
						</a>
					</div>
				</div>

				<div className="mt-6 md:mt-10 lg:mt-20">
					<Tabs />
				</div>
			</div>
		</section>
	)
}

export default HowItWotks
