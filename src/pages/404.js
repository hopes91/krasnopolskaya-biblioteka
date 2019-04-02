import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Страница не найдена' />
    <h1>СТРАНИЦА НЕ НАЙДЕНА</h1>
    <p>Вы попали на страницу, которой не существует. Перейти на <Link to='/'>главную</Link>.</p>
  </Layout>
)

export default NotFoundPage
