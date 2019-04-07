import React, { Component } from 'react'

import '../styles/ornaments.scss'

class OrnamentTop extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dayOfTheWeek: '',
      day: '',
      month: '',
      year: ''
    }
  }

  componentDidMount() {
    let today = new Date()
    let dayOfTheWeekNum = today.getDay().toString()
    let getDayOfTheWeek = ''
    let getDay = today.getDate()
    let monthNum = today.getMonth().toString()
    let getMonth = ''
    let getYear = today.getFullYear()

    const daysOfTheWeek = {
      0: 'Воскресенье',
      1: 'Понедельник',
      2: 'Вторник',
      3: 'Среда',
      4: 'Четверг',
      5: 'Пятница',
      6: 'Суббота'
    }

    for (let day in daysOfTheWeek) {
      if (dayOfTheWeekNum === day) {
        getDayOfTheWeek = daysOfTheWeek[day]
      }
    }

    const months = {
      0: 'января',
      1: 'февраля',
      2: 'марта',
      3: 'апреля',
      4: 'мая',
      5: 'июня',
      6: 'июля',
      7: 'августа',
      8: 'сентября',
      9: 'октября',
      10: 'ноября',
      11: 'декабря'
    }

    for (let month in months) {
      if (monthNum === month) {
        getMonth = months[month]
      }
    }

    this.setState({
      dayOfTheWeek: getDayOfTheWeek,
      day: getDay,
      month: getMonth,
      year: getYear
    })
  }

  render() {
    const { dayOfTheWeek, day, month, year } = this.state

    return (
      <div className='ornament-top'>
        <p className='todays-date'>
          <span id='span-dayOfTheWeek'>{dayOfTheWeek}</span>
          <span id='span-day'>{day}</span>
          <span id='span-month'>{month}</span>
          <span id='span-year'>{year}</span>
        </p>
      </div>
    )
  }
}

export default OrnamentTop
