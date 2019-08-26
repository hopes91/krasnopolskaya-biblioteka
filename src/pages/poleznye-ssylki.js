import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DecorMain from '../components/decorMain'
import { usefulLinks } from '../lists/usefulLinks'
import '../styles/page/page.scss'
import '../styles/page/_services.scss'

const UsefulLinksPage = () => (
  <Layout>
    <SEO title='Полезные ссылки' keywords={[`полезные ссылки`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='page page_services page_services_useful-links'>
      <DecorMain />
      <h2 className='page__title'>Полезные ссылки</h2>
      {usefulLinks.map(link => {
        const { href, title } = link

        return (
          <a href={href} key={title} target='_blank' rel='noopener noreferrer' className='page_services_useful-links__link'>{title}</a>
        )
      })}
    </div>
  </Layout>
)

export default UsefulLinksPage
