import React from 'react'
import PropTypes from 'prop-types'
import useSiteMetadata from '../hooks/useSiteMetadata'

import Header from './header'
// import DecorCenter from './decorCenter'
import StackOfBooks from './stackOfBooks'
import Footer from './footer'

import '../styles/layout.scss'

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <div className='container'>
      <Header siteTitle={title} />
      {/* <DecorCenter /> */}
      <main className='main'>
        {children}
        <a href='#top' id='arrow-up'><span>&uarr;</span> Наверх</a>
      </main>
      <div className='empty'></div> {/* для IE */}
      <StackOfBooks />
      <Footer siteTitle={title} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
