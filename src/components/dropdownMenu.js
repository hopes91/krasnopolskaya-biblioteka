import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'gatsby'

import '../styles/dropdownMenu.scss'

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

const burgerSpans = document.querySelectorAll('#dropdown__burger span')
const dropdownMenu = document.getElementById('dropdown__menu')

const toggleDropdown = event => {
  let parentId = ReactDOM.findDOMNode(event.target).parentNode.id
  const dropdownBurger = document.getElementById('dropdown__burger')

  if (event.target === dropdownBurger || parentId === 'dropdown__burger') {
    showDropdown()
  } else if (event.target === dropdownMenu) {
    hideDropdown()
  }
}

const showDropdown = () => {
  burgerSpans[0].className = 'span-one-active'
  burgerSpans[2].className = 'span-three-active'
  setTimeout(() => {
    burgerSpans[1].className = 'span-two-active'
  }, 200)

  dropdownMenu.style.display = 'block'
}

const hideDropdown = () => {
  burgerSpans[0].className = ''
  burgerSpans[2].className = ''
  setTimeout(() => {
    burgerSpans[1].className = ''
  }, 200)

  dropdownMenu.style.display = 'none'
}

const toggleDropdownLinks = event => {
  let parent = ReactDOM.findDOMNode(event.target).parentNode

  if (event.target.className === 'section-title') {
    let dropdownLinks = ReactDOM.findDOMNode(event.target).nextElementSibling

    if (dropdownLinks.style.display === 'block') {
      dropdownLinks.style.display = 'none'
    } else {
      dropdownLinks.style.display = 'block'
    }
  } else if (parent.className === 'section-title') {
    let dropdownLinks = ReactDOM.findDOMNode(event.target).parentNode.nextElementSibling

    if (dropdownLinks.style.display === 'block') {
      dropdownLinks.style.display = 'none'
    } else {
      dropdownLinks.style.display = 'block'
    }
  }
}

const DropdownMenu = () => (
  <div id='dropdown' onClick={toggleDropdown}>
    <div id='dropdown__burger'>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div id='dropdown__menu'>
      <div className='menu-section' onClick={toggleDropdownLinks}>
        <Link to='/' key='index' className='section-title'>
          Главная
        </Link>
      </div>
      <div className='menu-section' onClick={toggleDropdownLinks}>
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
      <div className='menu-section' onClick={toggleDropdownLinks}>
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
      <div className='menu-section' onClick={toggleDropdownLinks}>
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
      <div className='menu-section' onClick={toggleDropdownLinks}>
        <Link to='/karta-sajta' key='karta-sajta' className='section-title'>
          Карта сайта
        </Link>
      </div>
    </div>
  </div>
)

export default DropdownMenu
