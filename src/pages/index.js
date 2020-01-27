import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DecorMain from '../components/decorMain'
import '../styles/page/page.scss'
import '../styles/page/news.scss'

import news27012020 from '../images/news/27012020.jpg'
import news17012020 from '../images/news/17012020.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title='Главная' keywords={[`новости краснопольской библиотеки`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='page news'>
      <DecorMain />
      <h2 className='page-title'>Новости</h2>
      <section>
        <h3>понедельник, 27 января 2020 год</h3>
        <p>Краснопольская библиотека участвует в сетевой акции «ПоЧитатели Чехова» к 160-летию со дня рождения писателя.</p>
        <img src={news27012020} alt='Нарисованное изображение А.П. Чехова и надпись 160 лет' className='page-image' />
      </section>
      <section>
        <h3>пятница, 17 января 2020 год</h3>
        <img src={news17012020} alt='Список лучших читателей 2019 года' className='page-image' />
      </section>
    </div>
  </Layout>
)

export default IndexPage
