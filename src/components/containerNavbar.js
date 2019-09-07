import React, { useEffect } from 'react'
import Navbar from './navbar'

const toggleSectionTabIndex = () => {
  const navbarSections = document.querySelectorAll('.navbar__section')

  window.innerWidth > 800 ?
    navbarSections.forEach(section => section.children[0].setAttribute('tabindex', '0')) :
    navbarSections.forEach(section => section.children[0].setAttribute('tabindex', '-1'))
}

const toggleLinksTabIndex = (isOpen) => {
  const navbarLinks = document.querySelectorAll('.navbar__section-links a')

  isOpen ?
    navbarLinks.forEach(link => link.setAttribute('tabIndex', '0')) :
    navbarLinks.forEach(link => link.setAttribute('tabIndex', '-1'))
}

const showLinksOnKeyPress = (event) => {
  event.key === 'Enter' &&
    showLinks(event)
}

const showLinks = (event) => {
  const navbarLinks = event.target.nextElementSibling

  if (navbarLinks && navbarLinks.className.match('closed')) {
    navbarLinks.classList.remove('closed')
    navbarLinks.classList.add('opened')

    toggleLinksTabIndex(true)
  }
}

const hideLinks = (event) => {
  const target = event.currentTarget
  const navbarLinks = target.children[1]

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

  return <Navbar
          showLinksOnKeyPress={showLinksOnKeyPress}
          showLinks={showLinks}
          hideLinks={hideLinks}
        />
}

export default ContainerNavbar
