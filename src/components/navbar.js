import React from 'react'
import { Link } from 'gatsby'
import { linksSectionTwo, linksSectionThree, linksSectionFour } from '../lists/menu'
import '../styles/header/navbar.scss'

const Navbar = ({ toggleLinksOnKeyPress, showLinks, hideLinks }) => (
  <div className='navbar'>
    <div className='navbar__section'>
      <Link to='/' key='index' tabIndex='0' className='navbar__section-title'>
        Главная
      </Link>
    </div>

    <div tabIndex='0' className='navbar__section' onKeyPress={toggleLinksOnKeyPress} onMouseEnter={showLinks} onMouseLeave={hideLinks}  >
      <p className='navbar__section-title'>О библиотеке <span>&#9662;</span></p>
      <nav className='navbar__section-links closed'>
        {linksSectionTwo.map(link => {
          const { to, page, title } = link

          return (
            <Link to={to} key={page} tabIndex='-1'>
              {title}
            </Link>
          )
        })}
      </nav>
    </div>

    <div tabIndex='0' className='navbar__section' onKeyPress={toggleLinksOnKeyPress} onMouseEnter={showLinks} onMouseLeave={hideLinks}>
      <p className='navbar__section-title'>Новости и события <span>&#9662;</span></p>
      <nav className='navbar__section-links closed'>
        {linksSectionThree.map(link => {
          const { to, page, title } = link

          return (
            <Link to={to} key={page} tabIndex='-1'>
              {title}
            </Link>
          )
        })}
      </nav>
    </div>

    <div tabIndex='0' className='navbar__section' onKeyPress={toggleLinksOnKeyPress} onMouseEnter={showLinks} onMouseLeave={hideLinks}>
      <p className='navbar__section-title'>Услуги <span>&#9662;</span></p>
      <nav className='navbar__section-links closed'>
        {linksSectionFour.map(link => {
          const { to, page, title } = link

          return (
            <Link to={to} key={page} tabIndex='-1'>
              {title}
            </Link>
          )
        })}
      </nav>
    </div>

    <div className='navbar__section'>
      <Link to='/karta-sajta' key='karta-sajta' tabIndex='0' className='navbar__section-title'>
        Карта сайта
      </Link>
    </div>
  </div>
)

export default Navbar
