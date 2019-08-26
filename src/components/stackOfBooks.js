import React from 'react'

import '../styles/decor/_stack-of-books.scss'

import stackOfBooks from '../images/decor/stack-of-books-graphic-illustration.png'

const StackOfBooks = () => (
  <div className='decor_stack-of-books'>
    <a href='https://www.freepik.com/free-vector/stack-of-books-graphic-illustration_2632998.htm' target='_blank' rel='noopener noreferrer' tabIndex='-1'>
      <img src={stackOfBooks} alt='Стопка книг' />
    </a>
  </div>
)

export default StackOfBooks
