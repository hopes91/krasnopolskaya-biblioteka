import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import OrnamentMain from '../components/ornamentMain'

const usefulLinks = [
  { href: 'http://sunalib.ru/', title: 'Сунская центральная библиотека имени Ф. Ф. Павленкова' },
  { href: 'http://www.herzenlib.ru/', title: 'Кировская областная библиотека имени А. И. Герцена' },
  { href: 'https://bibliotekagrina.ru/', title: 'Кировская областная библиотека для детей и юношества имени А. С. Грина' },
  { href: 'http://lihanovlib.ru/', title: 'Библиотека для детей и юношества имени Альберта Лиханова' },
  { href: 'http://childbook.ru/o-biblioteke/', title: 'Липецкая областная детская библиотека' },
  { href: 'https://bibliomaniya.blogspot.com/', title: 'Блог БИБЛИОМАНИЯ' },
  { href: 'http://kum-biblio.ru/', title: 'Библиотека имени А. В. Фищева' },
  { href: 'http://www.rgub.ru/', title: 'Российская государственная библиотека для молодёжи' },
  { href: 'https://rgdb.ru/', title: 'Российская государственная детская библиотека' },
  { href: 'http://arch.rgdb.ru/xmlui/', title: 'Национальная электронная детская библиотека' },
  { href: 'https://xn--90ax2c.xn--p1ai/', title: 'Национальная электронная библиотека' },
  { href: 'https://www.rsl.ru/', title: 'Российская государственная библиотека' },
  { href: 'http://childlib.kmtn.ru/index.htm', title: 'Костромская областная детская библиотека имени Аркадия Гайдара' },
  { href: 'http://www.pushkin-vyatka.ru/', title: 'Центральная городская библиотека имени А. С. Пушкина' },
  { href: 'http://urzhumlib.ru/news/?lib=ucb', title: 'Уржумская центральная библиотека' },
  { href: 'http://www.nolinsklib.ru/centralnaya_rajonnaya_biblioteka/', title: 'Нолинская Централизованная Библиотечная Система' }
]

const UsefulLinksPage = () => (
  <Layout>
    <SEO title='Полезные ссылки' keywords={[`полезные ссылки`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='services useful-links'>
      <OrnamentMain />
      <h2>Полезные ссылки</h2>
      {usefulLinks.map(link => {
        const { href, title } = link

        return (
          <a href={href} target='_blank' rel='noopener noreferrer'>{title}</a>
        )
      })}
    </div>
  </Layout>
)

export default UsefulLinksPage
