import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DecorMain from '../components/decorMain'
import '../styles/page/page.scss'
import '../styles/page/events.scss'
import '../styles/main/table.scss'

const PosterPage = () => (
  <Layout>
    <SEO title='Афиша' keywords={[`предстоящие события`, `афиша`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='page events poster'>
      <DecorMain />
      <h2 className='page-title'>Афиша</h2>
      {/* <table>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Форма и наименование мероприятий</th>
            <th>Категория пользователей</th>
          </tr>
        </thead>

        <tbody>

        </tbody>
      </table> */}
    </div>
  </Layout>
)

export default PosterPage
