import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DecorMain from '../components/decorMain'
import '../styles/page/page.scss'
import '../styles/page/_news.scss'

import news08072019 from '../images/news/08072019.jpg'
import news07062019 from '../images/news/07062019.jpg'
import news05062019 from '../images/news/05062019.jpg'
import news03062019 from '../images/news/03062019.jpg'
import news20052019 from '../images/news/20052019.jpg'
import news24032019 from '../images/news/24032019-2.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title='Главная' keywords={[`новости краснопольской библиотеки`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='page page_news'>
      <DecorMain />
      <h2 className='page__title'>Новости</h2>
      <section className='page_news__section'>
        <h6 className='page_news__section-title'>понедельник, 8 июля 2019 год</h6>
        <img src={news08072019} alt='Благодарность Самосудовой Вере Алексеевне по подаренные библиотеке журналы' className='page__image' />
      </section>
      <section className='page_news__section'>
        <h6 className='page_news__section-title'>пятница, 7 июня 2019 год</h6>
        <img src={news07062019} alt='Благодарность Суходоевой Анастасии Николаевне за помощь в проведении занятий семейного клуба и прошедших Библиосумерках' className='page__image' />
      </section>
      <section className='page_news__section'>
        <h6 className='page_news__section-title'>среда, 5 июня 2019 год</h6>
        <img src={news05062019} alt='Благодарность Кондаковой Надежде Ивановне за подаренные книги на Всероссийский день библиотек' className='page__image' />
      </section>
      <section className='page_news__section'>
        <h6 className='page_news__section-title'>понедельник, 3 июня 2019 год</h6>
        <img src={news03062019} alt='Грамота Фалалеевой Елене Евгеньевне за 1-ое место в районном конкурсе профессионального мастерства «Театра мир откроет нам свои кулисы»' className='page__image' />
      </section>
      <section className='page_news__section'>
        <h6 className='page_news__section-title'>понедельник, 20 мая 2019 год</h6>
        <img src={news20052019} alt='Благодарственное письмо за активное участие в марафоне «Добрая Вятка»' className='page__image' />
      </section>
      <section className='page_news__section'>
        <h6 className='page_news__section-title'>воскресенье, 24 марта 2019 год</h6>
        <img src={news24032019} alt='Благодарность Пермяковой Л.А. и Белобородовой О.С. за подаренные Краснопольской библиотеке журналы' className='page__image' />
      </section>
    </div>
  </Layout>
)

export default IndexPage
