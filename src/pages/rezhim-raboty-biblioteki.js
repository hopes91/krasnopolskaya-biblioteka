import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import OrnamentMain from '../components/ornamentMain'

const WorkSchedulePage = () => (
  <Layout>
    <SEO title='Режим работы' keywords={[`режим работы`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='about-library library-schedule'>
    <OrnamentMain />
      <h2>Режим работы библиотеки</h2>
      <p className='schedule-days'>Понедельник — четверг</p>
      <p className='schedule-time'>13:00 — 16:30</p>
      <p className='schedule-days'>Пятница</p>
      <p className='schedule-time'>13:00 — 16:00</p>
      <p className='schedule-days'>Суббота, воскресенье</p>
      <p className='schedule-time'>выходные дни</p>
      <p className='schedule-days'>Раз в месяц занятие семейного клуба «От всей души»</p>
      <p className='schedule-time'>19:00 — 21:00</p>
    </div>
  </Layout>
)

export default WorkSchedulePage
