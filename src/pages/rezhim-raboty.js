import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DecorMain from '../components/decorMain'

import '../styles/page/page.scss'
import '../styles/page/_about.scss'

const WorkSchedulePage = () => (
  <Layout>
    <SEO title='Режим работы' keywords={[`режим работы`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='page page_about page_about_schedule'>
      <DecorMain />
      <h2 className='page__title'>Режим работы библиотеки</h2>
      <p className='page_about_schedule__day'>Понедельник — четверг</p>
      <p className='page_about_schedule__time'>13:00 — 16:30</p>
      <p className='page_about_schedule__day'>Пятница</p>
      <p className='page_about_schedule__time'>13:00 — 16:00</p>
      <p className='page_about_schedule__day'>Суббота, воскресенье</p>
      <p className='page_about_schedule__time'>выходные дни</p>
      <p className='page_about_schedule__day'>Раз в месяц занятие семейного клуба «От всей души»</p>
      <p className='page_about_schedule__time'>19:00 — 21:00</p>
    </div>
  </Layout>
)

export default WorkSchedulePage
