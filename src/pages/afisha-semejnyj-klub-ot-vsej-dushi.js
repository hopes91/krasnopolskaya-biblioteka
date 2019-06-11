import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import OrnamentMain from '../components/ornamentMain'

const otVsejDushiEvents = [
  { posterDate: 'Январь', posterEvents: 'Святочный вечер' },
  { posterDate: 'Февраль', posterEvents: 'Вечер к Дню влюблённых' },
  { posterDate: 'Март', posterEvents: 'Вечер юмора' },
  { posterDate: 'Апрель', posterEvents: 'Огородные хлопоты' },
  { posterDate: 'Май', posterEvents: 'Вечер отдыха к Международному дню семьи' },
  { posterDate: 'Август', posterEvents: 'Собрал нас вместе Спас' },
  { posterDate: 'Октябрь', posterEvents: 'Осенние дары' },
  { posterDate: 'Ноябрь', posterEvents: 'Вечер по толерантности (к Году Турции в России)' },
  { posterDate: 'Декабрь', posterEvents: 'Новогодняя сказка' }
]

const PosterOtVsejDushiPage = () => (
  <Layout>
    <SEO title='Программа семейного клуба «От всей души»' keywords={[`афиша`, `семейный клуб`, `от всей души`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='page page_events page_events_poster-ot-vsej-dushi'>
      <OrnamentMain />
      <h2 className='page__title'>Программа семейного клуба «От всей души» на 2019 год</h2>
      {otVsejDushiEvents.map((event, ind) => {
        const { posterDate, posterEvents } = event

        return (
          <div key={posterDate}>
            <p className='poster-dates'>{posterDate}</p>
            <p className='poster-events'>{posterEvents}</p>
          </div>
        )
      })}
    </div>
  </Layout>
)

export default PosterOtVsejDushiPage
