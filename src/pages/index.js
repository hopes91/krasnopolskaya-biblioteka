import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DecorMain from '../components/decorMain'
import '../styles/page/page.scss'
import '../styles/page/news.scss'

import news30122019 from '../images/news/30122019.jpg'
import news09122019 from '../images/news/09122019.png'
import news121020192 from '../images/news/12102019-2.jpg'
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
        <h6>понедельник, 2 декабря 2019 год</h6>
        <img src={news09122019} alt='9 декабря Лихановские чтения. Уроки нравственности "Понять и простить" по повести "Чистые камушки" и "Храните мир на Земле" по повести "Последние холода".' className='page-image' />
        <img src={news30122019} alt='30 декабря мастер-класс на дому "Сделаем из бумаги мышку на новогоднюю ёлку" и новогодняя викторина.' className='page-image' />
      </section>
      <section>
        <h6>суббота, 12 октября 2019 год</h6>
        <img src={news121020192} alt='За 9 месяцев 2019 года лучшие читатели-дети: Бобылев Руслан, Райлинг Женя, Вотинова Виолетта, Зворыгина Марьяна, Вотинова Ксения, Суходоева Таня. Самые активные посетители библиотечных мероприятий: Райлинг Женя, Ситников Кирилл, Перескоков Никита, Чекалкин Саша, Толмачёв Дима, Ральникова Полина.' className='page-image' />
      </section>
      <section>
        <h6>понедельник, 8 июля 2019 год</h6>
        <img src={news08072019} alt='Благодарность Самосудовой Вере Алексеевне по подаренные библиотеке журналы' className='page-image' />
      </section>
      <section>
        <h6>пятница, 7 июня 2019 год</h6>
        <img src={news07062019} alt='Благодарность Суходоевой Анастасии Николаевне за помощь в проведении занятий семейного клуба и прошедших Библиосумерках' className='page-image' />
      </section>
      <section>
        <h6>среда, 5 июня 2019 год</h6>
        <img src={news05062019} alt='Благодарность Кондаковой Надежде Ивановне за подаренные книги на Всероссийский день библиотек' className='page-image' />
      </section>
      <section>
        <h6>понедельник, 3 июня 2019 год</h6>
        <img src={news03062019} alt='Грамота Фалалеевой Елене Евгеньевне за 1-ое место в районном конкурсе профессионального мастерства «Театра мир откроет нам свои кулисы»' className='page-image' />
      </section>
      <section>
        <h6>понедельник, 20 мая 2019 год</h6>
        <img src={news20052019} alt='Благодарственное письмо за активное участие в марафоне «Добрая Вятка»' className='page-image' />
      </section>
      <section>
        <h6>воскресенье, 24 марта 2019 год</h6>
        <img src={news24032019} alt='Благодарность Пермяковой Л.А. и Белобородовой О.С. за подаренные Краснопольской библиотеке журналы' className='page-image' />
      </section>
    </div>
  </Layout>
)

export default IndexPage
