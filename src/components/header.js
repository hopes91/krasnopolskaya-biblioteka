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
    <h1 className='site-title'>
      <Link to='/'>
        {siteTitle}
      </Link>
    </h1>
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
