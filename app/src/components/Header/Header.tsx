import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
	const menuRef = useRef<HTMLDivElement>(null)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const toggleSubMenu = () => {
		setIsSubMenuOpen(!isSubMenuOpen)
	}

	const handleClickOutside = (event: MouseEvent) => {
		if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
			setIsMenuOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<div className={'header__container container'}>
			<header className='header'>
				<div className='header__logo'>
					<Link to='/'>
						<img src='../../../image/logo.png' alt='Logo' />
					</Link>
				</div>
				<nav
					ref={menuRef}
					className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
				>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li className='characters-menu'>
							<span onClick={toggleSubMenu}>
								Characters&nbsp;
								<FontAwesomeIcon
									icon={isSubMenuOpen ? faAngleUp : faAngleDown}
								/>
							</span>
							<div
								className={`characters-submenu ${
									isSubMenuOpen ? 'header__nav__submenu--open' : ''
								}`}
							>
								<Link to='/characters/anime'>Anime</Link>
								<div className={'submenu__divider'}></div>
								<Link to='/characters/manga'>Manga</Link>
							</div>
						</li>
						<li>
							<Link to='/manga'>Manga</Link>
						</li>
						<li>
							<Link to='/news'>News</Link>
						</li>
					</ul>
					<button className='header__btn'>Watch Now</button>
				</nav>
				<div className='burger' onClick={toggleMenu}>
					<div className='burger__line'></div>
					<div className='burger__line'></div>
					<div className='burger__line'></div>
				</div>
			</header>
		</div>
	)
}

export default Header
