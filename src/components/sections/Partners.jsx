import React from 'react'

const Partners = () => {
	return (
		<section className="pb-6 pt-4 lg:pb-[60px]">
			<div className="container">
				<p className="text-center font-medium">
					Powering the world’s best companies
				</p>
				<div className="mx-auto mt-4 flex max-w-[800px] flex-wrap justify-center gap-3 lg:mt-8 lg:gap-10">
					<img
						className="max-w-[112px] lg:max-w-full"
						src="/partner-1.svg"
						alt="partner logo"
					/>
					<img
						className="max-w-[120px] lg:max-w-full"
						src="/partner-2.svg"
						alt="partner logo"
					/>
					<img
						className="max-w-[82px] lg:max-w-full"
						src="/partner-3.svg"
						alt="partner logo"
					/>
					<img
						className="max-w-[82px] lg:max-w-full"
						src="/partner-4.svg"
						alt="partner logo"
					/>
				</div>
			</div>
		</section>
	)
}

export default Partners
