import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import '../styles/footer.scss'

const Footer = ({ siteTitle }) => (
  <footer>
    <p className='copyright'>
      &copy; {siteTitle},
      2018-<span id='current-year'>{new Date().getFullYear()}</span>
    </p>
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
