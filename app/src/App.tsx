import './App.scss'
import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import NotFound from './components/NotFound/NotFound'
import Rating from './components/Rating/Rating'
// import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<Router>
			<Header />
			<main>
				<Routes>
					<Route
						path='/'
						element={
							<>
								<Hero />
								<Rating />
							</>
						}
					/>
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
			{/* <Footer /> */}
		</Router>
	)
}

export default App
