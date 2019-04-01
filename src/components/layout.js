import React from 'react'
import PropTypes from 'prop-types'
import useSiteMetadata from '../hooks/useSiteMetadata'

import Header from './header'
import '../styles/layout.scss'

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <div className='container'>
      <Header siteTitle={title} />
      <main>
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
