import React from 'react'
import { sectionTitles, linksSectionOne, linksSectionTwo, linksSectionThree, linksSectionFour, linksSectionFive } from '../lists/menu'
import NavbarSection from '../components/navbarSection'
import '../styles/header/navbar.scss'

const Navbar = ({ showLinksOnKeyDown, showLinks, hideLinks }) => (
  <div className='navbar'>
    {sectionTitles.map((sectionTitle, ind) => {
      const sectionLinks = [linksSectionOne, linksSectionTwo, linksSectionThree, linksSectionFour, linksSectionFive]
      const titleIndex = ind

      const links = sectionLinks.find((section, ind) => {
        return titleIndex === ind && section
      })

      return <NavbarSection
              key={sectionTitle}
              sectionTitle={sectionTitle}
              links={links}
              showLinksOnKeyDown={showLinksOnKeyDown}
              showLinks={showLinks}
              hideLinks={hideLinks}
            />
    })}
  </div>
)

export default Navbar
