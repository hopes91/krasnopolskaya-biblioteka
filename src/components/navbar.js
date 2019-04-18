import React, { Component } from 'react'
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

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.toggleNavbarTabIndex = this.toggleNavbarTabIndex.bind(this)
    this.showHideNavbarLinksOnKeyDown = this.showHideNavbarLinksOnKeyDown.bind(this)
    this.showNavbarLinks = this.showNavbarLinks.bind(this)
    this.hideNavbarLinks = this.hideNavbarLinks.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.toggleNavbarTabIndex)
    this.toggleNavbarTabIndex()
  }

  toggleNavbarTabIndex = () => {
    const navbarSections = document.querySelectorAll('.navbar-section')

    if (window.innerWidth > 800) {
      navbarSections.forEach(section => {
        if (section.hasAttribute('tabIndex')) {
          section.setAttribute('tabIndex', '0')
        } else {
          section.children[0].setAttribute('tabIndex', '0')
        }
      })
    } else if (window.innerWidth <= 800) {
      navbarSections.forEach(section => {
        if (section.hasAttribute('tabIndex')) {
          section.setAttribute('tabIndex', '-1')
        } else {
          section.children[0].setAttribute('tabIndex', '-1')
        }
      })
    }
  }

  showHideNavbarLinksOnKeyDown(event) {
    if (event.key === 'Enter') {
      let navbarLinks = event.target.children[1];

      if (navbarLinks.style.display === '' || navbarLinks.style.display === 'none') {
        navbarLinks.style.display = 'block'
      } else {
        navbarLinks.style.display = 'none'
      }
    }
  }

  showNavbarLinks(event) {
    let navbarLinks

    if (event.target.className === 'section-title') {
      navbarLinks = event.target.nextElementSibling
    }

    if (navbarLinks) {
      navbarLinks.style.display = 'block'
    }
  }

  hideNavbarLinks(event) {
    let parent = event.target.parentNode
    let navbarLinks

    if (event.target.className === 'section-title') {
      navbarLinks = event.target.nextElementSibling
    } else if (parent.className === 'section-links') {
      navbarLinks = parent
    }

    if (navbarLinks) {
      navbarLinks.style.display = 'none'
    }
  }

  render() {
    return (
      <div id='navbar'>
        <div className='navbar-section'>
          <Link to='/' key='index' tabIndex='0' className='section-title'>
            Главная
          </Link>
        </div>

        <div tabIndex='0' className='navbar-section'
             onKeyDown={this.showHideNavbarLinksOnKeyDown} onMouseEnter={this.showNavbarLinks} onMouseLeave={this.hideNavbarLinks}
        >
          <p className='section-title'>О библиотеке <span>&#9662;</span></p>
          <nav className='section-links'>
            {linksSectionTwo.map(link => {
              const { to, page, title } = link

              return (
                <Link to={to} key={page} tabIndex='0'>
                  {title}
                </Link>
              )
            })}
          </nav>
        </div>

        <div tabIndex='0' className='navbar-section'
             onKeyDown={this.showHideNavbarLinksOnKeyDown} onMouseEnter={this.showNavbarLinks} onMouseLeave={this.hideNavbarLinks}
        >
          <p className='section-title'>Новости и события <span>&#9662;</span></p>
          <nav className='section-links'>
            {linksSectionThree.map(link => {
              const { to, page, title } = link

              return (
                <Link to={to} key={page} tabIndex='0'>
                  {title}
                </Link>
              )
            })}
          </nav>
        </div>

        <div tabIndex='0' className='navbar-section'
             onKeyDown={this.showHideNavbarLinksOnKeyDown} onMouseEnter={this.showNavbarLinks} onMouseLeave={this.hideNavbarLinks}
        >
          <p className='section-title'>Услуги <span>&#9662;</span></p>
          <nav className='section-links'>
            {linksSectionFour.map(link => {
              const { to, page, title } = link

              return (
                <Link to={to} key={page} tabIndex='0'>
                  {title}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className='navbar-section'>
          <Link to='/karta-sajta' key='karta-sajta' tabIndex='0' className='section-title'>
            Карта сайта
          </Link>
        </div>
      </div>
    )
  }
}

export default Navbar
