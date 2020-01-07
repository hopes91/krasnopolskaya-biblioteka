import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DecorMain from '../components/decorMain'
import '../styles/page/page.scss'
import '../styles/page/events.scss'

const PosterBiblionikPage = () => (
  <Layout>
    <SEO title='Программа кружка «Библионик»' keywords={[`афиша`, `кружок`, `библионик`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='page events poster-biblionik'>
      <DecorMain />
      <h2 className='page-title'>Программа кружка «Библионик» на 2020 год</h2>
      <p>Для детей старшей группы детского сада «Родничок». Занятия проходят по понедельникам с 15:30.</p>
      <ul>
        <p>Цели и задачи:</p>
        <li>Познавательная активность, расширение кругозора</li>
        <li>Пропаганда произведений мировой литературы, книг-юбиляров и писателей-юбиляров</li>
        <li>Развитие наблюдательности, внимания к окружающему миру</li>
        <li>Воспитание толерантности</li>
        <li>Знакомство с праздниками (экологическими и календарными)</li>
      </ul>
      <table>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Форма и наименование мероприятий</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>13 января</td>
            <td>День информации «Интересно. 2020 год – Год Крысы»</td>
          </tr>
          <tr>
            <td>20 января</td>
            <td>Литературное ассорти (по книгам Л. Гераскиной и братьев Гримм)</td>
          </tr>
          <tr>
            <td>27 января</td>
            <td>Литературный портрет «Юбилей Чехова»</td>
          </tr>
          <tr>
            <td>3 февраля</td>
            <td>Экологическое ассорти «День водно-болотных угодий»</td>
          </tr>
          <tr>
            <td>10 февраля</td>
            <td>Экологический час «2020 год — Год Антарктиды»</td>
          </tr>
          <tr>
            <td>17 февраля</td>
            <td>Видеосалон «У нас друзья на всей планете»</td>
          </tr>
          <tr>
            <td>2 марта</td>
            <td>Литературный портрет «Юбилей П. Ершова»</td>
          </tr>
          <tr>
            <td>16 марта</td>
            <td>Видеосалон «Уроки доброты с тётушкой Совой»</td>
          </tr>
          <tr>
            <td>23 марта</td>
            <td>Библиотечный урок «Мир журналов для детей»</td>
          </tr>
          <tr>
            <td>6 апреля</td>
            <td>Литературный портрет «Юбилей Андерсена»</td>
          </tr>
          <tr>
            <td>20 апреля</td>
            <td>Экологическое ассорти «Зелёное чудо Земля»</td>
          </tr>
          <tr>
            <td>27 апреля</td>
            <td>Урок памяти «Была весна — весна Победы»</td>
          </tr>
          <tr>
            <td>18 мая</td>
            <td>Видео «История Александра Невского для малышей» к 800-летию А. Невского</td>
          </tr>
          <tr>
            <td>25 мая</td>
            <td>Библиотечный урок «Вас ждут приключения на Острове Чтения»</td>
          </tr>
          <tr>
            <td>1 июня</td>
            <td>Час весёлых затей к Международному дню детей</td>
          </tr>
          <tr>
            <td>8 июня</td>
            <td>Видеосалон «О той стране, где ты родился»</td>
          </tr>
          <tr>
            <td>24 августа</td>
            <td>Видеосалон «Сказка — ложь, а в ней намёк»</td>
          </tr>
          <tr>
            <td>31 августа</td>
            <td>Час национальной культуры «Мы разные, но мы вместе»</td>
          </tr>
          <tr>
            <td>5 октября</td>
            <td>Видеосалон «День защиты животных»</td>
          </tr>
          <tr>
            <td>12 октября</td>
            <td>Ассорти «Книжная осень»</td>
          </tr>
          <tr>
            <td>26 октября</td>
            <td>Библиотечный урок «Юбилей Родари»</td>
          </tr>
          <tr>
            <td>9 ноября</td>
            <td>Мультфильм «Пользуйся с умом» к Международному дню энергосбережения</td>
          </tr>
          <tr>
            <td>16 ноября</td>
            <td>Видеосалон «Самое интересное о странах мира» к Международному дню толерантности</td>
          </tr>
          <tr>
            <td>30 ноября</td>
            <td>Экологическое ассорти «Чудеса живут в природе»</td>
          </tr>
          <tr>
            <td>7 декабря</td>
            <td>Час ЗОЖ «Волшебные правила здоровья»</td>
          </tr>
          <tr>
            <td>14 декабря</td>
            <td>Видеопоказ «Права детей» к Международному дню прав человека</td>
          </tr>
          <tr>
            <td>21 декабря</td>
            <td>Видеопоказ «Весёлое новогоднее путешествие с тётушкой Совой»</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Layout>
)

export default PosterBiblionikPage
