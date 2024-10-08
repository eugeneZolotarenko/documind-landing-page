import ChatTools from './components/sections/ChatTools'
import Header from './components/Header'
import AskQuestion from './components/sections/AskQuestion'
import ChatBot from './components/sections/ChatBot'
import Automation from './components/sections/Automation'
import Benefits from './components/sections/Benefits'
import Statistic from './components/sections/Statistic'
import Faq from './components/sections/Faq'
import Cta from './components/sections/Cta'
import Footer from './components/Footer'
import Features from './components/sections/Features'

function App() {
	return (
		<>
			<div className="relative">
				<Header />

				<main>
					{/* <Hero /> */}
					{/* <HowItWotks /> */}
					<Features />
					<ChatTools />
					<AskQuestion />
					<ChatBot />
					<Automation />
					<Benefits />
					<Statistic />
					<Faq />
					<Cta />
				</main>

				<div className="-mt-[116px] bg-greyscale-50 pt-[140px] lg:-mt-[200px] lg:pt-[255px]">
					<Footer />
				</div>
			</div>
		</>
	)
}

export default App
