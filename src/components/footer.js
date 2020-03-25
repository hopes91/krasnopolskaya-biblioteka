import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import '../styles/footer/footer.scss'
import '../styles/header/title.scss'

import odnoklassnikiIcon from '../images/odnoklassniki_128px.png'
import vkontakteIcon from '../images/vkontakte_128px.png'

const Footer = ({ siteTitle }) => (
  <footer className='footer'>
    <p className='copyright'>
      <Link to='/' className='title'>&copy;&nbsp;{siteTitle},&nbsp;</Link>
      2018-<span>{new Date().getFullYear()}</span>
    </p>
    <div className='social-media'>
      <div className='wrapper'>
        <a href='https://ok.ru/group/56723369361419' target='_blank' rel='noopener noreferrer' title='Мы в Одноклассниках'>
          <img src={odnoklassnikiIcon} alt='Иконка Одноклассники' />
        </a>
        <a href='https://vk.com/public193267292' target='_blank' rel='noopener noreferrer' title='Мы во ВКонтакте'>
          <img src={vkontakteIcon} alt='Иконка ВКонтакте' />
        </a>
      </div>
    </div>
    <p className='address'><span>Адрес:</span> Кировская область, Сунский район, деревня Краснополье, улица Школьная, дом 6а</p>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
