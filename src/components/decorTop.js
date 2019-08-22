import React from 'react'

import '../styles/decor/_top.scss'

const DecorTop = ({ dayOfTheWeek, day, month, year }) => (
  <div className='decor_top'>
    <p className='decor_top__date'>
      <span className='decor_top__date-dayOfTheWeek'>{dayOfTheWeek}</span>
      <span className='decor_top__date-day'>{day}</span>
      <span className='decor_top__date-month'>{month}</span>
      <span className='decor_top__date-year'>{year}</span>
    </p>
    {/* <a href='' className='decor_top__pic'>
      <img src='' alt='' />
    </a> */}
  </div>
)

export default DecorTop
