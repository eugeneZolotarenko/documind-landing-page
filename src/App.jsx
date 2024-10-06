import ChatTools from './components/sections/ChatTools'
import Header from './components/Header'
import AskQuestion from './components/sections/AskQuestion'
import ChatBot from './components/sections/ChatBot'
import Automation from './components/sections/Automation'
import Benefits from './components/sections/Benefits'

function App() {
	return (
		<>
			<div className="relative">
				<Header />
				<main>
					{/* <Hero /> */}
					{/* <HowItWotks /> */}
					{/* <Features /> */}
					<ChatTools />
					<AskQuestion />
					<ChatBot />
					<Automation />
					<Benefits />
				</main>
			</div>
		</>
	)
}

export default App
