import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DecorMain from '../components/decorMain'
import '../styles/page/page.scss'
import '../styles/page/not-found-page.scss'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Страница не найдена' keywords={[`краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='page not-found-page'>
      <DecorMain />
      <h2 className='page-title'>СТРАНИЦА НЕ НАЙДЕНА</h2>
      <p>Вы попали на страницу, которой не существует. Перейти на <Link to='/'>главную</Link>.</p>
    </div>
  </Layout>
)

export default NotFoundPage
