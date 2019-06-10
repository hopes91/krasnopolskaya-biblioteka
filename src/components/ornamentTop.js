import React, { Component } from 'react'

import '../styles/ornament/_top.scss'

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
      <div className='ornament_top'>
        <p className='ornament_top__date'>
          <span className='ornament_top__dayOfTheWeek'>{dayOfTheWeek}</span>
          <span className='ornament_top__day'>{day}</span>
          <span className='ornament_top__month'>{month}</span>
          <span className='ornament_top__year'>{year}</span>
        </p>
        {/* <a href='' className='ornament_top__pic'>
          <img src='' alt='' />
        </a> */}
      </div>
    )
  }
}

export default OrnamentTop
