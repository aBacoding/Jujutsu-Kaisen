import './App.scss'
import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import NotFound from './components/NotFound/NotFound'
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
							</>
						}
					/>
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
		</Router>
	)
}

export default App
