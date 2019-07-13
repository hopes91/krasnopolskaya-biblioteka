import React, { Component } from 'react'
import { Link } from 'gatsby'

import '../styles/header/navbar.scss'

const linksSectionTwo = [
  { to: '/istoriya-biblioteki', page: 'istoriya-biblioteki', title: 'История библиотеки' },
  { to: '/fotogalereya', page: 'fotogalereya', title: 'Фотогалерея' },
  { to: '/o-bibliotekare', page: 'o-bibliotekare', title: 'О библиотекаре' },
  { to: '/rezhim-raboty-biblioteki', page: 'rezhim-raboty-biblioteki', title: 'Режим работы библиотеки' }
]
const linksSectionThree = [
  { to: '/afisha', page: 'afisha', title: 'Афиша лета 2019 года' },
  { to: '/afisha-semejnyj-klub-ot-vsej-dushi', page: 'afisha-semejnyj-klub-ot-vsej-dushi', title: 'Программа семейного клуба «От всей души»' },
  { to: '/afisha-kruzhok-biblionik', page: 'afisha-kruzhok-biblionik', title: 'Программа кружка «Библионик»' },
  { to: '/proshedshie-sobytiya-goda', page: 'proshedshie-sobytiya-goda', title: 'Прошедшие события 2019 года' }
]
const linksSectionFour = [
  { to: '/poleznye-ssylki', page: 'poleznye-ssylki', title: 'Полезные ссылки' },
  { to: '/bezopasnost-v-internete', page: 'bezopasnost-v-internete', title: 'Безопасность в Интернете' }
]

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.toggleNavbarTabIndex = this.toggleNavbarTabIndex.bind(this)
    this.toggleNavbarLinksTabIndex = this.toggleNavbarLinksTabIndex.bind(this)
    this.toggleNavbarLinksOnKeyPress = this.toggleNavbarLinksOnKeyPress.bind(this)
    this.showNavbarLinks = this.showNavbarLinks.bind(this)
    this.hideNavbarLinks = this.hideNavbarLinks.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.toggleNavbarTabIndex)
    this.toggleNavbarTabIndex()
  }

  toggleNavbarTabIndex() {
    const navbarSections = document.querySelectorAll('.navbar__section')

    if (window.innerWidth > 800) {
      navbarSections.forEach(section => {
        if (section.hasAttribute('tabindex')) {
          section.setAttribute('tabindex', '0')
        } else {
          section.children[0].setAttribute('tabindex', '0')
        }
      })
    } else if (window.innerWidth <= 800) {
      navbarSections.forEach(section => {
        if (section.hasAttribute('tabindex')) {
          section.setAttribute('tabindex', '-1')
        } else {
          section.children[0].setAttribute('tabindex', '-1')
        }
      })
    }
  }

  toggleNavbarLinksTabIndex(isOpen) {
    const navbarLinks = document.querySelectorAll('.navbar__section-links a')

    if (isOpen) {
      navbarLinks.forEach(link => link.setAttribute('tabIndex', '0'))
    } else {
      navbarLinks.forEach(link => link.setAttribute('tabIndex', '-1'))
    }
  }

  toggleNavbarLinksOnKeyPress(event) {
    if (event.key !== 'Enter') return;

    this.showNavbarLinks(event)
  }

  showNavbarLinks(event) {
    let target = event.target
    let navbarLinks

    if (target.className === 'navbar__section') {
      navbarLinks = target.children[1]
    } else if (target.className === 'navbar__section-title') {
      navbarLinks = target.nextElementSibling
    }

    if (navbarLinks.className.match('closed')) {
      navbarLinks.classList.remove('closed')
      navbarLinks.classList.add('opened')
      this.toggleNavbarLinksTabIndex(true)
    }
  }

  hideNavbarLinks(event) {
    let target = event.target
    let parent = target.parentNode
    let navbarLinks

    if (target.className === 'navbar__section-title') {
      navbarLinks = target.nextElementSibling
    } else if (target.className.match('links')) {
      navbarLinks = target
    } else if (parent.className.match('links')) {
      navbarLinks = parent
    }

    if (navbarLinks.className.match('opened')) {
      navbarLinks.classList.remove('opened')
      navbarLinks.classList.add('closed')
      this.toggleNavbarLinksTabIndex(false)
    }
  }

  render() {
    return (
      <div className='navbar'>
        <div className='navbar__section'>
          <Link to='/' key='index' tabIndex='0' className='navbar__section-title'>
            Главная
          </Link>
        </div>

        <div tabIndex='0' className='navbar__section'
             onKeyPress={this.toggleNavbarLinksOnKeyPress} onMouseEnter={this.showNavbarLinks} onMouseLeave={this.hideNavbarLinks}
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
             onKeyPress={this.toggleNavbarLinksOnKeyPress} onMouseEnter={this.showNavbarLinks} onMouseLeave={this.hideNavbarLinks}
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
             onKeyPress={this.toggleNavbarLinksOnKeyPress} onMouseEnter={this.showNavbarLinks} onMouseLeave={this.hideNavbarLinks}
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
}

export default Navbar
