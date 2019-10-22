import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DecorMain from '../components/decorMain'
import { biblonikEvents } from '../lists/biblionikEvents'
import '../styles/page/page.scss'
import '../styles/page/_events.scss'

const PosterBiblionikPage = () => (
  <Layout>
    <SEO title='Программа кружка «Библионик»' keywords={[`афиша`, `кружок`, `библионик`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='page page_events page_events_poster-biblionik'>
      <DecorMain />
      <h2 className='page__title'>Программа кружка «Библионик» на 2019 год</h2>
      <p>Для детей старшей группы детского сада «Родничок». Занятия проходят по понедельникам с 15:30.</p>
      <ul>
        <p>Цели и задачи:</p>
        <li>Познавательная активность, расширение кругозора</li>
        <li>Пропаганда произведений мировой литературы, книг-юбиляров и писателей-юбиляров</li>
        <li>Развитие наблюдательности, внимания к окружающему миру</li>
        <li>Воспитание толерантности</li>
        <li>Знакомство с праздниками (экологическими и календарными)</li>
      </ul>
      {biblonikEvents.map((event, ind) => {
        const { posterDate, posterEvents } = event

        return (
          <section key={posterDate} className='page_events__section'>
            <p className='page_events__dates'>{posterDate}</p>
            {posterEvents.map(posterEvent => <p key={posterEvent} className='page_events__events'>{posterEvent}</p>)}
          </section>
        )
      })}
    </div>
  </Layout>
)

export default PosterBiblionikPage
