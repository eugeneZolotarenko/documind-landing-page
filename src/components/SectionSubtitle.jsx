import React from 'react'

const SectionSubtitle = ({ children }) => {
	return (
		<div className="flex max-w-fit items-center gap-2 rounded-full border border-greyscale-200 px-[14px] py-2 text-xs font-medium leading-none">
			<img src="/star-icon.svg" alt="star icon" />
			{children}
			<img src="/star-icon.svg" alt="star icon" />
		</div>
	)
}

export default SectionSubtitle
