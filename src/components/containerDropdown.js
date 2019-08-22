import React, { useEffect } from 'react'

import Dropdown from './dropdown'

const toggleSectionTabIndex = () => {
  const burger = document.querySelector('.dropdown__burger')
  const dropdownSections = document.querySelectorAll('.dropdown__menu-section')

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

const toggleLinksTabIndex = (isOpen) => {
  const dropdownLinks = document.querySelectorAll('.dropdown__menu-section-links a')

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

  if (target.className === 'dropdown__menu-section') {
    dropdownLinks = target.children[1]
  } else if (target.className === 'dropdown__menu-section-title') {
    dropdownLinks = target.nextElementSibling
  } else if (target.parentNode.className === 'dropdown__menu-section-title') {
    dropdownLinks = target.parentNode.nextElementSibling
  }

  toggleDropdownLinks(dropdownLinks)
}

const toggleDropdownLinks = (dropdownLinks) => {
  if (!dropdownLinks) return;

  if (dropdownLinks.className.match('closed')) {
    dropdownLinks.classList.remove('closed')
    dropdownLinks.classList.add('opened')
    toggleLinksTabIndex(true)
  } else {
    dropdownLinks.classList.remove('opened')
    dropdownLinks.classList.add('closed')
    toggleLinksTabIndex(false)
  }
}

const ContainerDropdown = () => {
  useEffect(() => {
    toggleSectionTabIndex()
    window.addEventListener('resize', toggleSectionTabIndex)
  })

  return (
    <Dropdown
      toggleBurgerOnKeyPress={toggleBurgerOnKeyPress}
      toggleBurger={toggleBurger}
      findLinksElement={findLinksElement}
    />
  )
}

export default ContainerDropdown
