import React from 'react'

const Corner = ({ secondClass, src }) => (
  <a href='https://www.freepik.com/free-vector/vintage-ornamental-elements_802577.htm' target='_blank' rel='noopener noreferrer' tabIndex='-1'
    className={`decor_main__corner decor_main__corner_${secondClass}`}
  >
    <img src={src} alt='Уголок' />
  </a>
)

export default Corner
