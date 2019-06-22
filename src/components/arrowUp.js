import React, { Component } from 'react'

import '../styles/main/__arrow-up.scss'

class ArrowUp extends Component {
  constructor(props) {
    super(props)

    this.scrollToTop = this.scrollToTop.bind(this)
  }

  scrollToTop(event) {
    event.preventDefault()

    let speed = 0.5
    let offsetY = window.pageYOffset
    let hash = null

    if (event.target.className.match('arrow-up')) {
      hash = event.target.href.replace(/[^#]*(.*)/, '$1')
    } else {
      hash = document.querySelector('.main__arrow-up').href.replace(/[^#]*(.*)/, '$1')
    }

    let indent = document.querySelector(hash).getBoundingClientRect().top

    requestAnimationFrame(step)

    let start = null

    function step(time) {
      if (start === null) {
        start = time
      }

      let progress = time - start
      let scroll = null

      if (indent < 0) {
        scroll = Math.max(offsetY - progress/speed, offsetY + indent)
      } else {
        scroll = Math.min(offsetY + progress/speed, offsetY + indent)
      }

      window.scrollTo(0, scroll)

      if (scroll !== offsetY + indent) {
        requestAnimationFrame(step)
      } else {
        window.location.hash = hash
      }
    }
  }

  render() {
    return (
      <a href='#top' className='main__arrow-up'
         onClick={this.scrollToTop}
      >
        <span>&uarr;</span> Наверх
      </a>
    )
  }
}

export default ArrowUp
