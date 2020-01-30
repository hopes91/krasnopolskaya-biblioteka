import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DecorMain from '../components/decorMain'
import '../styles/page/page.scss'
import '../styles/page/events.scss'
import '../styles/main/table.scss'

const PosterPage = () => (
  <Layout>
    <SEO title='Афиша на февраль 2020 года' keywords={[`предстоящие события`, `афиша`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='page events poster'>
      <DecorMain />
      <h2 className='page-title'>Афиша на февраль 2020 года</h2>
      <table>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Форма и наименование мероприятий</th>
            <th>Категория пользователей</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3 февраля</td>
            <td>
              Видео «Сталинград. Русские не сдаются»<br />
              Экологическое ассорти «День водно-болотных угодий»
            </td>
            <td>Кружок «Библионик»</td>
          </tr>
          <tr>
            <td>10 февраля</td>
            <td>Плакат к 130-летию Б. Пастернака</td>
            <td>Все</td>
          </tr>
          <tr>
            <td>10 февраля</td>
            <td>Экологический час «2020 год — Год Антарктиды»</td>
            <td>Кружок «Библионик»</td>
          </tr>
          <tr>
            <td>14 февраля</td>
            <td>Листовка «15 февраля — День вывода Советских войск из Афганистана»</td>
            <td>Все</td>
          </tr>
          <tr>
            <td>15 февраля</td>
            <td>Плакат к 100-летию Вестли</td>
            <td>Все</td>
          </tr>
          <tr>
            <td>17 февраля</td>
            <td>
              Видеосалон «У нас друзья на всей планете»<br />
              Клип «Служу России»
            </td>
            <td>Кружок «Библионик»</td>
          </tr>
          <tr>
            <td>19 февраля</td>
            <td>Стенд «75 лет Победы в Великой Отечественной войне»</td>
            <td>Все</td>
          </tr>
          <tr>
            <td>20 февраля</td>
            <td>Викторина на дому «Эпоха Петра I»</td>
            <td>Ребёнок с инвалидностью</td>
          </tr>
          <tr>
            <td>26 февраля</td>
            <td>Клип «Масленица пришла!»</td>
            <td>Кружок «Библионик»</td>
          </tr>
          <tr>
            <td>29 февраля</td>
            <td>Плакат к 100-летию Ф. Абрамова</td>
            <td>Все</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Layout>
)

export default PosterPage
