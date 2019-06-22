import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import '../styles/footer/footer.scss'

const Footer = ({ siteTitle }) => (
  <footer className='footer'>
    <p className='footer__copyright'>
      <Link to='/'>
        &copy; {siteTitle},&nbsp;
      </Link>
      2018-<span>{new Date().getFullYear()}</span>
    </p>
    <p className='footer__address'><span>Адрес:</span> Кировская область, Сунский район, деревня Краснополье, улица Школьная, дом 6а</p>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
