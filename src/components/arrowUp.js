import React from 'react'
import '../styles/main/arrow-up.scss'

const ArrowUp = ({ scrollToTop }) => (
  <a
    href='#top'
    className='arrow-up'
    onClick={scrollToTop}
  >
    <span>&uarr;</span> Наверх
  </a>
)

export default ArrowUp
