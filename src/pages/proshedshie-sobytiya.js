import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DecorMain from '../components/decorMain'
import '../styles/page/page.scss'
import '../styles/page/events.scss'
import '../styles/main/table.scss'

const PastEventsPage = () => (
  <Layout>
    <SEO title='Прошедшие события 2019 года' keywords={[`прошедшие события 2019 года`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='page events past-events'>
      <DecorMain />
      <h2 className='page-title'>Прошедшие события 2019 года</h2>
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
              Электронная выставка «Книги Бианки»Мультфильм<br />
              «Дети разных народов»
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
              <span><strong>Час вятской книги</strong></span><br />
              Видео «Ирина Краева читает сказку «Когда Дусе грустно» из книги «Чаепитие с пяткой»<br />
              Видео «Ирина Краева читает сказку «Ломашка и Кефиш» из книги «Чаепитие с пяткой»<br />
              Видео «Ирина Антоненко читает сказку «Маракуйя» из книги И. Краевой «Чаепитие с пяткой»
            </td>
            <td>Кружок «Библионик»</td>
          </tr>
          <tr>
            <td>26 марта</td>
            <td>Громкое чтение на дому сказочки-завиралочки Валерия Тулякова «Охотник»</td>
            <td>Ребёнок с инвалидностью</td>
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
              <span><strong>Час сказки на Вятке</strong></span><br />
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
              <span><strong>Час вятского фольклора</strong></span><br />
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
              <span><strong>Час вятской книги</strong></span><br />
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
          <tr>
            <td>1 мая</td>
            <td>Библиопикник</td>
            <td>Дети</td>
          </tr>
          <tr>
            <td>6 мая</td>
            <td>
              <span><strong>Час памяти «День победы»</strong></span><br />
              Клип «Хотят ли русские войны»<br />
              Выставка книг «Про тех, кто сражался и победил»
            </td>
            <td>Кружок «Библионик»</td>
          </tr>
          <tr>
            <td>8 мая</td>
            <td>Экологический десант</td>
            <td>Желающие</td>
          </tr>
          <tr>
            <td>13 мая</td>
            <td>
              Мультфильм «Все профессии нужны, все профессии важны»<br />
              Видео «Смешные и забавные предметы в музеях мира»<br />
              Видео «Дымковская игрушка»
            </td>
            <td>Кружок «Библионик»</td>
          </tr>
          <tr>
            <td>15 мая</td>
            <td>Вечер отдыха к Международному дню семьи</td>
            <td></td>
          </tr>
          <tr>
            <td>20 мая</td>
            <td>
              Библиотечный урок «Библиотечные открытия»<br />
              Электронная презентация «Книги-юбиляры 2019 года»<br />
              Мастер-класс «Книжные закладки делаем сами»
            </td>
            <td>Кружок «Библионик»</td>
          </tr>
          <tr>
            <td>27 мая</td>
            <td>
              Библиотечный урок «День российских библиотек»<br />
              Видео «Наркотики — чума нашего мира»
            </td>
            <td>Кружок «Библионик»</td>
          </tr>
          <tr>
            <td>3 июня</td>
            <td>
              <span><strong>Час весёлых затей «Мир вокруг нас»</strong></span><br />
              Видео к Дню защиты детей и дню эколога<br />
              Викторина<br />
              Видео «Игрушечные страсти» о полезных и вредных детских игрушках<br />
              Урок доброты тётушки Совы
            </td>
            <td>Кружок «Библионик»</td>
          </tr>
          <tr>
            <td>5 июня</td>
            <td>
              Экологический час<br />
              Видео «Самые красивые места Земли»<br />
              Викторина к Дню эколога<br />
              Мультфильм «У Лукоморья»
            </td>
            <td>Ребёнок с инвалидностью</td>
          </tr>
          <tr>
            <td>5 июня</td>
            <td>Игра-викторина «Паутина» к дню эколога</td>
            <td>Дети</td>
          </tr>
          <tr>
            <td>6 июня</td>
            <td>
              Литературная ночь «Какое счастье, что у России Пушкин есть»<br />
              Интеллектуальное казино «Свет мой, зеркальце, скажи!»
            </td>
            <td>Дети, подростки</td>
          </tr>
          <tr>
            <td>10 июня</td>
            <td>
              Видео «Любимая Россия»<br />
              Экскурсия по Краснополью «Есть улицы: Центральная, Школьная...»
            </td>
            <td>Дети</td>
          </tr>
          <tr>
            <td>11 июня</td>
            <td>
              Краеведческий час<br />
              Видео «Вятка»<br />
              Игра-викторина «Паутина»
            </td>
            <td>Дети</td>
          </tr>
          <tr>
            <td>11 июня</td>
            <td>Подарок читателю в день рождения</td>
            <td>Ребёнок с инвалидностью</td>
          </tr>
          <tr>
            <td>14 июня</td>
            <td>Экологический десант</td>
            <td>Дети</td>
          </tr>
          <tr>
            <td>первая половина июня</td>
            <td>Экскурсия-приглашение «Сюда приходят дети узнать про всё на свете»</td>
            <td>Дети из младшей группы детсада «Родничок»</td>
          </tr>
          <tr>
            <td>19 июня</td>
            <td>Конкурс «Этот трудный вятский язык»</td>
            <td>Дети</td>
          </tr>
          <tr>
            <td>21 июня</td>
            <td>Видео и викторина «День памяти и скорби»</td>
            <td>Дети, подростки</td>
          </tr>
          <tr>
            <td>26 июня</td>
            <td>
              <span><strong>Экологический час</strong></span><br />
              Видео «Птица 2019 года»<br />
              Викторина «Птицы-рыболовы»
            </td>
            <td>Дети, подростки</td>
          </tr>
          <tr>
            <td>июнь</td>
            <td>Электронная выставка-просмотр «Год Турции в России»</td>
            <td>Широкая аудитория</td>
          </tr>
          <tr>
            <td>3 июля</td>
            <td>Мультфильм по ОБЖ «Уроки тётушки Совы. Бродячие животные»</td>
            <td>Дети</td>
          </tr>
          <tr>
            <td>5 июля</td>
            <td>Электронная презентация «Нет-терроризму! Нет-войне!»</td>
            <td>Дети</td>
          </tr>
          <tr>
            <td>8 июля</td>
            <td>Мастер-класс «Ромашковое настроение»</td>
            <td>Дети</td>
          </tr>
          <tr>
            <td>10 июля</td>
            <td>Видео «Полтавская битва»</td>
            <td>Дети</td>
          </tr>
          <tr>
            <td>10 июля</td>
            <td>Игра «Доскажи словечко»</td>
            <td>Ребёнок с инвалидностью</td>
          </tr>
          <tr>
            <td>11 июля</td>
            <td>Шоколад-шоу</td>
            <td>Дети, подростки</td>
          </tr>
          <tr>
            <td>26 июля</td>
            <td>Интеллектуальное казино «День памяти Лермонтова»</td>
            <td>Дети</td>
          </tr>
          <tr>
            <td>июль</td>
            <td>
              Квест «Шерлок Холмс»<br />
              Поход
            </td>
            <td></td>
          </tr>
          <tr>
            <td>1 августа</td>
            <td>Час информации «Все профессии нужны, все профессии важны» (видео и викторина)</td>
            <td>Ребёнок с инвалидностью</td>
          </tr>
          <tr>
            <td>5 августа</td>
            <td>Электронная викторина «Угадай художника по картине»</td>
            <td>Дети</td>
          </tr>
          <tr>
            <td>7 августа</td>
            <td>Цветочное интеллектуальное казино</td>
            <td>Дети</td>
          </tr>
          <tr>
            <td>12 августа</td>
            <td>Видео «Милосердие зверей и людей»</td>
            <td>Дети</td>
          </tr>
          <tr>
            <td>19 августа</td>
            <td>
              <span><strong>Час вёселых затей</strong></span><br />
              Видео «Яблочный Спас»<br />
              Викторина «Яблочко наливное»
            </td>
            <td>Ребёнок с инвалидностью</td>
          </tr>
          <tr>
            <td>19 августа</td>
            <td>Час турецкой культуры</td>
            <td>Кружок «Библионик»</td>
          </tr>
          <tr>
            <td>22 августа</td>
            <td>Исторический час «Овеян славой флаг России»</td>
            <td>Дети, подростки</td>
          </tr>
          <tr>
            <td>26 августа</td>
            <td>
              Электронная викторина «Угадай мультфильм»<br />
              Видео «Курская битва»
            </td>
            <td>Кружок «Библионик»</td>
          </tr>
          <tr>
            <td>28 августа</td>
            <td>Интеллектуальное казино к Дню российского кино</td>
            <td>Желающие</td>
          </tr>
          <tr>
            <td>август</td>
            <td>Экологический десант</td>
            <td>Дети</td>
          </tr>
          <tr>
            <td>конец августа</td>
            <td>
              День прощания с летом<br />
              Квест «В поисках клада»
            </td>
            <td>Дети, подростки</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Layout>
)

export default PastEventsPage
