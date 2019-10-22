import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DecorMain from '../components/decorMain'
import { otVsejDushiEvents } from '../lists/otVsejDushiEvents'
import '../styles/page/page.scss'
import '../styles/page/_events.scss'

const PosterOtVsejDushiPage = () => (
  <Layout>
    <SEO title='Программа семейного клуба «От всей души»' keywords={[`афиша`, `семейный клуб`, `от всей души`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='page page_events page_events_poster-ot-vsej-dushi'>
      <DecorMain />
      <h2 className='page__title'>Программа семейного клуба «От всей души» на 2019 год</h2>
      {otVsejDushiEvents.map((event, ind) => {
        const { posterDate, posterEvents } = event

        return (
          <section key={posterDate} className='page_events__section'>
            <p className='page_events__dates'>{posterDate}</p>
            <p className='page_events__events'>{posterEvents}</p>
          </section>
        )
      })}
    </div>
  </Layout>
)

export default PosterOtVsejDushiPage
