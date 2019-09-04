import React, { useEffect } from 'react'
import Navbar from './navbar'

const toggleSectionTabIndex = () => {
  const navbarSections = document.querySelectorAll('.navbar__section')

  if (window.innerWidth <= 800) {
    navbarSections.forEach(section => {
      section.hasAttribute('tabindex') ?
        section.setAttribute('tabindex', '-1') :
        section.children[0].setAttribute('tabindex', '-1')
    })
  }

  navbarSections.forEach(section => {
    section.hasAttribute('tabindex') ?
      section.setAttribute('tabindex', '0') :
      section.children[0].setAttribute('tabindex', '0')
  })
}

const toggleLinksTabIndex = (isOpen) => {
  const navbarLinks = document.querySelectorAll('.navbar__section a')

  isOpen ?
    navbarLinks.forEach(link => link.setAttribute('tabIndex', '0')) :
    navbarLinks.forEach(link => link.setAttribute('tabIndex', '-1'))
}

const toggleLinksOnKeyPress = (event) => {
  event.key === 'Enter' &&
    showLinks(event)
}

const showLinks = (event) => {
  const target = event.target
  let navbarLinks

  if (target.className === 'navbar__section') {
    navbarLinks = target.children[1]
  } else if (target.className === 'navbar__section-title') {
    navbarLinks = target.nextElementSibling
  }

  if (navbarLinks && navbarLinks.className.match('closed')) {
    navbarLinks.classList.remove('closed')
    navbarLinks.classList.add('opened')

    toggleLinksTabIndex(true)
  }
}

const hideLinks = (event) => {
  const target = event.target
  const parent = target.parentNode
  let navbarLinks

  if (target.className === 'navbar__section-title') {
    navbarLinks = target.nextElementSibling
  } else if (target.className.match('links')) {
    navbarLinks = target
  } else if (parent.className.match('links')) {
    navbarLinks = parent
  }

  if (navbarLinks && navbarLinks.className.match('opened')) {
    navbarLinks.classList.remove('opened')
    navbarLinks.classList.add('closed')

    toggleLinksTabIndex(false)
  }
}

const ContainerNavbar = () => {
  useEffect(() => {
    toggleSectionTabIndex()
    window.addEventListener('resize', toggleSectionTabIndex)
  })

  return (
    <Navbar
      toggleLinksOnKeyPress={toggleLinksOnKeyPress}
      showLinks={showLinks}
      hideLinks={hideLinks}
    />
  )
}

export default ContainerNavbar
