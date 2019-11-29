import React from 'react'
import { Link } from 'gatsby'

const NavbarSection = ({ sectionTitle, links, toggleNavbarLinksOnKeyDown, showLinks, hideLinks }) => (
  <div
    className='section'
    onMouseLeave={hideLinks}
  >
    {
      links.length === 1 &&
        <>
          {links.map(link => {
            const { to, page } = link

            return <Link
                      to={to}
                      key={page}
                      tabIndex='0'
                      className='section-title'
                    >
                      {sectionTitle}
                    </Link>
          })}
        </>
    }
    {
      links.length > 1 &&
        <span
          className='section-title'
          onKeyDown={toggleNavbarLinksOnKeyDown}
          onMouseEnter={showLinks}
        >
          {sectionTitle} <span>&#9662;</span>
        </span>
    }
    <nav className='section-links closed'>
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

export default NavbarSection
