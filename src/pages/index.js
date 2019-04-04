import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import OrnamentMain from '../components/ornamentMain'

import newsOne from '../images/news/24032019-2.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title='Главная' keywords={[`краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='news'>
      <OrnamentMain />
      <h2>Новости</h2>
      <section>
        <h3>24 марта 2019 год</h3>
        <img src={newsOne} alt='Благодарность Пермяковой Л. А.' />
      </section>
    </div>
  </Layout>
)

export default IndexPage
