import React, { Component } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import OrnamentMain from '../components/ornamentMain'

import news07062019 from '../images/news/07062019.jpg'
import news05062019 from '../images/news/05062019.jpg'
import news03062019 from '../images/news/03062019.jpg'
import shlyapnayaVecherinka from '../images/photogallery/shlyapnaya-vecherinka.jpg'
import news20052019 from '../images/news/20052019.jpg'
import news24032019 from '../images/news/24032019-2.jpg'

class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.showTheAnswer = this.showTheAnswer.bind(this)
  }

  componentDidMount() {
    const questions = document.querySelectorAll('.news ol li')

    if (!questions) return;

    questions.forEach(question => {
      let answer = document.createElement('span')
      answer.className = 'show-answer'
      answer.innerHTML = 'Показать ответ'
      question.appendChild(answer)
    })
  }

  showTheAnswer(event) {
    if (event.target.className !== 'show-answer') return;

    event.target.style.display = 'none'
    event.target.previousElementSibling.style.display = 'inline'
  }

  render() {
    return (
      <Layout>
        <SEO title='Главная' keywords={[`краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
        <div className='page page_news'>
          <OrnamentMain />
          <h2 className='page__title'>Новости</h2>
          <section>
            <h6>воскресенье, 9 июня 2019 год</h6>
            <img src='images/news/09062019.jpg' alt='9 июня поход с детьми с 14 часов' />
          </section>
          <section>
            <h6>пятница, 7 июня 2019 год</h6>
            <img src={news07062019} alt='Благодарность Суходоевой Анастасии Николаевне за помощь в проведении занятий семейного клуба и прошедших Библиосумерках' />
          </section>
          <section>
            <h6>среда, 5 июня 2019 год</h6>
            <img src={news05062019} alt='Благодарность Кондаковой Надежде Ивановне за подаренные книги на Всероссийский день библиотек' />
          </section>
          <section>
            <h6>понедельник, 3 июня 2019 год</h6>
            <img src={news03062019} alt='Грамота Фалалеевой Елене Евгеньевне за 1-ое место в районном конкурсе профессионального мастерства «Театра мир откроет нам свои кулисы»' />
          </section>
          <section>
            <h6>понедельник, 20 мая 2019 год</h6>
            <p><strong>15 мая в Краснопольской библиотеке прошла Шляпная вечеринка, приуроченная к Международному дню семьи.</strong></p>
            <img src={shlyapnayaVecherinka} alt='Шляпы со Шляпной вечеринки' />
            <p>Библиотекарь Фалалеева Е.Е. поздравила всех членов семейного клуба и гостей с праздником, пожелала здоровья и счастья. У каждого из нас своя, особенная любовь к шляпам. В библиотеке на четырёх столах была выставка шляп: колпак гнома, индейский головной убор, шляпка миньона, пиратская, ведьмы, клоуна, шута, женские. Оригинальные шляпы были у Анны Кондаковой, Светочки Суходоевой, Даши Суходоевой.</p>
            <p>Ведущая пригласила гостей на <strong>Парад шляп</strong>. Все прошли под клип «Шляпа». Затем библиотекарь провела <strong>«Шляпную дискуссию»</strong>. В шляпе находились жетоны с номерами. Под музыку все передавали друг другу шляпу, и на ком музыка останавливалась, тот вытягивал номер вопроса. За правильный ответ получали жетончик «шляпку».</p>
            <p>Вопросы были такие:</p>
            <ol>
              <li onClick={this.showTheAnswer}>
                Это и головной убор, и страна в Америке.&#160;
                <span className='hidden-answer'>(Панама)</span>
              </li>
              <li onClick={this.showTheAnswer}>
                Это и головной убор, и походная посуда.&#160;
                <span className='hidden-answer'>(котелок)</span>
              </li>
              <li onClick={this.showTheAnswer}>
                Это и головной убор, и геометрическое тело.&#160;
                <span className='hidden-answer'>(цилиндр)</span>
              </li>
              <li onClick={this.showTheAnswer}>
                Так называют и шляпку без полей, и лекарственную форму.&#160;
                <span className='hidden-answer'>(таблетка)</span>
              </li>
              <li onClick={this.showTheAnswer}>
                Это есть и у моря, и у шляпы.&#160;
                <span className='hidden-answer'>(дно)</span>
              </li>
              <li onClick={this.showTheAnswer}>
                Головной убор Мурзилки.&#160;
                <span className='hidden-answer'>(берет)</span>
              </li>
              <li onClick={this.showTheAnswer}>
                Головной убор почтальона Печкина.&#160;
                <span className='hidden-answer'>(шапка-ушанка)</span>
              </li>
              <li onClick={this.showTheAnswer}>
                Оригинальный головной убор Рассеянного с улицы Бассейной.&#160;
                <span className='hidden-answer'>(сковорода)</span>
              </li>
              <li onClick={this.showTheAnswer}>
                Головной убор красноармейца, похожий на шлем богатыря.&#160;
                <span className='hidden-answer'>(будёновка)</span>
              </li>
              <li onClick={this.showTheAnswer}>
                Головной убор этого сказочного героя был сделан из полосатого носка.&#160;
                <span className='hidden-answer'>(Буратино)</span>
              </li>
              <li onClick={this.showTheAnswer}>
                Фуражка матроса.&#160;
                <span className='hidden-answer'>(бескозырка)</span>
              </li>
              <li onClick={this.showTheAnswer}>
                Плоский головной убор узбеков, таджиков, казахов.&#160;
                <span className='hidden-answer'>(тюбетейка)</span>
              </li>
              <li onClick={this.showTheAnswer}>
                У шута бывает с бубенцами, а у доктора — с красным крестом.&#160;
                <span className='hidden-answer'>(колпак)</span>
              </li>
              <li onClick={this.showTheAnswer}>
                Головной убор, пришитый или пристегнутый к одежде.&#160;
                <span className='hidden-answer'>(капюшон)</span>
              </li>
              <li onClick={this.showTheAnswer}>
                Если на теле кольчуга, то на голове...&#160;
                <span className='hidden-answer'>(шлем)</span>
              </li>
              <li onClick={this.showTheAnswer}>
                Шторка для женского лица, прикреплённая к шляпке.&#160;
                <span className='hidden-answer'>(вуаль)</span>
              </li>
              <li onClick={this.showTheAnswer}>
                Старинный русский головной убор, получивший название из-за своего сходства с гребнем на голове курицы.&#160;
                <span className='hidden-answer'>(кокошник)</span>
              </li>
            </ol>
            <p>Победила семья Суходоевых.</p>
            <p>Следующий конкурс <strong>«Угадай, что под шляпой»</strong>. На подносе под большой шляпой лежал предмет на букву «Ш». Участники угадывали, что это. Приз (шоколадное яйцо) достался Полине Ральниковой.</p>
            <p>Конкурс на меткость <strong>«Попади в шляпу»</strong>. На стуле лежала перевёрнутая шляпа. Первая участница получила конфеты. Встав на некотором расстоянии, Аня Кондакова поочерёдно бросала конфетки, стараясь попасть в шляпу. Количество попаданий засчитывалось. Далее бросала Женя Райлинг. Больше всего попаданий было у Жени.</p>
            <p>В игре <strong>«Угадай на ощупь»</strong> Ксении Вотиновой надо было осмотреть головные уборы других и постараться запомнить их. Затем ей завязали глаза и подводили поочерёдно к участникам. Она ощупывала их головные уборы и пыталась угадать, кто перед ней находится. Почти всех угадала.</p>
            <p>Далее поставили <strong>сказку-экспромт «Колобок» на новый лад</strong>. Старика изображал Саша Чекалкин, старуху — Полина Ральникова, зайца — Степан Суходоев, лису — Виолетта Вотинова, волка — Данила Задорин, медведя — Кириил Ситников, колобка — Ксюша Вотинова.</p>
            <p>Под конец пришла очередь <strong>«Танцевального караоке»</strong>, дети станцевали под три видео. А затем началось чаепитие.</p>
          </section>
          <section>
            <h6>понедельник, 20 мая 2019 год</h6>
            <img src={news20052019} alt='Благодарственное письмо за активное участие в марафоне «Добрая Вятка»' />
          </section>
          <section>
            <h6>воскресенье, 24 марта 2019 год</h6>
            <img src={news24032019} alt='Благодарность Пермяковой Л.А. и Белобородовой О.С. за подаренные Краснопольской библиотеке журналы' />
          </section>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
