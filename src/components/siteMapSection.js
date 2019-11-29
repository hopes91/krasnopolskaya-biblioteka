import React from 'react'
import { Link } from 'gatsby'

const SiteMapSection = ({ sectionTitle, links }) => (
  <div className='section'>
    <p className='section-title'>{sectionTitle}</p>
    <nav className='section-links'>
      {links.map(link => {
        const { to, page, title } = link

        return <Link
                to={to}
                key={page}
              >
                {title}
              </Link>
      })}
    </nav>
  </div>
)

export default SiteMapSection
