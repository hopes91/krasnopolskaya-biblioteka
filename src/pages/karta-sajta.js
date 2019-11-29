import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DecorMain from '../components/decorMain'
import { sectionTitles, linksSectionOne, linksSectionTwo, linksSectionThree, linksSectionFour, linksSectionFive } from '../lists/menu'
import SiteMapSection from '../components/siteMapSection'
import '../styles/page/page.scss'
import '../styles/page/site-map.scss'

const SiteMapPage = () => (
  <Layout>
    <SEO title='Карта сайта' keywords={[`карта сайта`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='page site-map'>
      <DecorMain />
      <h2 className='page-title'>Карта сайта</h2>
      {sectionTitles.map((sectionTitle, ind) => {
        const sectionLinks = [linksSectionOne, linksSectionTwo, linksSectionThree, linksSectionFour, linksSectionFive]
        const titleIndex = ind

        const links = sectionLinks.find((section, ind) => {
          return titleIndex === ind && section
        })

        return <SiteMapSection
                key={sectionTitle}
                sectionTitle={sectionTitle}
                links={links}
              />
      })}
    </div>
  </Layout>
)

export default SiteMapPage
