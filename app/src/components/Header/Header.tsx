import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import './Header.scss'

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
	const menuRef = useRef<HTMLDivElement>(null)
	const location = useLocation()

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
						<li className={location.pathname === '/' ? 'active' : ''}>
							<Link to='/'>Home</Link>
						</li>
						<li
							className={`characters-menu ${
								location.pathname.startsWith('/characters') ? 'active' : ''
							}`}
						>
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
								<Link
									to='/characters/anime'
									className={
										location.pathname === '/characters/anime' ? 'active' : ''
									}
								>
									Anime
								</Link>
								<div className={'submenu__divider'}></div>
								<Link
									to='/characters/manga'
									className={
										location.pathname === '/characters/manga' ? 'active' : ''
									}
								>
									Manga
								</Link>
							</div>
						</li>
						<li className={location.pathname === '/manga' ? 'active' : ''}>
							<Link to='/manga'>Manga</Link>
						</li>
						<li className={location.pathname === '/news' ? 'active' : ''}>
							<Link to='/news'>News</Link>
						</li>
					</ul>
					<Link to='/watch'>
						<button className='header__btn'>Watch Now</button>
					</Link>
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
