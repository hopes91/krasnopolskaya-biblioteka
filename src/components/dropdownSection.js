import React from 'react'
import { Link } from 'gatsby'

const DropdownSection = ({ sectionTitle, links, toggleDropdownLinksOnKeyDown, toggleDropdownLinks }) => (
  <div
    className='dropdown__menu-section'
    onKeyDown={toggleDropdownLinksOnKeyDown}
    onClick={toggleDropdownLinks}
  >
    {
      links.length === 1 &&
        <>
          {links.map(link => {
            const { to, page } = link

            return <Link
                      to={to}
                      key={page}
                      tabIndex='-1'
                      className='dropdown__menu-section-title'
                    >
                      {sectionTitle}
                    </Link>
          })}
        </>
    }
    {
      links.length > 1 &&
        <span className='dropdown__menu-section-title'>{sectionTitle} <span>&#9662;</span></span>
    }
    <nav className='dropdown__menu-section-links closed'>
      {links.map(link => {
        const { to, page, title } = link

        return <Link
                to={to}
                key={page}
                tabIndex='-1'
              >
                {title}
              </Link>
      })}
    </nav>
  </div>
)

export default DropdownSection
