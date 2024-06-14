import './App.scss'
import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<Router>
			<Header />
			<main>
				<Routes>
					{/* <Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} /> */}
				</Routes>
			</main>
		</Router>
	)
}

export default App
