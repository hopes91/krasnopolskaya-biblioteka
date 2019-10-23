import React from 'react'
import { sectionTitles, linksSectionOne, linksSectionTwo, linksSectionThree, linksSectionFour, linksSectionFive } from '../lists/menu'
import DropdownSection from '../components/dropdownSection'
import '../styles/header/dropdown.scss'

const Dropdown = ({ toggleBurgerOnKeyDown, toggleBurger, toggleDropdownLinksOnKeyDown, toggleDropdownLinks }) => (
  <div className='dropdown'>
    <div
      tabIndex='-1'
      className='dropdown__burger'
      onKeyDown={toggleBurgerOnKeyDown}
      onClick={toggleBurger}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className='dropdown__menu closed'>
      {sectionTitles.map((sectionTitle, ind) => {
        const sectionLinks = [linksSectionOne, linksSectionTwo, linksSectionThree, linksSectionFour, linksSectionFive]
        const titleIndex = ind

        const links = sectionLinks.find((section, ind) => {
          return titleIndex === ind && section
        })

        return <DropdownSection
                key={sectionTitle}
                sectionTitle={sectionTitle}
                links={links}
                toggleDropdownLinksOnKeyDown={toggleDropdownLinksOnKeyDown}
                toggleDropdownLinks={toggleDropdownLinks}
              />
      })}
    </div>
  </div>
)

export default Dropdown
