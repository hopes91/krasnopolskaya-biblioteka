import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import OrnamentMain from '../components/ornamentMain'

const PastEventsPage = () => (
  <Layout>
    <SEO title='Прошедшие события 2019 года' keywords={[`прошедшие события 2019 года`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='news-and-events past-events'>
      <OrnamentMain />
      <h2>Прошедшие события 2019 года</h2>
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
            <td>3 января</td>
            <td>Электронная выставка и викторина «В детстве мы читали книги Гайдара»</td>
            <td>Кружок «Библионик»</td>
          </tr>
          <tr>
            <td>4 января</td>
            <td>Интеллектуальное казино «Интересно о городе Кирове»</td>
            <td>Дети школьного возраста</td>
          </tr>
          <tr>
            <td>7 января</td>
            <td>Час весёлых затей «Под чистым небом Рождества»</td>
            <td>Дети школьного возраста</td>
          </tr>
          <tr>
            <td>14 января</td>
            <td>Экологический час к Дню заповедников</td>
            <td>Кружок «Библионик»</td>
          </tr>
          <tr>
            <td>17 января</td>
            <td>
              Святочный вечер<br />
              Электронная выставка-просмотр «Год Свиньи по Китайскому календарю»
            </td>
            <td>Семейный клуб «От всей души»</td>
          </tr>
          <tr>
            <td>21 января</td>
            <td>
              Литературное ассорти<br />
              Видео к юбилею Гайдара<br />
              Видео «Павел Бажов»
            </td>
            <td>Кружок «Библионик»</td>
          </tr>
          <tr>
            <td>28 января</td>
            <td>Час памяти «Дети блокадного Ленинграда»</td>
            <td>Кружок «Библионик»</td>
          </tr>

          <tr>
            <td>4 февраля</td>
            <td>Час памяти «Сталинградская битва»</td>
            <td>Кружок «Библионик»</td>
          </tr>
          <tr>
            <td>11 февраля</td>
            <td>
              Литературный час к юбилею Бианки<br />
              Электронная выставка «Книги Бианки»<br />
              Мультфильм «Дети разных народов»
            </td>
            <td>Кружок «Библионик»</td>
          </tr>
          <tr>
            <td>середина февраля</td>
            <td>Игра к 250-летию И. Крылова «Кто хочет стать миллионером»</td>
            <td>Дети школьного возраста</td>
          </tr>
          <tr>
            <td></td>
            <td>Видео к Дню воинов-интернационалистов в России</td>
            <td>Кружок «Библионик»</td>
          </tr>
          <tr>
            <td></td>
            <td>Вечер к Дню влюблённых</td>
            <td>Семейный клуб «От всей души»</td>
          </tr>
          <tr>
            <td>18 февраля</td>
            <td>
              Мультфильм к юбилею Бажова<br />
              Мультфильм «Азбука денег тётушки Совы. Осторожно, деньги»<br />
              Мультфильм «Азбука здоровья»
            </td>
            <td>Кружок «Библионик»</td>
          </tr>
          <tr>
            <td>25 февраля</td>
            <td>
              Видео «День полярного медведя»<br />
              Литературный час «Дедушка Крылов»
            </td>
            <td>Кружок «Библионик»</td>
          </tr>
          <tr>
            <td>весь февраль</td>
            <td>Анкетирование «Читатель 21 века: ПроЧТЕНИЕ детей и подростков»</td>
            <td></td>
          </tr>

          <tr>
            <td>25 марта</td>
            <td>
              <span className='td-title'>Час вятской книги</span><br />
              Видео «Ирина Краева читает сказку «Когда Дусе грустно» из книги «Чаепитие с пяткой»<br />
              Видео «Ирина Краева читает сказку «Ломашка и Кефиш» из книги «Чаепитие с пяткой»<br />
              Видео «Ирина Антоненко читает сказку «Маракуйя» из книги И. Краевой «Чаепитие с пяткой»
            </td>
            <td>Кружок «Библионик»</td>
          </tr>
          <tr>
            <td>26 марта</td>
            <td>Громкое чтение на дому сказочки-завиралочки Валерия Тулякова «Охотник»</td>
            <td>Ребёнок с ограниченными возможностями</td>
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
        </tbody>
      </table>
    </div>
  </Layout>
)

export default PastEventsPage
