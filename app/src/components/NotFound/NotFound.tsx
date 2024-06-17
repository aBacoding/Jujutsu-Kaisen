import React from 'react'
import './NotFound.scss'
import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
	return (
		<section className='not-found'>
			<div className='not-found__container container'>
				<div className='not-found__content'>
					<img
						className='not-found__title'
						src='../../image/404.png'
						alt='404'
					></img>
					<h1 className='not-found__subtitle'>Boo! Page missing!</h1>
					<p className='not-found__description'>
						Whoops! This page must be a ghost - it's not here!
					</p>
					<Link to='/'>
						<button className='not-found__button'>Go to Homepage</button>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default NotFound
