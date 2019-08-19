import React, { useEffect } from 'react'
import { Link } from 'gatsby'

import '../styles/header/navbar.scss'

import { linksSectionTwo, linksSectionThree, linksSectionFour } from '../lists/menu'

const toggleNavbarTabIndex = () => {
  const navbarSections = document.querySelectorAll('.navbar__section')

  if (window.innerWidth <= 800) {
    navbarSections.forEach(section => {
      section.hasAttribute('tabindex') ?
        section.setAttribute('tabindex', '-1') :
        section.children[0].setAttribute('tabindex', '-1')
    })
  }

  navbarSections.forEach(section => {
    section.hasAttribute('tabindex') ?
      section.setAttribute('tabindex', '0') :
      section.children[0].setAttribute('tabindex', '0')
  })
}

const toggleNavbarLinksTabIndex = (isOpen) => {
  const navbarLinks = document.querySelectorAll('.navbar__section-links a')

  isOpen ?
    navbarLinks.forEach(link => link.setAttribute('tabIndex', '0')) :
    navbarLinks.forEach(link => link.setAttribute('tabIndex', '-1'))
}

const toggleNavbarLinksOnKeyPress = (event) => {
  event.key === 'Enter' &&
    showNavbarLinks(event)
}

const showNavbarLinks = (event) => {
  const target = event.target
  let navbarLinks

  if (target.className === 'navbar__section') {
    navbarLinks = target.children[1]
  } else if (target.className === 'navbar__section-title') {
    navbarLinks = target.nextElementSibling
  }

  if (navbarLinks && navbarLinks.className.match('closed')) {
    navbarLinks.classList.remove('closed')
    navbarLinks.classList.add('opened')

    toggleNavbarLinksTabIndex(true)
  }
}

const hideNavbarLinks = (event) => {
  const target = event.target
  const parent = target.parentNode
  let navbarLinks

  if (target.className === 'navbar__section-title') {
    navbarLinks = target.nextElementSibling
  } else if (target.className.match('links')) {
    navbarLinks = target
  } else if (parent.className.match('links')) {
    navbarLinks = parent
  }

  if (navbarLinks && navbarLinks.className.match('opened')) {
    navbarLinks.classList.remove('opened')
    navbarLinks.classList.add('closed')

    toggleNavbarLinksTabIndex(false)
  }
}

const Navbar = () => {
  useEffect(() => {
    toggleNavbarTabIndex()
    window.addEventListener('resize', toggleNavbarTabIndex)
  })

  return (
    <div className='navbar'>
      <div className='navbar__section'>
        <Link to='/' key='index' tabIndex='0' className='navbar__section-title'>
          Главная
        </Link>
      </div>

      <div tabIndex='0' className='navbar__section'
           onKeyPress={toggleNavbarLinksOnKeyPress} onMouseEnter={showNavbarLinks} onMouseLeave={hideNavbarLinks}
      >
        <p className='navbar__section-title'>О библиотеке <span>&#9662;</span></p>
        <nav className='navbar__section-links closed'>
          {linksSectionTwo.map(link => {
            const { to, page, title } = link

            return (
              <Link to={to} key={page} tabIndex='-1'>
                {title}
              </Link>
            )
          })}
        </nav>
      </div>

      <div tabIndex='0' className='navbar__section'
           onKeyPress={toggleNavbarLinksOnKeyPress} onMouseEnter={showNavbarLinks} onMouseLeave={hideNavbarLinks}
      >
        <p className='navbar__section-title'>Новости и события <span>&#9662;</span></p>
        <nav className='navbar__section-links closed'>
          {linksSectionThree.map(link => {
            const { to, page, title } = link

            return (
              <Link to={to} key={page} tabIndex='-1'>
                {title}
              </Link>
            )
          })}
        </nav>
      </div>

      <div tabIndex='0' className='navbar__section'
           onKeyPress={toggleNavbarLinksOnKeyPress} onMouseEnter={showNavbarLinks} onMouseLeave={hideNavbarLinks}
      >
        <p className='navbar__section-title'>Услуги <span>&#9662;</span></p>
        <nav className='navbar__section-links closed'>
          {linksSectionFour.map(link => {
            const { to, page, title } = link

            return (
              <Link to={to} key={page} tabIndex='-1'>
                {title}
              </Link>
            )
          })}
        </nav>
      </div>

      <div className='navbar__section'>
        <Link to='/karta-sajta' key='karta-sajta' tabIndex='0' className='navbar__section-title'>
          Карта сайта
        </Link>
      </div>
    </div>
  )
}

export default Navbar
