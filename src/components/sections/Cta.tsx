import React from 'react'

const Cta = () => {
	return (
		<section className="p-0">
			<div className="container">
				<div className="bg-blue-gradient relative z-0 flex flex-col items-center overflow-hidden rounded-2xl p-6 md:p-10 lg:p-20">
					<img
						className="absolute left-1/2 top-1/2 -z-10 hidden h-auto w-full max-w-full -translate-x-1/2 -translate-y-1/2 xl:block"
						src="/vector.png"
						alt="vector"
					/>
					<img className="lg:size-12" src="/small-logo.svg" alt="small logo" />
					<h4 className="mb-4 mt-3 max-w-[560px] text-balance text-center text-[32px] font-semibold tracking-[-0.96px] text-greyscale-950 lg:mb-10 lg:mt-4 lg:text-[56px] lg:leading-tight">
						Unlock your potential with Documind AI
					</h4>
					<a download href="/" className="btn btn-primary">
						Upload Your PDF
					</a>
				</div>
			</div>
		</section>
	)
}

export default Cta
