import React from 'react'

import '../styles/ornaments.scss'
import ornamentOne from '../images/design/ornament-1.jpg'
import ornamentTwo from '../images/design/ornament-2.jpg'
import ornamentThree from '../images/design/ornament-3.jpg'
import ornamentFour from '../images/design/ornament-4.jpg'

const OrnamentMain = () => (
  <div className='ornament-main'>
    <a href='https://www.freepik.com/free-vector/vintage-ornamental-elements_802577.htm' target='_blank' rel='noopener noreferrer' className='ornament one'>
      <img src={ornamentOne} alt='Уголок' />
    </a>
    <a href='https://www.freepik.com/free-vector/vintage-ornamental-elements_802577.htm' target='_blank' rel='noopener noreferrer' className='ornament two'>
      <img src={ornamentTwo} alt='Уголок' />
    </a>
    <a href='https://www.freepik.com/free-vector/vintage-ornamental-elements_802577.htm' target='_blank' rel='noopener noreferrer' className='ornament three'>
      <img src={ornamentThree} alt='Уголок' />
    </a>
    <a href='https://www.freepik.com/free-vector/vintage-ornamental-elements_802577.htm' target='_blank' rel='noopener noreferrer' className='ornament four'>
      <img src={ornamentFour} alt='Уголок' />
    </a>
  </div>
)

export default OrnamentMain
