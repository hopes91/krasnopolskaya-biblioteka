import React from 'react'
import '../styles/decor/top.scss'

const DecorTop = ({ dayOfTheWeek, day, month, year }) => (
  <div className='decor-top'>
    <p className='date'>
      <span className='date-dayOfTheWeek'>{dayOfTheWeek}</span>
      <span className='date-day'>{day}</span>
      <span className='date-month'>{month}</span>
      <span className='date-year'>{year}</span>
    </p>
    {/* <a href='' className='pic'>
      <img src='' alt='' />
    </a> */}
  </div>
)

export default DecorTop
