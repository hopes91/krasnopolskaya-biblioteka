import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import OrnamentMain from '../components/ornamentMain'

const PosterOtVsejDushiPage = () => (
  <Layout>
    <SEO title='Программа семейного клуба «От всей души»' keywords={[`афиша`, `семейный клуб`, `от всей души`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='news-and-events poster-ot-vsej-dushi'>
      <OrnamentMain />
      <h2>Программа семейного клуба «От всей души» на 2019 год</h2>
      <div> 
        <p className='poster-dates'>Январь</p>
        <p className='poster-events'>Святочный вечер</p>
      </div>
      <div>
        <p className='poster-dates'>Февраль</p>
        <p className='poster-events'>Вечер к Дню влюбленных</p>
      </div>
      <div>
        <p className='poster-dates'>Март</p>
        <p className='poster-events'>Вечер юмора</p>
      </div>
      <div>
        <p className='poster-dates'>Апрель</p>
        <p className='poster-events'>Огородные хлопоты</p>
      </div>
      <div>
        <p className='poster-dates'>Май</p>
        <p className='poster-events'>Вечер отдыха к Международному дню семьи</p>
      </div>
      <div>
        <p className='poster-dates'>Август</p>
        <p className='poster-events'>Собрал нас вместе Спас</p>
      </div>
      <div>
        <p className='poster-dates'>Октябрь</p>
        <p className='poster-events'>Осенние дары</p>
      </div>
      <div>
        <p className='poster-dates'>Ноябрь</p>
        <p className='poster-events'>Вечер по толерантности (к Году Турции в России)</p>
      </div>
      <div>
        <p className='poster-dates'>Декабрь</p>
        <p className='poster-events'>Новогодняя сказка</p>
      </div>
    </div>
  </Layout>
)

export default PosterOtVsejDushiPage
