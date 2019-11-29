import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DecorMain from '../components/decorMain'
import '../styles/page/page.scss'
import '../styles/page/about.scss'

const WorkSchedulePage = () => (
  <Layout>
    <SEO title='Режим работы' keywords={[`режим работы`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='page about schedule'>
      <DecorMain />
      <h2 className='page-title'>Режим работы библиотеки</h2>
      <p className='schedule-day'>Понедельник — четверг</p>
      <p className='schedule-time'>13:00 — 16:30</p>
      <p className='schedule-day'>Пятница</p>
      <p className='schedule-time'>13:00 — 16:00</p>
      <p className='schedule-day'>Суббота, воскресенье</p>
      <p className='schedule-time'>выходные дни</p>
      <p className='schedule-day'>Раз в месяц занятие семейного клуба «От всей души»</p>
      <p className='schedule-time'>19:00 — 21:00</p>
    </div>
  </Layout>
)

export default WorkSchedulePage
