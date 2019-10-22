import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DecorMain from '../components/decorMain'
import '../styles/page/page.scss'
import '../styles/page/_about.scss'

const AboutLibrarianPage = () => (
  <Layout>
    <SEO title='О библиотекаре' keywords={[`фалалеева елена евгеньевна`, `о библиотекаре`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='page page_about page_about_librarian'>
      <DecorMain />
      <h2 className='page__title'>О библиотекаре</h2>
      <p>Со 2 августа 1982 года библиотекарем в Краснопольской библиотеке работает Елена Евгеньевна Опарина (Фалалеева). Елена Евгеньевна имеет высшее библиотечное образование, в 1988 закончила Пермский институт культуры. В настоящее время работает на полставки.</p>
    </div>
  </Layout>
)

export default AboutLibrarianPage
