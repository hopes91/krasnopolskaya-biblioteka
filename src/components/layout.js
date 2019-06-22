import React from 'react'
import PropTypes from 'prop-types'
import useSiteMetadata from '../hooks/useSiteMetadata'

import Header from './header'
// import DecorCenter from './decorCenter'
import ArrowUp from './arrowUp'
import StackOfBooks from './stackOfBooks'
import Footer from './footer'

import '../styles/layout.scss'

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <div className='container' id='top'>
      <Header siteTitle={title} />
      {/* <DecorCenter /> */}
      <main className='main'>
        {children}
        <ArrowUp />
      </main>
      <div className='container__empty'></div> {/* для IE */}
      <StackOfBooks />
      <Footer siteTitle={title} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
