import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DecorMain from '../components/decorMain'

import '../styles/page/page.scss'
import '../styles/page/_site-map.scss'

import { linksSectionTwo, linksSectionThree, linksSectionFour } from '../lists/menu'

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
