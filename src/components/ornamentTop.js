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
    let dayOfTheWeekNum = today.getDay()
    let day = today.getDate()
    let monthNum = today.getMonth()
    let year = today.getFullYear()

    const daysOfTheWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

    daysOfTheWeek.forEach((day, ind) => {
      if (ind !== dayOfTheWeekNum) return;

      this.setState({ dayOfTheWeek: day })
    })

    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

    months.forEach((month, ind) => {
      if (ind !== monthNum) return;

      this.setState({ month })
    })

    this.setState({
      day,
      year
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
