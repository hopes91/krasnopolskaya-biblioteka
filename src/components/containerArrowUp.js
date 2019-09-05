import React from 'react'
import ArrowUp from './arrowUp'

function scrollToTop(event) {
  event.preventDefault()

  const speed = 0.3
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

const ContainerArrowUp = () => (
  <ArrowUp
    scrollToTop={scrollToTop}
  />
)

export default ContainerArrowUp
