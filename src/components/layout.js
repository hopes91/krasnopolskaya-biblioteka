import React from 'react'
import PropTypes from 'prop-types'
import useSiteMetadata from '../hooks/useSiteMetadata'

import Header from './header'
// import OrnamentCenter from './ornamentCenter'
import Footer from './footer'
import '../styles/layout.scss'

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <div className='container'>
      <Header siteTitle={title} />
      {/* <OrnamentCenter /> */}
      <main>
        {children}
      </main>
      <Footer siteTitle={title} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
