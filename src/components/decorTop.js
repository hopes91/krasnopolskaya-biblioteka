import React from 'react'
import '../styles/decor/top.scss'

import newYearDecorTop from '../images/decor/new-year-frame-2.png'

const DecorTop = ({ dayOfTheWeek, day, month, year }) => (
  <div className='decor-top'>
    <p className='date'>
      <span className='date-dayOfTheWeek'>{dayOfTheWeek}</span>
      <span className='date-day'>{day}</span>
      <span className='date-month'>{month}</span>
      <span className='date-year'>{year}</span>
    </p>
    <img
      src={newYearDecorTop}
      alt=''
      className='pic'
    />
  </div>
)

export default DecorTop
