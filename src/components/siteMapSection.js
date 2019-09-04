import React from 'react'
import { Link } from 'gatsby'

const siteMapSection = ({ sectionTitle, links }) => (
  <div className='page_site-map__section'>
    <p className='page_site-map__section-title'>{sectionTitle}</p>
    <nav className='page_site-map__section-list'>
      {links.map(link => {
        const { to, page, title } = link

        return <Link to={to} key={page} className='page_site-map__section-list-item'>
          {title}
        </Link>
      })}
    </nav>
  </div>
)

export default siteMapSection
