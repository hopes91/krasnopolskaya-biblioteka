import React from 'react'

import '../styles/ornaments.scss'

const OrnamentTop = () => (
  <div className='ornament-top'>
    <p className='todays-date'>
      <span id='span-dayOfTheWeek'></span>
      <span id='span-day'></span>
      <span id='span-month'></span>
      <span id='span-year'></span>
    </p>
  </div>
)

export default OrnamentTop
