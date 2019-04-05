import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import OrnamentMain from '../components/ornamentMain'

const UsefulLinksPage = () => (
  <Layout>
    <SEO title='Полезные ссылки' keywords={[`полезные ссылки`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='services useful-links'>
      <OrnamentMain />
      <h2>Полезные ссылки</h2>
      <a href='http://sunalib.ru/' target='_blank' rel='noopener noreferrer'>Сунская центральная библиотека имени Ф. Ф. Павленкова</a>
      <a href='http://www.herzenlib.ru/' target='_blank' rel='noopener noreferrer'>Кировская областная библиотека имени А. И. Герцена</a>
      <a href='https://bibliotekagrina.ru/' target='_blank' rel='noopener noreferrer'>Кировская областная библиотека для детей и юношества имени А.С. Грина</a>
      <a href='http://lihanovlib.ru/' target='_blank' rel='noopener noreferrer'>Библиотека для детей и юношества имени Альберта Лиханова</a>
      <a href='http://childbook.ru/o-biblioteke/' target='_blank' rel='noopener noreferrer'>Липецкая областная детская библиотека</a>
      <a href='https://bibliomaniya.blogspot.com/' target='_blank' rel='noopener noreferrer'>Блог БИБЛИОМАНИЯ</a>
      <a href='http://kum-biblio.ru/' target='_blank' rel='noopener noreferrer'>Библиотека имени А. В. Фищева</a>
      <a href='http://www.rgub.ru/' target='_blank' rel='noopener noreferrer'>Российская государственная библиотека для молодёжи</a>
      <a href='https://rgdb.ru/' target='_blank' rel='noopener noreferrer'>Российская государственная детская библиотека</a>
      <a href='http://arch.rgdb.ru/xmlui/' target='_blank' rel='noopener noreferrer'>Национальная электронная детская библиотека</a>
      <a href='https://xn--90ax2c.xn--p1ai/' target='_blank' rel='noopener noreferrer'>Национальная электронная библиотека</a>
      <a href='https://www.rsl.ru/' target='_blank' rel='noopener noreferrer'>Российская государственная библиотека</a>
      <a href='http://childlib.kmtn.ru/index.htm' target='_blank' rel='noopener noreferrer'>Костромская областная детская библиотека имени Аркадия Гайдара</a>
      <a href='http://www.pushkin-vyatka.ru/' target='_blank' rel='noopener noreferrer'>Центральная городская библиотека имени А. С. Пушкина</a>
    </div>
  </Layout>
)

export default UsefulLinksPage
