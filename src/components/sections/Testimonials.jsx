import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SectionSubtitle from '../SectionSubtitle'
import SectionTitle from '../SectionTitle'
import { motion } from 'framer-motion'

const Testimonials = () => {
	return (
		<section>
			<div className="container">
				<div className="flex flex-col items-center gap-4">
					<SectionSubtitle>Testimonial</SectionSubtitle>
					<SectionTitle>Don't Just Take Our Word for it!</SectionTitle>
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
						Tens of thousands of students and professionals benefit from
						Documind everyday.
					</motion.p>
				</div>
			</div>
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
				className="mt-10 sm:container"
			>
				<Swiper
					breakpoints={{
						320: {
							slidesPerView: 1.2,
							spaceBetween: 12,
							centeredSlides: true,
						},
						600: {
							slidesPerView: 2,
							spaceBetween: 12,
							centeredSlides: false,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 24,
							centeredSlides: false,
						},
					}}
				>
					<SwiperSlide>
						<div className="space-y-6">
							<div className="relative z-0 overflow-hidden rounded-3xl bg-[url('/slide-big-1.png')] bg-cover bg-center bg-no-repeat p-6 after:pointer-events-none after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:bg-black-gradient">
								<div className="mt-[180px] flex items-center justify-between gap-[10px] sm:mt-[220px] xl:mt-[300px]">
									<div>
										<div className="flex gap-[10px]">
											<div className="size-10 overflow-hidden rounded-full">
												<img src="/testimonial-avatar-1.png" alt="avatar" />
											</div>
											<div>
												<p className="text-sm font-semibold text-white">
													Cody Fisher
												</p>
												<p className="text-sm text-white/70">@codyfisher</p>
											</div>
										</div>
										<img className="mt-4" src="/stars.svg" alt="stars" />
									</div>

									<a href="/">
										<img src="/play-circle.svg" alt="plau button" />
									</a>
								</div>
							</div>

							<div className="flex flex-col rounded-3xl border border-greyscale-100 bg-greyscale-50 p-4 lg:p-8">
								<div className="flex gap-2">
									<img
										className="w-[108px]"
										src="/stars-rounded.svg"
										alt="stars"
									/>
									<p className="font-medium text-greyscale-600">4.8</p>
								</div>
								<p className="mt-4 leading-normal tracking-[-0.32px] text-greyscale-950 lg:text-lg">
									“Commodo varius sed gravida vulputate et pharetra ultrices
									massa. Venenatis scelerisque suspendisse cursus aliquet
									tincidunt quam cum. Eget at velit tortor aliquet donec. At.”
								</p>

								<div className="mt-4 flex gap-3 lg:mt-10">
									<div className="size-12 overflow-hidden rounded-full">
										<img src="/testimonial-avatar-4.png" alt="avatar" />
									</div>
									<div>
										<p className="font-semibold text-greyscale-950">
											Charolette Hanlin
										</p>
										<p className="text-sm text-greyscale-600">
											Co-Founder, Heroes Digital
										</p>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="space-y-6">
							<div className="relative z-0 overflow-hidden rounded-3xl bg-[url('/slide-big-2.png')] bg-cover bg-center bg-no-repeat p-6 after:pointer-events-none after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:bg-black-gradient">
								<div className="mt-[180px] flex items-center justify-between gap-[10px] sm:mt-[220px] xl:mt-[300px]">
									<div className="">
										<div className="flex gap-[10px]">
											<div className="size-10 overflow-hidden rounded-full">
												<img src="/testimonial-avatar-2.png" alt="avatar" />
											</div>
											<div>
												<p className="text-sm font-semibold text-white">
													Robert Fox
												</p>
												<p className="text-sm text-white/70">@robertfox</p>
											</div>
										</div>
										<img className="mt-4" src="/stars.svg" alt="stars" />
									</div>

									<a href="/">
										<img src="/play-circle.svg" alt="plau button" />
									</a>
								</div>
							</div>

							<div className="flex flex-col rounded-3xl p-4 lg:p-8">
								<div className="flex gap-2">
									<img
										className="w-[108px]"
										src="/stars-rounded.svg"
										alt="stars"
									/>
									<p className="font-medium text-greyscale-600">4.8</p>
								</div>
								<p className="mt-4 leading-normal tracking-[-0.32px] text-greyscale-950 lg:text-lg">
									“Semper vel ut egestas viverra aliquet praesent. Tincidunt
									scelerisque mi tempus enim quam orci quisque aliquam.
									Imperdiet lectus amet vitae pellentesque pulvinar vulputate.”
								</p>

								<div className="mt-4 flex gap-3 lg:mt-10">
									<div className="size-12 overflow-hidden rounded-full">
										<img src="/testimonial-avatar-5.png" alt="avatar" />
									</div>
									<div>
										<p className="font-semibold text-greyscale-950">
											Novák Balázs
										</p>
										<p className="text-sm text-greyscale-600">
											Co-Founder, WoCommerce
										</p>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="space-y-6">
							<div className="relative z-0 overflow-hidden rounded-3xl bg-[url('/slide-big-3.png')] bg-cover bg-center bg-no-repeat p-6 after:pointer-events-none after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:bg-black-gradient">
								<div className="mt-[180px] flex items-center justify-between gap-[10px] sm:mt-[220px] xl:mt-[300px]">
									<div className="">
										<div className="flex gap-[10px]">
											<div className="size-10 overflow-hidden rounded-full">
												<img src="/testimonial-avatar-3.png" alt="avatar" />
											</div>
											<div>
												<p className="text-sm font-semibold text-white">
													Annette Black
												</p>
												<p className="text-sm text-white/70">@annette</p>
											</div>
										</div>
										<img className="mt-4" src="/stars.svg" alt="stars" />
									</div>

									<a href="/">
										<img src="/play-circle.svg" alt="plau button" />
									</a>
								</div>
							</div>
							<div className="flex flex-col rounded-3xl border border-greyscale-100 bg-greyscale-50 p-4 lg:p-8">
								<div className="flex gap-2">
									<img
										className="w-[108px]"
										src="/stars-rounded.svg"
										alt="stars"
									/>
									<p className="font-medium text-greyscale-600">4.8</p>
								</div>
								<p className="mt-4 leading-normal tracking-[-0.32px] text-greyscale-950 lg:text-lg">
									“Eu pulvinar nibh tristique in magna vitae suspendisse et.
									Commodo tortor vitae dolor diam et dignissim massa. Eu ut
									dolor proin fames rhoncus. Tincidunt blandit phasellus
									adipiscing.”
								</p>

								<div className="mt-4 flex gap-3 lg:mt-10">
									<div className="size-12 overflow-hidden rounded-full">
										<img src="/testimonial-avatar-6.png" alt="avatar" />
									</div>
									<div>
										<p className="font-semibold text-greyscale-950">
											Orosz Boldizsár
										</p>
										<p className="text-sm text-greyscale-600">Founder, Okta</p>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>

				<div className="mt-6 hidden grid-cols-3 gap-6 lg:grid">
					<div className="flex flex-col rounded-3xl p-4 lg:p-8">
						<div className="flex gap-2">
							<img className="w-[108px]" src="/stars-rounded.svg" alt="stars" />
							<p className="font-medium text-greyscale-600">4.8</p>
						</div>
						<p className="mt-4 leading-normal tracking-[-0.32px] text-greyscale-950 lg:text-lg">
							“Gravida ut sagittis sed leo bibendum. Vitae blandit nisi fames eu
							proin aenean sed amet nibh. Vel mauris sit pulvinar ut neque vel
							sapien. Sed risus faucibus gravida tristique vel non.”
						</p>

						<div className="mt-4 flex gap-3 lg:mt-10">
							<div className="size-12 overflow-hidden rounded-full">
								<img src="/testimonial-avatar-7.png" alt="avatar" />
							</div>
							<div>
								<p className="font-semibold text-greyscale-950">Floyd Miles</p>
								<p className="text-sm text-greyscale-600">Co-Founder, Slack</p>
							</div>
						</div>
					</div>

					<div className="flex flex-col rounded-3xl border border-greyscale-100 bg-greyscale-50 p-4 lg:p-8">
						<div className="flex gap-2">
							<img className="w-[108px]" src="/stars-rounded.svg" alt="stars" />
							<p className="font-medium text-greyscale-600">4.8</p>
						</div>
						<p className="mt-4 leading-normal tracking-[-0.32px] text-greyscale-950 lg:text-lg">
							“Augue ridiculus id purus enim velit. Nulla nibh commodo sed neque
							eget sapien pellentesque. Erat eget a et etiam at proin tristique
							et. Nulla risus ut sed platea magna imperdiet non.”
						</p>

						<div className="mt-4 flex gap-3 lg:mt-10">
							<div className="size-12 overflow-hidden rounded-full">
								<img src="/testimonial-avatar-8.png" alt="avatar" />
							</div>
							<div>
								<p className="font-semibold text-greyscale-950">
									Darrell Steward
								</p>
								<p className="text-sm text-greyscale-600">
									Co-Founder, Heroes Digital
								</p>
							</div>
						</div>
					</div>

					<div className="flex flex-col rounded-3xl p-4 lg:p-8">
						<div className="flex gap-2">
							<img className="w-[108px]" src="/stars-rounded.svg" alt="stars" />
							<p className="font-medium text-greyscale-600">4.8</p>
						</div>
						<p className="mt-4 leading-normal tracking-[-0.32px] text-greyscale-950 lg:text-lg">
							“Cursus sapien mauris ullamcorper urna. Euismod nulla gravida eu
							eleifend gravida sed et. Faucibus tristique amet sagittis cursus
							commodo morbi justo. Mollis viverra lectus ut lorem vel id.”
						</p>

						<div className="mt-4 flex gap-3 lg:mt-10">
							<div className="size-12 overflow-hidden rounded-full">
								<img src="/testimonial-avatar-9.png" alt="avatar" />
							</div>
							<div>
								<p className="font-semibold text-greyscale-950">Devon Lane</p>
								<p className="text-sm text-greyscale-600">Marketing, Google</p>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	)
}

export default Testimonials
