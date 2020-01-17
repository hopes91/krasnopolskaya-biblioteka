import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DecorMain from '../components/decorMain'
import '../styles/page/page.scss'
import '../styles/page/news.scss'



const IndexPage = () => (
  <Layout>
    <SEO title='Главная' keywords={[`новости краснопольской библиотеки`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='page news'>
      <DecorMain />
      <h2 className='page-title'>Новости</h2>

    </div>
  </Layout>
)

export default IndexPage
