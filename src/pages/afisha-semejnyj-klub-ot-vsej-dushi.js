import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import OrnamentMain from '../components/ornamentMain'

const otVsejDushiEvents = [
  { posterDate: 'Январь', posterEvent: 'Святочный вечер' }, 
  { posterDate: 'Февраль', posterEvent: 'Вечер к Дню влюблённых' }, 
  { posterDate: 'Март', posterEvent: 'Вечер юмора' }, 
  { posterDate: 'Апрель', posterEvent: 'Огородные хлопоты' }, 
  { posterDate: 'Май', posterEvent: 'Вечер отдыха к Международному дню семьи' }, 
  { posterDate: 'Август', posterEvent: 'Собрал нас вместе Спас' }, 
  { posterDate: 'Октябрь', posterEvent: 'Осенние дары' }, 
  { posterDate: 'Ноябрь', posterEvent: 'Вечер по толерантности (к Году Турции в России)' }, 
  { posterDate: 'Декабрь', posterEvent: 'Новогодняя сказка' }
]

const PosterOtVsejDushiPage = () => (
  <Layout>
    <SEO title='Программа семейного клуба «От всей души»' keywords={[`афиша`, `семейный клуб`, `от всей души`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='news-and-events poster-ot-vsej-dushi'>
      <OrnamentMain />
      <h2>Программа семейного клуба «От всей души» на 2019 год</h2>
      {otVsejDushiEvents.map((event, ind) => {
        const { posterDate, posterEvent } = event

        return (
          <div key={ind}> 
            <p key={posterDate} className='poster-dates'>{posterDate}</p>
            <p key={posterEvent} className='poster-events'>{posterEvent}</p>
          </div>
        )
      })}
    </div>
  </Layout>
)

export default PosterOtVsejDushiPage
