import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import DecorMain from '../components/decorMain'
import '../styles/page/page.scss'
import '../styles/page/news.scss'

import news30012020 from '../images/news/30012020.jpg'
import news27012020 from '../images/news/27012020.jpg'
import news17012020 from '../images/news/17012020.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title='Главная' keywords={[`новости краснопольской библиотеки`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='page news'>
      <DecorMain />
      <h2 className='page-title'>Новости</h2>
      <section>
        <h3>пятница, 31 января 2020 год</h3>
        <h4>Итоги 2019 года</h4>
        <p>В 2019 году было пользователей — 1418,<br />
          в том числе детей — 98,<br />
          в том числе удалённых пользователей сайта библиотеки — 1235.</p>
        <p>посещений — 4781,<br />
          в том числе детьми — 1354,<br />
          в том числе удалёнными пользователями сайта библиотеки — 2351,<br />
          в том числе посещений мероприятий — 1945.</p>
        <p>книговыдача — 16606,<br />
          в том числе детям — 2088,<br />
          в том числе удалённым пользователям сайта библиотеки — 11294.</p>
        <p>В библиотеке прошло 239 мероприятий.<br />
          Спонсоры мероприятий — ПСПК «Краснопольский» и библиотекарь Фалалеева Е.Е.</p>
        <p>Поступило в библиотеку 28 новых книг.</p>
        <p>В фонде библиотеки 3633 книги.</p>
        <p>Было 43 пользователя внутрисистемного книгообмена,<br />
          посещений ВСО — 355,<br />
          книговыдача ВСО — 650.</p>
        <p>В декабре оформлена подписка за счет бюджета на газету «Бабья радость», журнал «Вот это истории», журналы «Саша и Маша», «Смешарики».<br />
          Депутат К.М. Гозман подарил подписку на газету «Родной край — Суна».</p>
      </section>
      <section>
        <h3>четверг, 30 января 2020 год</h3>
        <img src={news30012020} alt='Благодарность Панишевой Н.В. за подаренные книги' className='page-image' />
      </section>
      <section>
        <h3>понедельник, 27 января 2020 год</h3>
        <p>Краснопольская библиотека участвует в сетевой акции «ПоЧитатели Чехова» к 160-летию со дня рождения писателя.</p>
        <img src={news27012020} alt='Нарисованное изображение А.П. Чехова и надпись 160 лет' className='page-image' />
      </section>
      <section>
        <h3>пятница, 24 января 2020 год</h3>
        <p>23 января библиотекарь провела «Литературное ассорти» для восьми детей и воспитателя на кружке «Библионик». «К 110-летию Лии Гераскиной» — так называлась электронная презентация, включившая краткую биографию и викторину из 10 вопросов по книге «В Стране Невыученных уроков».</p>
        <p>В электронной викторине «Дорогой сказок братьев Гримм» выиграл Семён Толмачёв, как и в первой.</p>
      </section>
      <section>
        <h3>среда, 22 января 2020 год</h3>
        <p>21 января библиотекарь оформила выставку-просмотр «Чехов знакомый и незнакомый» к 160-летию писателя.</p>
      </section>
      <section>
        <h3>пятница, 17 января 2020 год</h3>
        <img src={news17012020} alt='Список лучших читателей 2019 года' className='page-image' />
      </section>
      <section>
        <h3>пятница, 17 января 2020 год</h3>
        <p>16 января библиотекарь оформила книжную выставку «Журавль — птица 2020 года в России».</p>
      </section>
      <section>
        <h3>вторник, 14 января 2020 год</h3>
        <p>13 января 13 детей детсадовского возраста и воспитатель посетили занятие кружка «Библионик».</p>
        <p>Библиотекарь провела для них День информации «Интересно. 2020 год — Год Крысы», где познакомила ребят с выставкой-просмотром «Книжные мышки к Году Мыши», на которой было представлено 13 книг, а электронный обзор книг «Год Мышки и про мышек книжки» включил 15 детских книг известных авторов разных стран.</p>
        <p>Затем все посмотрели познавательный мультфильм «Уроки живой природы тётушки Совы. Крыса». В конце занятия было видео «Мыщкин и музей». В музее мыши этого интересного города можно увидеть больше 10000 мышек из различных материалов и стран.</p>
      </section>
      <section>
        <h3>четверг, 9 января 2020 год</h3>
        <p>8 января три подростка 13-14 лет участвовали в викторине «Под чистым небом Рождества». Выиграл Виталий Манылов.</p>
      </section>
      <section>
        <h3>среда, 8 января 2020 год</h3>
        <p>7 января в семье Суходоевых библиотекарь провела час весёлых затей к Году Мыши для пяти детей, в том числе для Суходоевой Тани и Суходоевой Даши.</p>
        <p>Сначала дети познакомились с электронным обзором «Год Мышки и про мышек книжки». В котором было представлено 12 детских книг авторов из России, Англии, Японии, Италии, Норвегии. Среди них известные и мало знакомые: Маршак, Прёйсен, Бонд, И. Наумова, О. Тихомиров, Ивамура, Романова, ДиКамилло, Усачев, Медоус.</p>
        <p>Затем ребята отвечали на две электронные викторины: «Викторина про мышей и крыс на Новый год по советским мультфильмам» и «Мышиная викторина». Все получали жетончики за правильные ответы.</p>
        <p>Затем к ребятам присоединилась мама Светлана Александровна.</p>
        <p>Все отвечали на электронную познавательную шанс-викторину «Обаяние вятской литературы» с фактами из жизни и творчества 12 вятских писателей, их фото, рисунками и красочными обложками их книг для детей.</p>
        <p>Далее все участвовали в электронной познавательной шанс-викторине «Угадай художника по картине», где участники викторины пытали угадать картины таких известных художников: Репина, В. Васнецова, Перова, Кустодиева, Шишкина, Айвазовского, Шагала, Никаса Сафронова, Ван Гога и других. О каждом художнике рассказывались интересные факты.</p>
        <p>Затем семья показала свои знания популярного детского мультфильма, отвечая на электронный тест «Смешарики. Угадай, чья фраза».</p>
        <p>Так же игроки поучаствовали в шуточных предсказаниях «Какое у вас супергеройское имя?», «Ваш весёлый титул» и «В чём вы особенно хороши».</p>
        <p>Наконец все приняли участие в конкурсе «Маска, я тебя знаю». Библиотекарь по очереди надевала маски волка, лисы, тигра, чёрта, зайца, колобка, козы и кошки маме, ребятам и двоюродной сестре. Игроки задавали вопросы и пытались угадать, что за маска.</p>
        <p>В конце развлечений все пили чай с пиццей.</p>
      </section>
      <section>
        <h3>суббота, 4 января 2020 год</h3>
        <p>3 января три девушки приняли участие в игре-викторине «Паутина» на тему «Заповедники — эталоны живой природы». С большим преимуществом выиграла Рита Онегова.</p>
        <p>3 января они же приняли участие в викторинах «Современные мультфильмы», а в викторине «Лунтик» присоединился молодой парень.</p>
        <p>3 января начался цикл плакатов «Писатели-юбиляры 2020 года»: «5 января — 100 лет детскому писателю Николаю Сладкову» и «95 лет английскому ученому и писателю-натуралисту Дарреллу».</p>
      </section>
      <section>
        <h3>пятница, 3 января 2020 год</h3>
        <p>2 января прошла игра-викторина «Паутина» на дому у Тани Суходоевой, девочки 9 лет с инвалидностью, одной её сестры и брата. Тема викторины была: «Заповедники — эталоны живой природы» с вопросами о российских заповедниках, в частности о заповеднике «Нургуш» в Кировской области. Дети расширили знания о заповедных землях России.</p>
        <p>2 января там же библиотекарь провела викторину «Санта Клаус и Дед Мороз». Выиграла Таня.</p>
      </section>
    </div>
  </Layout>
)

export default IndexPage
