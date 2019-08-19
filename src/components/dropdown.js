import React, { Component } from 'react'
import { Link } from 'gatsby'

import '../styles/header/dropdown.scss'

import { linksSectionTwo, linksSectionThree, linksSectionFour } from '../lists/menu'

class Dropdown extends Component {
  constructor(props) {
    super(props)

    this.toggleDropdownSectionTabIndex = this.toggleDropdownSectionTabIndex.bind(this)
    this.toggleDropdownLinksTabIndex = this.toggleDropdownLinksTabIndex.bind(this)
    this.toggleBurgerOnKeyPress = this.toggleBurgerOnKeyPress.bind(this)
    this.toggleBurger = this.toggleBurger.bind(this)
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.findLinksElement = this.findLinksElement.bind(this)
    this.toggleDropdownLinks = this.toggleDropdownLinks.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.toggleDropdownSectionTabIndex)
    this.toggleDropdownSectionTabIndex()
  }

  toggleDropdownSectionTabIndex() {
    const burger = document.querySelector('.dropdown__burger')
  	const dropdownSections = document.querySelectorAll('.dropdown__section')

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
    const dropdownLinks = document.querySelectorAll('.dropdown__section-links a')

    if (isOpen) {
      dropdownLinks.forEach(link => link.setAttribute('tabIndex', '0'))
    } else {
      dropdownLinks.forEach(link => link.setAttribute('tabIndex', '-1'))
    }
  }

  toggleBurgerOnKeyPress(event) {
  	if (event.key !== 'Enter') return;

    this.toggleBurger(event)
  }

  toggleBurger(event) {
  	let parent = event.target.parentNode

  	if (event.target.className === 'dropdown__burger' || parent.className === 'dropdown__burger') {
  		const burgerSpans = document.querySelectorAll('.dropdown__burger span')

  		burgerSpans[0].classList.toggle('span-one_active')
  		burgerSpans[2].classList.toggle('span-three_active')
  		setTimeout(() => {
  			burgerSpans[1].classList.toggle('span-two_active')
  		}, 200)
  		this.toggleDropdown()
  	}
  }

  toggleDropdown() {
  	const dropdownMenu = document.querySelector('.dropdown__menu')

  	if (dropdownMenu.className.match('closed')) {
      dropdownMenu.classList.remove('closed')
      dropdownMenu.classList.add('opened')
  	} else {
      dropdownMenu.classList.remove('opened')
      dropdownMenu.classList.add('closed')
  	}
  }

  findLinksElement(event) {
    let target = event.target
    let dropdownLinks

    if (target.className === 'dropdown__section') {
      dropdownLinks = target.children[1]
    } else if (target.className === 'dropdown__section-title') {
      dropdownLinks = target.nextElementSibling
    } else if (target.parentNode.className === 'dropdown__section-title') {
      dropdownLinks = target.parentNode.nextElementSibling
    }

    this.toggleDropdownLinks(dropdownLinks)
  }

  toggleDropdownLinks(dropdownLinks) {
    if (dropdownLinks.className.match('closed')) {
      dropdownLinks.classList.remove('closed')
      dropdownLinks.classList.add('opened')
      this.toggleDropdownLinksTabIndex(true)
    } else {
      dropdownLinks.classList.remove('opened')
      dropdownLinks.classList.add('closed')
      this.toggleDropdownLinksTabIndex(false)
    }
  }

  render() {
    return (
      <div className='dropdown'>
        <div tabIndex='-1' className='dropdown__burger'
              onKeyPress={this.toggleBurgerOnKeyPress} onClick={this.toggleBurger}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className='dropdown__menu closed'>
          <div className='dropdown__section'>
            <Link to='/' key='index' tabIndex='-1' className='dropdown__section-title'>
              Главная
            </Link>
          </div>

          <div tabIndex='-1' className='dropdown__section'
               onKeyPress={this.findLinksElement} onClick={this.findLinksElement}
          >
            <p className='dropdown__section-title'>О библиотеке <span>&#9662;</span></p>
            <nav className='dropdown__section-links closed'>
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

          <div tabIndex='-1' className='dropdown__section'
               onKeyPress={this.findLinksElement} onClick={this.findLinksElement}
          >
            <p className='dropdown__section-title'>Новости и события <span>&#9662;</span></p>
            <nav className='dropdown__section-links closed'>
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

          <div tabIndex='-1' className='dropdown__section'
               onKeyPress={this.findLinksElement} onClick={this.findLinksElement}
          >
            <p className='dropdown__section-title'>Услуги <span>&#9662;</span></p>
            <nav className='dropdown__section-links closed'>
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

          <div className='dropdown__section'>
            <Link to='/karta-sajta' key='karta-sajta' tabIndex='-1' className='dropdown__section-title'>
              Карта сайта
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Dropdown
