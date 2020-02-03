import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DecorMain from '../components/decorMain'
import '../styles/page/page.scss'
import '../styles/page/news.scss'

import news30012020 from '../images/news/30012020.jpg'
import news27012020 from '../images/news/27012020.jpg'
import news17012020 from '../images/news/17012020.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title='Главная' keywords={[`новости краснопольской библиотеки`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='page news'>
      <DecorMain />
      <h2 className='page-title'>Новости</h2>
      <section>
        <h3>пятница, 31 января 2020 год</h3>
        <h4>Итоги 2019 года</h4>
        <p>В 2019 году было пользователей — 1418,<br />
          в том числе детей — 98,<br />
          в том числе удалённых пользователей сайта библиотеки — 1235.</p>
        <p>посещений — 4781,<br />
          в том числе детьми — 1354,<br />
          в том числе удалёнными пользователями сайта библиотеки — 2351,<br />
          в том числе посещений мероприятий — 1945.</p>
        <p>книговыдача — 16606,<br />
          в том числе детям — 2088,<br />
          в том числе удалённым пользователям сайта библиотеки — 11294.</p>
        <p>В библиотеке прошло 239 мероприятий.<br />
          Спонсоры мероприятий — ПСПК «Краснопольский» и библиотекарь Фалалеева Е.Е.</p>
        <p>Поступило в библиотеку 28 новых книг.</p>
        <p>В фонде библиотеки 3633 книги.</p>
        <p>Было 43 пользователя внутрисистемного книгообмена,<br />
          посещений ВСО — 355,<br />
          книговыдача ВСО — 650.</p>
        <p>В декабре оформлена подписка за счет бюджета на газету «Бабья радость», журнал «Вот это истории», журналы «Саша и Маша», «Смешарики».<br />
          Депутат К.М. Гозман подарил подписку на газету «Родной край — Суна».</p>
      </section>
      <section>
        <h3>четверг, 30 января 2020 год</h3>
        <img src={news30012020} alt='Благодарность Панишевой Н.В. за подаренные книги' className='page-image' />
      </section>
      <section>
        <h3>понедельник, 27 января 2020 год</h3>
        <p>Краснопольская библиотека участвует в сетевой акции «ПоЧитатели Чехова» к 160-летию со дня рождения писателя.</p>
        <img src={news27012020} alt='Нарисованное изображение А.П. Чехова и надпись 160 лет' className='page-image' />
      </section>
      <section>
        <h3>пятница, 17 января 2020 год</h3>
        <img src={news17012020} alt='Список лучших читателей 2019 года' className='page-image' />
      </section>
      <section>
        <h3>пятница, 3 января 2020 год</h3>
        <p>2 января прошла игра-викторина «Паутина» на дому у Тани Суходоевой, девочки 9 лет с инвалидностью, одной её сестры и брата. Тема викторины была: «Заповедники — эталоны живой природы» с вопросами о российских заповедниках, в частности о заповеднике «Нургуш» в Кировской области. Дети расширили знания о заповедных землях России.</p>
        <p>2 января там же библиотекарь провела викторину «Санта Клаус и Дед Мороз». Выиграла Таня.</p>
      </section>
    </div>
  </Layout>
)

export default IndexPage
