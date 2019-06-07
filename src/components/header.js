import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import DropdownMenu from './dropdownMenu'
import OrnamentTop from './ornamentTop'
import Navbar from './navbar'
import '../styles/header.scss'

const Header = ({ siteTitle }) => (
  <header>
    <DropdownMenu />
    <Link to='/' className='site-title'>
      <h1>{siteTitle}</h1>
    </Link>
    <OrnamentTop />
    <Navbar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
