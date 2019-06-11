import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import OrnamentMain from '../components/ornamentMain'

import '../styles/page/_about.scss'

const WorkSchedulePage = () => (
  <Layout>
    <SEO title='Режим работы' keywords={[`режим работы`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='page page_about page_about_schedule'>
      <OrnamentMain />
      <h2 className='page__title'>Режим работы библиотеки</h2>
      <p className='page_about_schedule-days'><strong>Понедельник — четверг</strong></p>
      <p className='page_about_schedule_time'>13:00 — 16:30</p>
      <p className='page_about_schedule-days'><strong>Пятница</strong></p>
      <p className='page_about_schedule_time'>13:00 — 16:00</p>
      <p className='page_about_schedule-days'><strong>Суббота, воскресенье</strong></p>
      <p className='page_about_schedule_time'>выходные дни</p>
      <p className='page_about_schedule-days'><strong>Раз в месяц занятие семейного клуба «От всей души»</strong></p>
      <p className='page_about_schedule-time'>19:00 — 21:00</p>
    </div>
  </Layout>
)

export default WorkSchedulePage
