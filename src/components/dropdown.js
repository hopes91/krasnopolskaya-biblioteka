import React from 'react'
import { Link } from 'gatsby'

import '../styles/header/dropdown.scss'

import { linksSectionTwo, linksSectionThree, linksSectionFour } from '../lists/menu'

const Dropdown = ({ toggleBurgerOnKeyPress, toggleBurger, findLinksElement }) => (
  <div className='dropdown'>
    <div tabIndex='-1' className='dropdown__burger'
          onKeyPress={toggleBurgerOnKeyPress} onClick={toggleBurger}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div className='dropdown__menu closed'>
      <div className='dropdown__menu-section'>
        <Link to='/' key='index' tabIndex='-1' className='dropdown__menu-section-title'>
          Главная
        </Link>
      </div>

      <div tabIndex='-1' className='dropdown__menu-section'
           onKeyPress={findLinksElement} onClick={findLinksElement}
      >
        <p className='dropdown__menu-section-title'>О библиотеке <span>&#9662;</span></p>
        <nav className='dropdown__menu-section-links closed'>
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

      <div tabIndex='-1' className='dropdown__menu-section'
           onKeyPress={findLinksElement} onClick={findLinksElement}
      >
        <p className='dropdown__menu-section-title'>Новости и события <span>&#9662;</span></p>
        <nav className='dropdown__menu-section-links closed'>
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

      <div tabIndex='-1' className='dropdown__menu-section'
           onKeyPress={findLinksElement} onClick={findLinksElement}
      >
        <p className='dropdown__menu-section-title'>Услуги <span>&#9662;</span></p>
        <nav className='dropdown__menu-section-links closed'>
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

      <div className='dropdown__menu-section'>
        <Link to='/karta-sajta' key='karta-sajta' tabIndex='-1' className='dropdown__menu-section-title'>
          Карта сайта
        </Link>
      </div>
    </div>
  </div>
)

export default Dropdown
