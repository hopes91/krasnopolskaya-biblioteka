import React, { Component } from 'react'

import '../styles/main/__arrow-up.scss'

class ArrowUp extends Component {
  constructor(props) {
    super(props)

    this.scrollToTop = this.scrollToTop.bind(this)
  }

  scrollToTop(event) {
    event.preventDefault()

    const speed = 0.5
    const offsetY = window.pageYOffset
    let hash = null
    let start = null

    event.target.className.match('arrow-up') ?
      hash = event.target.href.replace(/[^#]*(.*)/, '$1') :
      hash = document.querySelector('.main__arrow-up').href.replace(/[^#]*(.*)/, '$1')

    const topIndent = document.querySelector(hash).getBoundingClientRect().top

    requestAnimationFrame(step)

    function step(time) {
      if (start === null) {
        start = time
      }

      const progress = time - start
      let scroll = null

      topIndent < 0 ?
        scroll = Math.max(offsetY - progress/speed, offsetY + topIndent) :
        scroll = Math.min(offsetY + progress/speed, offsetY + topIndent)

      window.scrollTo(0, scroll)

      scroll !== offsetY + topIndent ?
        requestAnimationFrame(step) :
        window.location.hash = hash
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
