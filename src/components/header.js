import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import ContainerDropdown from './containerDropdown'
import DecorTop from './decorTop'
import Navbar from './navbar'

import '../styles/header/header.scss'
import '../styles/header/title.scss'

const Header = ({ siteTitle }) => (
  <header className='header'>
    <ContainerDropdown />
    <Link to='/' className='title'>
      <h1>{siteTitle}</h1>
    </Link>
    <DecorTop />
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
