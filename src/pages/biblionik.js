import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DecorMain from '../components/decorMain'

import '../styles/page/page.scss'
import '../styles/page/_events.scss'

const biblonikEvents = [
  { posterDate: 'Январь', posterEvents: [ 'Всемирный день снега',
                                          'Видео к юбилею Гайдара',
                                          'День снятия блокады Ленинграда',
                                          'Литературный час к юбилею Бажова' ]
  },
  { posterDate: 'Февраль', posterEvents: [ 'Урок памяти «Сталинградская битва»',
                                          'День информации «Хвост крючком, нос пятачком» к Году Свиньи',
                                          'Литературный час к юбилею Бианки',
                                          'Литературный час к юбилею Крылова' ]
  },
  { posterDate: 'Март', posterEvents: [ 'Час веселых затей к юбилею И. Токмаковой',
                                        'Час информации «Первый космонавт Вселенной» к юбилею Гагарина',
                                        'Час турецкой культуры' ]
  },
  { posterDate: 'Апрель', posterEvents: [ 'Экологический час День птиц',
                                          'Библиотечный урок «Современные детские книги»',
                                          'День экологических знаний',
                                          'Международный день Земли' ]
  },
  { posterDate: 'Май', posterEvents: [ 'День победы',
                                      'День музеев',
                                      'Библиотечный урок «День российских библиотек»',
                                      'Библиотечный урок «Путешествие по детскому интернету»' ]
  },
  { posterDate: 'Июнь', posterEvents: [ 'День защиты детей',
                                        'День эколога',
                                        'Пушкинский день',
                                        'Урок доброты тётушки Совы' ]
  },
  { posterDate: 'Август', posterEvents: [ 'Урок памяти «Курская битва»',
                                          'Час турецкой культуры',
                                          'День российского кино' ]
  },
  { posterDate: 'Октябрь', posterEvents: [ 'Всемирный день животных',
                                          'Международный день музыки',
                                          'Международный день хлеба' ]
  },
  { posterDate: 'Ноябрь', posterEvents: [ 'Синичкин день',
                                          'Урок доброты тётушки Совы',
                                          'Клип о толерантности',
                                          'День рождения Деда Мороза',
                                          'День слонов' ]
  },
  { posterDate: 'Декабрь', posterEvents: [ 'Всемирный день футбола',
                                          'День чая',
                                          'День Конституции РФ' ]
  }
]

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
