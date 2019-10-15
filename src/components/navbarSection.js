import React from 'react'
import { Link } from 'gatsby'

const NavbarSection = ({ sectionTitle, links, toggleNavbarLinksOnKeyDown, showLinks, hideLinks }) => (
  <div className='navbar__section' onMouseLeave={hideLinks}>
    {
      links.length > 1 &&
        <p
          className='navbar__section-title'
          onKeyDown={toggleNavbarLinksOnKeyDown}
          onMouseEnter={showLinks}
        >
          {sectionTitle} <span>&#9662;</span>
        </p>
    }
    {
      links.length === 1 ?
        <>
          {links.map(link => {
            const { to, page } = link

            return <Link
                      to={to}
                      key={page}
                      tabIndex='0'
                      className='navbar__section-title'
                    >
                      {sectionTitle}
                    </Link>
          })}
        </>
        :
        <nav className='navbar__section-links closed'>
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
    }
  </div>
)

export default NavbarSection
