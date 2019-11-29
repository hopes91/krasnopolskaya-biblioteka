import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DecorMain from '../components/decorMain'
import { usefulLinks } from '../lists/usefulLinks'
import '../styles/page/page.scss'
import '../styles/page/services.scss'

const UsefulLinksPage = () => (
  <Layout>
    <SEO title='Полезные ссылки' keywords={[`полезные ссылки`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='page services useful-links'>
      <DecorMain />
      <h2 className='page-title'>Полезные ссылки</h2>
      {usefulLinks.map(link => {
        const { href, title } = link

        return (
          <a
            href={href}
            key={title}
            target='_blank'
            rel='noopener noreferrer'
          >
            {title}
          </a>
        )
      })}
    </div>
  </Layout>
)

export default UsefulLinksPage
