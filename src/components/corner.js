import React from 'react'

const Corner = ({ secondClass, src }) => (
  <a
    href='https://www.freepik.com/free-vector/vintage-ornamental-elements_802577.htm'
    target='_blank'
    rel='noopener noreferrer'
    tabIndex='-1'
    className={`corner corner-${secondClass}`}
  >
    <img src={src} alt='Уголок' />
  </a>
)

export default Corner
