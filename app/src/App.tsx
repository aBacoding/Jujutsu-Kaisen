import './App.scss'
import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<Router>
			<Header />
			<main>
				<Hero />
				<Routes>{/* <Route path='/' element={<Hero />} /> */}</Routes>
			</main>
		</Router>
	)
}

export default App
