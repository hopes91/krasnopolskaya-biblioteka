import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DecorMain from '../components/decorMain'
import '../styles/page/page.scss'
import '../styles/page/news.scss'

import news13122019 from '../images/news/13122019.png'
import news12122019 from '../images/news/12122019.jpg'
import news08072019 from '../images/news/08072019.jpg'
import news07062019 from '../images/news/07062019.jpg'
import news05062019 from '../images/news/05062019.jpg'
import news03062019 from '../images/news/03062019.jpg'
import news20052019 from '../images/news/20052019.jpg'
import news24032019 from '../images/news/24032019-2.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title='Главная' keywords={[`новости краснопольской библиотеки`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='page news'>
      <DecorMain />
      <h2 className='page-title'>Новости</h2>
      <section>
        <h3>пятница, 13 декабря 2019 год</h3>
        <img src={news13122019} alt='Список игр и викторин, которые будут проводиться в новогодние праздники' className='page-image' />
      </section>
      <section>
        <h3>четверг, 12 декабря 2019 год</h3>
        <img src={news12122019} alt='Расписание работы библиотеки в новогодние праздники' className='page-image' />
      </section>
      <section>
        <h3>понедельник, 8 июля 2019 год</h3>
        <img src={news08072019} alt='Благодарность Самосудовой В.А. за подаренные библиотеке журналы' className='page-image' />
      </section>
      <section>
        <h3>пятница, 7 июня 2019 год</h3>
        <img src={news07062019} alt='Благодарность Суходоевой А.Н. за помощь в проведении занятий' className='page-image' />
      </section>
      <section>
        <h3>среда, 5 июня 2019 год</h3>
        <img src={news05062019} alt='Благодарность Кондаковой Н.И. за подаренные книги' className='page-image' />
      </section>
      <section>
        <h3>понедельник, 3 июня 2019 год</h3>
        <img src={news03062019} alt='Грамота Фалалеевой Е.Е. за 1-ое место в конкурсе проф. мастерства' className='page-image' />
      </section>
      <section>
        <h3>понедельник, 20 мая 2019 год</h3>
        <img src={news20052019} alt='Благодарственное письмо за активное участие в марафоне «Добрая Вятка»' className='page-image' />
      </section>
      <section>
        <h3>воскресенье, 24 марта 2019 год</h3>
        <img src={news24032019} alt='Благодарность Пермяковой Л.А. и Белобородовой О.С. за подаренные журналы' className='page-image' />
      </section>
    </div>
  </Layout>
)

export default IndexPage
