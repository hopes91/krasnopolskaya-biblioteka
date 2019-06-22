import React from 'react'

import '../styles/decor/_main.scss'

import corner1 from '../images/decor/corner-1.jpg'
import corner2 from '../images/decor/corner-2.jpg'
import corner3 from '../images/decor/corner-3.jpg'
import corner4 from '../images/decor/corner-4.jpg'

const DecorMain = () => (
  <div className='decor_main'>
    <a href='https://www.freepik.com/free-vector/vintage-ornamental-elements_802577.htm' target='_blank' rel='noopener noreferrer' tabIndex='-1' className='decor_main__corner decor_main__corner_one'>
      <img src={corner1} alt='Уголок' />
    </a>
    <a href='https://www.freepik.com/free-vector/vintage-ornamental-elements_802577.htm' target='_blank' rel='noopener noreferrer' tabIndex='-1' className='decor_main__corner decor_main__corner_two'>
      <img src={corner2} alt='Уголок' />
    </a>
    <a href='https://www.freepik.com/free-vector/vintage-ornamental-elements_802577.htm' target='_blank' rel='noopener noreferrer' tabIndex='-1' className='decor_main__corner decor_main__corner_three'>
      <img src={corner3} alt='Уголок' />
    </a>
    <a href='https://www.freepik.com/free-vector/vintage-ornamental-elements_802577.htm' target='_blank' rel='noopener noreferrer' tabIndex='-1' className='decor_main__corner decor_main__corner_four'>
      <img src={corner4} alt='Уголок' />
    </a>
  </div>
)

export default DecorMain
