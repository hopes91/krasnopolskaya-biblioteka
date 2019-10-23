import React, { useState, useEffect } from 'react'
import DecorTop from './decorTop'

const ContainerDecorTop = () => {
  const [ dayOfTheWeek, getDayOfTheWeek ] = useState('')
  const [ day, getDay ] = useState('')
  const [ month, getMonth ] = useState('')
  const [ year, getYear ] = useState('')

  useEffect(() => {
    const dayOfTheWeekNum = new Date().getDay()
    const daysOfTheWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

    daysOfTheWeek.forEach((day, ind) => {
      ind === dayOfTheWeekNum &&
        getDayOfTheWeek(day)
    })
  }, [dayOfTheWeek])

  useEffect(() => {
    getDay(new Date().getDate())
  }, [day])

  useEffect(() => {
    const monthNum = new Date().getMonth()
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

    months.forEach((month, ind) => {
      ind === monthNum &&
        getMonth(month)
    })
  }, [month])

  useEffect(() => {
    getYear(new Date().getFullYear())
  }, [year])

  return <DecorTop
          dayOfTheWeek={dayOfTheWeek}
          day={day}
          month={month}
          year={year}
        />
}

export default ContainerDecorTop
