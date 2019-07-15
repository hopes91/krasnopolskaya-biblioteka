import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DecorMain from '../components/decorMain'

import '../styles/page/page.scss'
import '../styles/page/_site-map.scss'

const linksSectionTwo = [
  { to: '/istoriya-biblioteki', page: 'istoriya-biblioteki', title: 'История библиотеки' },
  { to: '/fotogalereya', page: 'fotogalereya', title: 'Фотогалерея' },
  { to: '/o-bibliotekare', page: 'o-bibliotekare', title: 'О библиотекаре' },
  { to: '/rezhim-raboty-biblioteki', page: 'rezhim-raboty-biblioteki', title: 'Режим работы библиотеки' }
]
const linksSectionThree = [
  { to: '/afisha', page: 'afisha', title: 'Афиша лета 2019 года' },
  { to: '/afisha-semejnyj-klub-ot-vsej-dushi', page: 'afisha-semejnyj-klub-ot-vsej-dushi', title: 'Программа семейного клуба «От всей души»' },
  { to: '/afisha-kruzhok-biblionik', page: 'afisha-kruzhok-biblionik', title: 'Программа кружка «Библионик»' },
  { to: '/proshedshie-sobytiya-goda', page: 'proshedshie-sobytiya-goda', title: 'Прошедшие события 2019 года' }
]
const linksSectionFour = [
  { to: '/poleznye-ssylki', page: 'poleznye-ssylki', title: 'Полезные ссылки' },
  { to: '/bezopasnost-v-internete', page: 'bezopasnost-v-internete', title: 'Безопасность в Интернете' }
]

const SiteMapPage = () => (
  <Layout>
    <SEO title='Карта сайта' keywords={[`карта сайта`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='page page_site-map'>
      <DecorMain />
      <h2 className='page__title'>Карта сайта</h2>
      <section className='page_site-map__section'>
        <p className='page_site-map__section-title'>Главная</p>
        <nav className='page_site-map__section-list'>
          <Link to='/' key='index' className='page_site-map__section-list-item'>
            Новости
          </Link>
        </nav>
      </section>


      <section className='page_site-map__section'>
        <p className='page_site-map__section-title'>О библиотеке</p>
        <nav className='page_site-map__section-list'>
          {linksSectionTwo.map(link => {
            const { to, page, title } = link

            return (
              <Link to={to} key={page} className='page_site-map__section-list-item'>
                {title}
              </Link>
            )
          })}
        </nav>
      </section>

      <section className='page_site-map__section'>
        <p className='page_site-map__section-title'>Новости и события</p>
        <nav className='page_site-map__section-list'>
          {linksSectionThree.map(link => {
            const { to, page, title } = link

            return (
              <Link to={to} key={page} className='page_site-map__section-list-item'>
                {title}
              </Link>
            )
          })}
        </nav>
      </section>

      <section className='page_site-map__section'>
        <p className='page_site-map__section-title'>Услуги</p>
        <nav className='page_site-map__section-list'>
          {linksSectionFour.map(link => {
            const { to, page, title } = link

            return (
              <Link to={to} key={page} className='page_site-map__section-list-item'>
                {title}
              </Link>
            )
          })}
        </nav>
      </section>

      <section className='page_site-map__section'>
        <p className='page_site-map__section-title'>Карта сайта</p>
        <nav className='page_site-map__section-list'>
          <Link to='/karta-sajta' key='karta-sajta' className='page_site-map__section-list-item'>
            Карта сайта
          </Link>
        </nav>
      </section>
    </div>
  </Layout>
)

export default SiteMapPage
