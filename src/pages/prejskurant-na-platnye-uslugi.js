import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import OrnamentMain from '../components/decorMain'

import '../styles/page/page.scss'
import '../styles/page/_services.scss'
import '../styles/main/table.scss'

const PriceListPage = () => (
  <Layout>
    <SEO title='Прейскурант цен на платные услуги' keywords={[`прейскурант цен`, `платные услуги`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='page page_services page_services_price-list'>
      <OrnamentMain />
      <h2 className='page__title'>Прейскурант цен на платные услуги Краснопольской библиотеки МКУК Сунская МБС</h2>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Услуги</th>
            <th>Единица измерения</th>
            <th>Цена (в руб.)</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td><strong>Дополнительное обслуживание документами</strong></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Краткосрочный прокат документов</td>
            <td>документ</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>— художественная литература двух последних лет и текущего года</td>
            <td></td>
            <td>4</td>
          </tr>
          <tr>
            <td></td>
            <td>— остальная художественная литература</td>
            <td></td>
            <td>2</td>
          </tr>

          <tr>
            <td>2</td>
            <td><strong>Обслуживание электронной информацией</strong></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Выполнение работы на компьютере библиотекарем</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>— набор текста с удовлетворительным качеством оригинала</td>
            <td>страница формата А4</td>
            <td>10</td>
          </tr>
          <tr>
            <td></td>
            <td>— набор текста с рисунками, таблицами, формулами</td>
            <td>страница формата А4</td>
            <td>15</td>
          </tr>
          <tr>
            <td></td>
            <td>— составление и распечатка буклета, проекта</td>
            <td>документ (2 страницы формата А4)</td>
            <td>37</td>
          </tr>
          <tr>
            <td></td>
            <td>— оформление титульного листа к дипломным, контрольным и курсовым работам</td>
            <td>страница формата А4</td>
            <td>8</td>
          </tr>
          <tr>
            <td></td>
            <td>— поиск информации сотрудником с использованием информационных ресурсов</td>
            <td>час<br />минута</td>
            <td>60<br />1</td>
          </tr>
          <tr>
            <td></td>
            <td>— ксерокопирование за одну страницу:<br />на чёрно-белом принтере<br />на цветном принтере</td>
            <td>страница формата А4</td>
            <td><br />5<br />10</td>
          </tr>

          <tr>
            <td>3</td>
            <td><strong>Прочие услуги</strong></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Продажа издательской продукции библиотеки</td>
            <td>экземпляр</td>
            <td>типографские расходы</td>
          </tr>
          <tr>
            <td></td>
            <td>Электронная версия издательской продукции библиотеки</td>
            <td>документ</td>
            <td>по калькуляции</td>
          </tr>
          <tr>
            <td></td>
            <td>Залоговая стоимость издания (для иногородних читателей)</td>
            <td>1 издание</td>
            <td>300</td>
          </tr>
          <tr>
            <td></td>
            <td>Проведение вечеров, развлекательных программ</td>
            <td>мероприятие</td>
            <td>300</td>
          </tr>
          <tr>
            <td></td>
            <td>Продажа списанной литературы</td>
            <td>экземпляр</td>
            <td>оценочная стоимость</td>
          </tr>
          <tr>
            <td></td>
            <td>Плата за пользование игрой «мозаика» (пазлы)</td>
            <td>игра</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Layout>
)

export default PriceListPage
