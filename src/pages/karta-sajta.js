import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DecorMain from '../components/decorMain'
import { linksSectionOne, linksSectionTwo, linksSectionThree, linksSectionFour, linksSectionFive } from '../lists/menu'
import SiteMapSection from '../components/siteMapSection'
import '../styles/page/page.scss'
import '../styles/page/_site-map.scss'

const SiteMapPage = () => (
  <Layout>
    <SEO title='Карта сайта' keywords={[`карта сайта`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='page page_site-map'>
      <DecorMain />
      <h2 className='page__title'>Карта сайта</h2>
      <SiteMapSection
        sectionTitle='Главная'
        links={linksSectionOne}
      />
      <SiteMapSection
        sectionTitle='О библиотеке'
        links={linksSectionTwo}
      />
      <SiteMapSection
        sectionTitle='Новости и события'
        links={linksSectionThree}
      />
      <SiteMapSection
        sectionTitle='Услуги'
        links={linksSectionFour}
      />
      <SiteMapSection
        sectionTitle='Карта сайта'
        links={linksSectionFive}
      />
    </div>
  </Layout>
)

export default SiteMapPage
