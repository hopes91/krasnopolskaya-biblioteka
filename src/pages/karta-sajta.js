import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import OrnamentMain from '../components/ornamentMain'

const linksSectionTwo = [
  { to: '/istoriya-biblioteki', page: 'istoriya-biblioteki', title: 'История библиотеки' },
  { to: '/fotogalereya', page: 'fotogalereya', title: 'Фотогалерея' },
  { to: '/o-bibliotekare', page: 'o-bibliotekare', title: 'О библиотекаре' },
  { to: '/rezhim-raboty-biblioteki', page: 'rezhim-raboty-biblioteki', title: 'Режим работы библиотеки' }
]
const linksSectionThree = [
  { to: '/afisha', page: 'afisha', title: 'Афиша апреля 2019 года' },
  { to: '/afisha-semejnyj-klub-ot-vsej-dushi', page: 'afisha-semejnyj-klub-ot-vsej-dushi', title: 'Программа семейного клуба «От всей души»' },
  { to: '/afisha-kruzhok-biblionik', page: 'afisha-kruzhok-biblionik', title: 'Программа кружка «Библионик»' },
  { to: '/proshedshie-sobytiya-goda', page: 'proshedshie-sobytiya-goda', title: 'Прошедшие события 2019 года' }
]
const linksSectionFour = [
  { to: '/poleznye-ssylki', page: 'poleznye-ssylki', title: 'Полезные ссылки' },
  { to: '/bezopasnost-v-internete', page: 'bezopasnost-v-internete', title: 'Безопасность в Интернете' },
  { to: '/prejskurant-na-platnye-uslugi', page: 'prejskurant-na-platnye-uslugi', title: 'Прейскурант цен на платные услуги' }
]

const SiteMapPage = () => (
  <Layout>
    <SEO title='Карта сайта' keywords={[`карта сайта`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='site-map'>
      <OrnamentMain />
      <h2>Карта сайта</h2>
      <div className='map__index'>
        <p>Главная</p>
        <ul>
          <Link to='/' key='index'>
            Новости
          </Link>
        </ul>
      </div>
      <div className='map__about-library'>
        <p>О библиотеке</p>
        <ul>
          {linksSectionTwo.map(link => {
            const { to, page, title } = link

            return (
              <Link to={to} key={page}>
                {title}
              </Link>
            )
          })}
        </ul>
      </div>
      <div className='map__news-and-events'>
        <p>Новости и события</p>
        <ul>
          {linksSectionThree.map(link => {
            const { to, page, title } = link

            return (
              <Link to={to} key={page}>
                {title}
              </Link>
            )
          })}
        </ul>
      </div>
      <div className='map__services'>
        <p>Услуги</p>
        <ul>
          {linksSectionFour.map(link => {
            const { to, page, title } = link

            return (
              <Link to={to} key={page}>
                {title}
              </Link>
            )
          })}
        </ul>
      </div>
      <div className='map__sites-map'>
        <p>Карта сайта</p>
        <ul>
          <Link to='/karta-sajta' key='karta-sajta'>
            Карта сайта
          </Link>
        </ul>
      </div>
    </div>
  </Layout>
)

export default SiteMapPage
