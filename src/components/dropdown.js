import React, { useEffect } from 'react'
import { Link } from 'gatsby'

import '../styles/header/dropdown.scss'

import { linksSectionTwo, linksSectionThree, linksSectionFour } from '../lists/menu'

const toggleDropdownSectionTabIndex = () => {
  const burger = document.querySelector('.dropdown__burger')
  const dropdownSections = document.querySelectorAll('.dropdown__section')

  if (window.innerWidth > 800) {
    burger.setAttribute('tabIndex', '-1')
    dropdownSections.forEach(section => {
      section.hasAttribute('tabIndex') ?
        section.setAttribute('tabIndex', '-1') :
        section.children[0].setAttribute('tabIndex', '-1')
    })
  }

  burger.setAttribute('tabIndex', '1')
  dropdownSections.forEach(section => {
    section.hasAttribute('tabIndex') ?
      section.setAttribute('tabIndex', '0') :
      section.children[0].setAttribute('tabIndex', '0')
  })
}

const toggleDropdownLinksTabIndex = (isOpen) => {
  const dropdownLinks = document.querySelectorAll('.dropdown__section-links a')

  isOpen ?
    dropdownLinks.forEach(link => link.setAttribute('tabIndex', '0')) :
    dropdownLinks.forEach(link => link.setAttribute('tabIndex', '-1'))
}

const toggleBurgerOnKeyPress = (event) => {
  event.key === 'Enter' &&
    toggleBurger(event)
}

const toggleBurger = (event) => {
  const parent = event.target.parentNode

  if (event.target.className === 'dropdown__burger' || parent.className === 'dropdown__burger') {
    const burgerSpans = document.querySelectorAll('.dropdown__burger span')

    burgerSpans[0].classList.toggle('span-one_active')
    burgerSpans[2].classList.toggle('span-three_active')
    setTimeout(() => {
      burgerSpans[1].classList.toggle('span-two_active')
    }, 200)
    toggleDropdown()
  }
}

const toggleDropdown = () => {
  const dropdownMenu = document.querySelector('.dropdown__menu')

  if (dropdownMenu.className.match('closed')) {
    dropdownMenu.classList.remove('closed')
    dropdownMenu.classList.add('opened')
  } else {
    dropdownMenu.classList.remove('opened')
    dropdownMenu.classList.add('closed')
  }
}

const findLinksElement = (event) => {
  const target = event.target
  let dropdownLinks

  if (target.className === 'dropdown__section') {
    dropdownLinks = target.children[1]
  } else if (target.className === 'dropdown__section-title') {
    dropdownLinks = target.nextElementSibling
  } else if (target.parentNode.className === 'dropdown__section-title') {
    dropdownLinks = target.parentNode.nextElementSibling
  }

  toggleDropdownLinks(dropdownLinks)
}

const toggleDropdownLinks = (dropdownLinks) => {
  if (!dropdownLinks) return;

  if (dropdownLinks.className.match('closed')) {
    dropdownLinks.classList.remove('closed')
    dropdownLinks.classList.add('opened')
    toggleDropdownLinksTabIndex(true)
  } else {
    dropdownLinks.classList.remove('opened')
    dropdownLinks.classList.add('closed')
    toggleDropdownLinksTabIndex(false)
  }
}

const Dropdown = () => {
  useEffect(() => {
    toggleDropdownSectionTabIndex()
    window.addEventListener('resize', toggleDropdownSectionTabIndex)
  })

  return (
    <div className='dropdown'>
      <div tabIndex='-1' className='dropdown__burger'
            onKeyPress={toggleBurgerOnKeyPress} onClick={toggleBurger}
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
             onKeyPress={findLinksElement} onClick={findLinksElement}
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
             onKeyPress={findLinksElement} onClick={findLinksElement}
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
             onKeyPress={findLinksElement} onClick={findLinksElement}
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

export default Dropdown
