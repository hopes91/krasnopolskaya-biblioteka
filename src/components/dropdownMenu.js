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

const burger = document.getElementById('dropdown__burger')
const dropdownSections = document.querySelectorAll('.menu-section')

const toggleBurger = event => {
	let parentId = ReactDOM.findDOMNode(event.target).parentNode.id;

	if (event.target.id === 'dropdown__burger' || parentId === 'dropdown__burger') {
		let burgerSpans = document.querySelectorAll('#dropdown__burger span');

		burgerSpans[0].classList.toggle('span-one-active');
		burgerSpans[2].classList.toggle('span-three-active');
		setTimeout(() => {
			burgerSpans[1].classList.toggle('span-two-active');
		}, 200);

		toggleDropdownMenu();
	}
}

const toggleDropdownMenu = () => {
	let dropdownMenu = document.getElementById('dropdown__menu');

	if (dropdownMenu.style.display === '' || dropdownMenu.style.display === 'none') {
		dropdownMenu.style.display = 'block'
	} else {
		dropdownMenu.style.display = 'none'
	}
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
  <div id='dropdown'>
    <div id='dropdown__burger' onClick={toggleBurger}>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div id='dropdown__menu'>
      <div className='menu-section'>
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

      <div className='menu-section'>
        <Link to='/karta-sajta' key='karta-sajta' className='section-title'>
          Карта сайта
        </Link>
      </div>
    </div>
  </div>
)

export default DropdownMenu
