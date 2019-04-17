import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'gatsby'

import '../styles/navbar.scss'

const linksSectionTwo = [
  { to: '/istoriya-biblioteki', page: 'istoriya-biblioteki', title: 'История библиотеки' },
  { to: '/fotogalereya', page: 'fotogalereya', title: 'Фотогалерея' },
  { to: '/o-bibliotekare', page: 'o-bibliotekare', title: 'О библиотекаре' },
  { to: '/rezhim-raboty-biblioteki', page: 'rezhim-raboty-biblioteki', title: 'Режим работы библиотеки' }
]
const linksSectionThree = [
  { to: '/afisha', page: 'afisha', title: 'Афиша апреля 2019 года' },
  { to: '/afisha-semejnyj-klub-ot-vsej-dushi', page: 'afisha-semejnyj-klub-ot-vsej-dushi', title: 'Программа семейного клуба «От всей души»' },
  { to: '/afisha-kruzhok-biblionik', page: 'afisha-kruzhok-biblionik', title: 'Программа кружка «Библионик»' },
  { to: '/proshedshie-sobytiya-goda', page: 'proshedshie-sobytiya-goda', title: 'Прошедшие события 2019 года' }
]
const linksSectionFour = [
  { to: '/poleznye-ssylki', page: 'poleznye-ssylki', title: 'Полезные ссылки' },
  { to: '/bezopasnost-v-internete', page: 'bezopasnost-v-internete', title: 'Безопасность в Интернете' },
  { to: '/prejskurant-na-platnye-uslugi', page: 'prejskurant-na-platnye-uslugi', title: 'Прейскурант цен на платные услуги' }
]

function showNavbarLinks(event) {
  let navbarLinks

  if (event.target.className === 'section-title') {
    navbarLinks = ReactDOM.findDOMNode(event.target).nextElementSibling
  }

  if (navbarLinks) {
    navbarLinks.style.display = 'block'
  }
}

function hideNavbarLinks(event) {
  let parent = ReactDOM.findDOMNode(event.target).parentNode
  let navbarLinks

  if (event.target.className === 'section-title') {
    navbarLinks = ReactDOM.findDOMNode(event.target).nextElementSibling
  } else if (parent.className === 'section-links') {
    navbarLinks = parent
  }

  if (navbarLinks) {
    navbarLinks.style.display = 'none'
  }
}

const Navbar = () => (
  <div id='navbar'>
    <div className='navbar-section'>
      <Link to='/' key='index' className='section-title'>
        Главная
      </Link>
    </div>

    <div className='navbar-section'
         onMouseEnter={showNavbarLinks} onMouseLeave={hideNavbarLinks}
    >
      <p className='section-title'>О библиотеке <span>&#9662;</span></p>
      <nav className='section-links'>
        {linksSectionTwo.map(link => {
          const { to, page, title } = link

          return (
            <Link to={to} key={page}>
              {title}
            </Link>
          )
        })}
      </nav>
    </div>

    <div className='navbar-section'
         onMouseEnter={showNavbarLinks} onMouseLeave={hideNavbarLinks}
    >
      <p className='section-title'>Новости и события <span>&#9662;</span></p>
      <nav className='section-links'>
        {linksSectionThree.map(link => {
          const { to, page, title } = link

          return (
            <Link to={to} key={page}>
              {title}
            </Link>
          )
        })}
      </nav>
    </div>

    <div className='navbar-section'
         onMouseEnter={showNavbarLinks} onMouseLeave={hideNavbarLinks}
    >
      <p className='section-title'>Услуги <span>&#9662;</span></p>
      <nav className='section-links'>
        {linksSectionFour.map(link => {
          const { to, page, title } = link

          return (
            <Link to={to} key={page}>
              {title}
            </Link>
          )
        })}
      </nav>
    </div>

    <div className='navbar-section'>
      <Link to='/karta-sajta' key='karta-sajta' className='section-title'>
        Карта сайта
      </Link>
    </div>
  </div>
)

export default Navbar
