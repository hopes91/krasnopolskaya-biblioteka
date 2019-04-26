import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import OrnamentMain from '../components/ornamentMain'

const PosterPage = () => (
  <Layout>
    <SEO title='Афиша апреля 2019 года' keywords={[`афиша`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='news-and-events poster'>
      <OrnamentMain />
      <h2>Афиша апреля 2019 года</h2>
      <table>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Форма и наименование мероприятий</th>
            <th>Категория пользователей</th>
          </tr>
        </thead>

        <tbody>
          
        </tbody>
      </table>
    </div>
  </Layout>
)

export default PosterPage
