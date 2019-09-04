import React from 'react'
import { Link } from 'gatsby'

const siteMapSection = ({ sectionTitle, links }) => (
  <div className='links-section'>
    <p className='links-section__title'>{sectionTitle}</p>
    <nav className='links-section__links'>
      {links.map(link => {
        const { to, page, title } = link

        return <Link to={to} key={page} className='links-section__links-item'>
          {title}
        </Link>
      })}
    </nav>
  </div>
)

export default siteMapSection
