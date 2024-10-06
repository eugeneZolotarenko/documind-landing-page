const FeatureBlock = ({ feature }) => {
	return (
		<div className="flex items-center gap-3 rounded-2xl border border-greyscale-200 p-4 md:gap-6 md:p-6">
			<img className="size-8 md:size-10" src={feature.iconUrl} alt="image" />
			<p className="font-semibold text-greyscale-950 md:text-2xl">
				{feature.title}
			</p>
		</div>
	)
}

export default FeatureBlock
