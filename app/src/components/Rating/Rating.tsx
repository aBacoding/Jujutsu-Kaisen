import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faPlay, faStar } from '@fortawesome/free-solid-svg-icons'
import './Rating.scss'
import { Link } from 'react-router-dom'

const Rating: React.FC = () => {
	const stars = Array(5)
		.fill(0)
		.map((_, i) => (
			<FontAwesomeIcon key={i} icon={faStar} className='rating__star' />
		))

	return (
		<section className='rating'>
			<div className={'rating__container container'}>
				<div className='rating__content'>
					<div className='rating__left'>
						<img
							src='../../../image/jjk_rating.jpg'
							alt='Jujutsu Kaisen'
							className='rating__left__image'
						/>
					</div>
					<div className='rating__right'>
						<h1 className='rating__title'>
							<span className='rating__title__number'>#1</span>
							&nbsp;Most Popular in 2024
						</h1>
						<div className='rating__awards'>
							<div className='rating__award__item'>
								<img
									src='../../../image/anime_award_icon.png'
									alt='Anime Awards Icon'
									className='rating__award__img'
								/>
								<span className='rating__award__title'>
									2024 Anime Awards Winner
								</span>
							</div>
						</div>
						<p className='rating__description'>
							A manga ongoing by Gege Akutami, it is published in Weekly Shonen
							Jump magazine. An anime adaptation by MAPPA was released shortly
							after the manga's initial release. The anime adaptation has two
							seasons, the first of which has 24 episodes, and the second began
							airing in July 2023. A prequel movie, Jujutsu Kaisen 0, was also
							made based on Jujutsu Kaisen.
						</p>
						<div className='rating__stats'>
							<div className='rating__stars'>{stars}</div>
							<div className='rating__divider'></div>
							<div className='rating__score'>
								Average rating&nbsp;
								<Link
									style={{ textDecoration: 'none' }}
									to='https://www.crunchyroll.com/ru/series/GRDV0019R/jujutsu-kaisen'
								>
									(Crunchyroll)
								</Link>
								: <strong>4.9 (396K)</strong>
							</div>
						</div>
						<div className='rating__buttons'>
							<Link to='/watch'>
								<button className='rating__watch__btn'>
									<FontAwesomeIcon icon={faPlay} />
									&nbsp; &nbsp; Watch Now
								</button>
							</Link>
							<Link to='/manga'>
								<button className='rating__manga__btn'>
									<FontAwesomeIcon icon={faBook} />
									&nbsp; &nbsp; Read Manga
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Rating
