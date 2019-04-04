import React from 'react'

import '../styles/ornaments.scss'

import ornament1 from '../images/design/ornament-1.jpg'
import ornament2 from '../images/design/ornament-2.jpg'
import ornament3 from '../images/design/ornament-3.jpg'
import ornament4 from '../images/design/ornament-4.jpg'

const OrnamentMain = () => (
  <div className='ornament-main'>
    <a href='https://www.freepik.com/free-vector/vintage-ornamental-elements_802577.htm' target='_blank' rel='noopener noreferrer' className='ornament one'>
      <img src={ornament1} alt='Уголок' />
    </a>
    <a href='https://www.freepik.com/free-vector/vintage-ornamental-elements_802577.htm' target='_blank' rel='noopener noreferrer' className='ornament two'>
      <img src={ornament2} alt='Уголок' />
    </a>
    <a href='https://www.freepik.com/free-vector/vintage-ornamental-elements_802577.htm' target='_blank' rel='noopener noreferrer' className='ornament three'>
      <img src={ornament3} alt='Уголок' />
    </a>
    <a href='https://www.freepik.com/free-vector/vintage-ornamental-elements_802577.htm' target='_blank' rel='noopener noreferrer' className='ornament four'>
      <img src={ornament4} alt='Уголок' />
    </a>
  </div>
)

export default OrnamentMain
