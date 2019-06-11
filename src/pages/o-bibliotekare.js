import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import OrnamentMain from '../components/ornamentMain'

const AboutLibrarianPage = () => (
  <Layout>
    <SEO title='О библиотекаре' keywords={[`о библиотекаре`, `фалалеева елена евгеньевна`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='page page_about page_about_librarian'>
      <OrnamentMain />
      <h2 className='page__title'>О библиотекаре</h2>
      <p>Со 2 августа 1982 года библиотекарем в Краснопольской библиотеке работает Елена Евгеньевна Опарина (Фалалеева). Елена Евгеньевна имеет высшее библиотечное образование, в 1988 закончила Пермский институт культуры. В настоящее время работает на полставки.</p>
    </div>
  </Layout>
)

export default AboutLibrarianPage
