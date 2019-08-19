import React, { Component } from 'react'

import '../styles/decor/_top.scss'

class DecorTop extends Component {
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
  }
}

export default DecorTop
