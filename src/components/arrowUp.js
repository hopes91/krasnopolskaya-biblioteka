import React from 'react'

import '../styles/main/__arrow-up.scss'

const ArrowUp = ({ scrollToTop }) => (
  <a href='#top' className='main__arrow-up'
     onClick={scrollToTop}
  >
    <span>&uarr;</span> Наверх
  </a>
)

export default ArrowUp
