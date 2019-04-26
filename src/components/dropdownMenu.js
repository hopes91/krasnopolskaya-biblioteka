import React, { Component } from 'react'
import { Link } from 'gatsby'

import '../styles/dropdownMenu.scss'

const linksSectionTwo = [
  { to: '/istoriya-biblioteki', page: 'istoriya-biblioteki', title: 'История библиотеки' },
  { to: '/fotogalereya', page: 'fotogalereya', title: 'Фотогалерея' },
  { to: '/o-bibliotekare', page: 'o-bibliotekare', title: 'О библиотекаре' },
  { to: '/rezhim-raboty-biblioteki', page: 'rezhim-raboty-biblioteki', title: 'Режим работы библиотеки' }
]
const linksSectionThree = [
  { to: '/afisha', page: 'afisha', title: 'Афиша мая 2019 года' },
  { to: '/afisha-semejnyj-klub-ot-vsej-dushi', page: 'afisha-semejnyj-klub-ot-vsej-dushi', title: 'Программа семейного клуба «От всей души»' },
  { to: '/afisha-kruzhok-biblionik', page: 'afisha-kruzhok-biblionik', title: 'Программа кружка «Библионик»' },
  { to: '/proshedshie-sobytiya-goda', page: 'proshedshie-sobytiya-goda', title: 'Прошедшие события 2019 года' }
]
const linksSectionFour = [
  { to: '/poleznye-ssylki', page: 'poleznye-ssylki', title: 'Полезные ссылки' },
  { to: '/bezopasnost-v-internete', page: 'bezopasnost-v-internete', title: 'Безопасность в Интернете' },
  { to: '/prejskurant-na-platnye-uslugi', page: 'prejskurant-na-platnye-uslugi', title: 'Прейскурант цен на платные услуги' }
]

class DropdownMenu extends Component {
  constructor(props) {
    super(props)

    this.toggleDropdownSectionTabIndex = this.toggleDropdownSectionTabIndex.bind(this)
    this.toggleDropdownLinksTabIndex = this.toggleDropdownLinksTabIndex.bind(this)
    this.toggleBurgerOnKeyDown = this.toggleBurgerOnKeyDown.bind(this)
    this.toggleBurger = this.toggleBurger.bind(this)
    this.toggleDropdownMenu = this.toggleDropdownMenu.bind(this)
    this.toggleDropdownLinks = this.toggleDropdownLinks.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.toggleDropdownSectionTabIndex)
    this.toggleDropdownSectionTabIndex()
  }

  toggleDropdownSectionTabIndex() {
    const burger = document.getElementById('dropdown__burger')
  	const dropdownSections = document.querySelectorAll('.dropdown-section')

    if (window.innerWidth > 800) {
    	burger.setAttribute('tabIndex', '-1')
      dropdownSections.forEach(section => {
        if (section.hasAttribute('tabIndex')) {
          section.setAttribute('tabIndex', '-1')
        } else {
          section.children[0].setAttribute('tabIndex', '-1')
        }
      })
    } else if (window.innerWidth <= 800) {
    	burger.setAttribute('tabIndex', '1')
      dropdownSections.forEach(section => {
        if (section.hasAttribute('tabIndex')) {
          section.setAttribute('tabIndex', '0')
        } else {
          section.children[0].setAttribute('tabIndex', '0')
        }
      })
    }
  }

  toggleDropdownLinksTabIndex(isOpen) {
    const dropdownLinks = document.querySelectorAll('.section-links a')

    if (isOpen) {
      dropdownLinks.forEach(link => link.setAttribute('tabIndex', '0'))
    } else {
      dropdownLinks.forEach(link => link.setAttribute('tabIndex', '-1'))
    }
  }

  toggleBurgerOnKeyDown(event) {
  	if (event.key === 'Enter') {
      this.toggleBurger(event)
    }
  }

  toggleBurger(event) {
  	let parentId = event.target.parentNode.id

  	if (event.target.id === 'dropdown__burger' || parentId === 'dropdown__burger') {
  		const burgerSpans = document.querySelectorAll('#dropdown__burger span')

  		burgerSpans[0].classList.toggle('span-one-active')
  		burgerSpans[2].classList.toggle('span-three-active')
  		setTimeout(() => {
  			burgerSpans[1].classList.toggle('span-two-active')
  		}, 200)

  		this.toggleDropdownMenu()
  	}
  }

  toggleDropdownMenu() {
  	const dropdownMenu = document.getElementById('dropdown__menu')

  	if (dropdownMenu.style.display === 'block') {
  		dropdownMenu.style.display = 'none'
  	} else {
  		dropdownMenu.style.display = 'block'
  	}
  }

  toggleDropdownLinks(event) {
    if (event.target.className === 'dropdown-section') {
      let dropdownLinks = event.target.children[1]

      if (dropdownLinks.style.display === 'block') {
        dropdownLinks.style.display = 'none'
        this.toggleDropdownLinksTabIndex(false)
      } else {
        dropdownLinks.style.display = 'block'
        this.toggleDropdownLinksTabIndex(true)
      }
    } else if (event.target.className === 'section-title') {
      let dropdownLinks = event.target.nextElementSibling

      if (dropdownLinks.style.display === 'block') {
        dropdownLinks.style.display = 'none'
        this.toggleDropdownLinksTabIndex(false)
      } else {
        dropdownLinks.style.display = 'block'
        this.toggleDropdownLinksTabIndex(true)
      }
    }
  }

  render() {
    return (
      <div id='dropdown'>
        <div tabIndex='-1' id='dropdown__burger'
              onKeyDown={this.toggleBurgerOnKeyDown} onClick={this.toggleBurger}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div id='dropdown__menu'>
          <div className='dropdown-section'>
            <Link to='/' key='index' tabIndex='-1' className='section-title'>
              Главная
            </Link>
          </div>

          <div tabIndex='-1' className='dropdown-section'
               onKeyDown={this.toggleDropdownLinks} onClick={this.toggleDropdownLinks}
          >
            <p className='section-title'>О библиотеке <span>&#9662;</span></p>
            <nav className='section-links'>
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

          <div tabIndex='-1' className='dropdown-section'
               onKeyDown={this.toggleDropdownLinks} onClick={this.toggleDropdownLinks}
          >
            <p className='section-title'>Новости и события <span>&#9662;</span></p>
            <nav className='section-links'>
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

          <div tabIndex='-1' className='dropdown-section'
               onKeyDown={this.toggleDropdownLinks} onClick={this.toggleDropdownLinks}
          >
            <p className='section-title'>Услуги <span>&#9662;</span></p>
            <nav className='section-links'>
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

          <div className='dropdown-section'>
            <Link to='/karta-sajta' key='karta-sajta' tabIndex='-1' className='section-title'>
              Карта сайта
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default DropdownMenu
