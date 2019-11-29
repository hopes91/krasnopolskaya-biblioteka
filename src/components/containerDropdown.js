import React, { useEffect } from 'react'
import Dropdown from './dropdown'

const toggleSectionTabIndex = () => {
  const burger = document.querySelector('.burger')
  const dropdownSections = document.querySelectorAll('.section')

  if (window.innerWidth > 800) {
    burger.setAttribute('tabIndex', '-1')
    dropdownSections.forEach(section => section.children[0].setAttribute('tabIndex', '-1'))
  }

  burger.setAttribute('tabIndex', '1')
  dropdownSections.forEach(section => section.children[0].setAttribute('tabIndex', '0'))
}

const toggleLinksTabIndex = isOpen => {
  const dropdownLinks = document.querySelectorAll('.section-links a')

  isOpen ?
    dropdownLinks.forEach(link => link.setAttribute('tabIndex', '0')) :
    dropdownLinks.forEach(link => link.setAttribute('tabIndex', '-1'))
}

const toggleBurgerOnKeyDown = event => {
  event.key === 'Enter' &&
    toggleBurger()
}

const toggleBurger = () => {
  const burgerSpans = document.querySelectorAll('.burger span')

  if (burgerSpans[0].className === '') {
    burgerSpans[0].className = 'span-one_active'
    burgerSpans[2].className = 'span-three_active'
    setTimeout(() => burgerSpans[1].className = 'span-two_active', 200)
  } else {
    burgerSpans[0].className = ''
    burgerSpans[2].className = ''
    setTimeout(() => burgerSpans[1].className = '', 200)
  }

  toggleDropdown()
}

const toggleDropdown = () => {
  const dropdownMenu = document.querySelector('.dropdown-menu')

  if (!dropdownMenu) return;

  dropdownMenu.className.match('closed') ?
    dropdownMenu.className = 'dropdown-menu opened' :
    dropdownMenu.className = 'dropdown-menu closed'
}

const toggleDropdownLinksOnKeyDown = event => {
  event.key === 'Enter' &&
    toggleDropdownLinks(event)
}

const toggleDropdownLinks = event => {
  const dropdownLinks = event.currentTarget.children[1]

  if (!dropdownLinks) return;

  if (dropdownLinks.className.match('closed')) {
    dropdownLinks.className = 'section-links opened'

    toggleLinksTabIndex(true)
  } else {
    dropdownLinks.className = 'section-links closed'

    toggleLinksTabIndex(false)
  }
}

const ContainerDropdown = () => {
  useEffect(() => {
    toggleSectionTabIndex()
    window.addEventListener('resize', toggleSectionTabIndex)
  })

  return <Dropdown
          toggleBurgerOnKeyDown={toggleBurgerOnKeyDown}
          toggleBurger={toggleBurger}
          toggleDropdownLinksOnKeyDown={toggleDropdownLinksOnKeyDown}
          toggleDropdownLinks={toggleDropdownLinks}
        />
}

export default ContainerDropdown
