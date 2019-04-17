import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import OrnamentMain from '../components/ornamentMain'

const PosterPage = () => (
  <Layout>
    <SEO title='Афиша апреля 2019 года' keywords={[`афиша`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='news-and-events poster'>
      <OrnamentMain />
      <h2>Афиша февраля 2019 года</h2>
      <table>
        <tr>
          <th>Дата</th>
          <th>Форма и наименование мероприятий</th>
          <th>Категория пользователей</th>
        </tr>
        <tr>
          <td>1 апреля</td>
          <td>
            Экологический час «В царстве птиц»<br />
            Громкое чтение сказочки-завиралочки Валерия Тулякова «Охотник»
          </td>
          <td>Кружок «Библионик»</td>
        </tr>
        <tr>
          <td>8 апреля</td>
          <td>
            Час ЗОЖ  «Вперёд по дороге здоровья!»<br />
            Мультфильм «Притча о наркотиках»<br />
            Мультфильм о вреде курения<br /><br />
            <span className='td-title'>Час сказки на Вятке</span><br />
            Видео «Сказочные игры на Вятке»<br />
            Комментированное чтение сказки Марины Черненковой «Как царевну сын Балдея спас»
          </td>
          <td>Кружок «Библионик»</td>
        </tr>
        <tr>
          <td>8 апреля</td>
          <td>
            Стенд «Азбука здоровья»
          </td>
          <td>Дети</td>
        </tr>
        <tr>
          <td>15 апреля</td>
          <td>
            Библиотечный урок «Современные детские книги»<br />
            Обсуждение видео «Ледовое побоище»<br /><br />
            <span className='td-title'>Час вятского фольклора</span><br />
            Электронная викторина «Вятские загадки»<br />
            Игра «Угадай вятское словечко»
          </td>
          <td>Кружок «Библионик»</td>
        </tr>
        <tr>
          <td>19 апреля</td>
          <td>
            Библионочь «Весь мир – театр»<br />
            Электронная викторина «Вспомните «Ночь перед Рождеством» Гоголя»
          </td>
          <td>Все</td>
        </tr>
        <tr>
          <td>22 апреля</td>
          <td>
            Экологическое ассорти к Дню Земли «Умей жить на Земле!»<br /><br />
            <span className='td-title'>Час вятской книги</span><br />
            Видео «В библиотеке №3 города Кирова» о выставке сказочных героев<br />
            Клип «Колотушка тук-тук» по стихотворению Н. Заболоцкого «Меркнут знаки Зодиака»
          </td>
          <td>Кружок «Библионик»</td>
        </tr>
        <tr>
          <td>29 апреля</td>
          <td>
            Мультфильм «Азбука денег тётушки Совы. Потребности и возможности»<br />
            Клип «Светлая Пасха»
          </td>
          <td>Кружок «Библионик»</td>
        </tr>
        <tr>
          <td>весь апрель</td>
          <td>
            Буклет «Мы ими гордимся» (о знаменитых тружениках ПСПК «Краснопольский»)
          </td>
          <td>Все</td>
        </tr>
      </table>
    </div>
  </Layout>
)

export default PosterPage