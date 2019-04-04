import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import OrnamentMain from '../components/ornamentMain'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Страница не найдена' keywords={[`краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='not-found-page'>
      <OrnamentMain />
      <h2>СТРАНИЦА НЕ НАЙДЕНА</h2>
      <p>Вы попали на страницу, которой не существует. Перейти на <Link to='/'>главную</Link>.</p>
    </div>
  </Layout>
)

export default NotFoundPage
