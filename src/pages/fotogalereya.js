import React, { useEffect } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Photogallery from '../components/photogallery'
import { photos2019, photos2018 } from '../lists/photogallery'

const allPhotos = photos2019.concat(photos2018)

let mainSlide = null
let start = null

const showFirstSlideOnKeyDown = event => {
  event.key === 'Enter' &&
    showFirstSlide(event)
}

const showFirstSlide = event => {
  const back = document.querySelector('.page_about_photogallery-back')
  const slides = document.querySelectorAll('.page_about_photogallery-back__slide')

  if (back.className.match('opened')) return;

  createDots()

  back.classList.remove('closed')
  back.classList.add('opened')

  const clickedAlt = event.target.getAttribute('alt')
  let altToCompare = null

  slides.forEach((slide, index) => {
    altToCompare = slide.getAttribute('alt')
    slide.style.display = 'none'

    if (clickedAlt === altToCompare) {
      slide.style.display = 'block'
      mainSlide = index
      start = index
      handleArrows()
    }
  })
}

const handleArrowsOnKeyDown = event => {
  const back = document.querySelector('.page_about_photogallery-back')

  if (back.className.match('closed')) return;

  event.key === 'ArrowLeft' &&
    handleArrows(-1)

  event.key === 'ArrowRight' &&
    handleArrows(1)
}

const handleArrows = index => {
  const slides = document.querySelectorAll('.page_about_photogallery-back__slide')
  const prevSlide = document.querySelector('.page_about_photogallery-back__prev-slide')
  const nextSlide = document.querySelector('.page_about_photogallery-back__next-slide')

  (index === -1 && mainSlide === 0) || (index === 1 && mainSlide === slides.length - 1) ?
    index = null :
  index === undefined ?
    mainSlide = start :
    mainSlide += index

  mainSlide === 0 ?
    prevSlide.style.display = 'none' :
    prevSlide.style.display = 'block'

  mainSlide === slides.length - 1 ?
    nextSlide.style.display = 'none' :
    nextSlide.style.display = 'block'

  showSlides()
}

const showSlides = () => {
  const slides = document.querySelectorAll('.page_about_photogallery-back__slide')

  slides.forEach(slide => slide.style.display = 'none')

  for (let i = start; i < slides.length; i++) {
    slides[mainSlide].style.display = 'block'

    currentSlide()
  }
}

const currentSlide = () => {
  const dots = document.querySelectorAll('.page_about_photogallery-back__dot')

  dots.forEach(dot => dot.style.backgroundColor = 'oldlace')

  for (let i = start; i < dots.length; i++) {
    dots[mainSlide].style.backgroundColor = 'saddlebrown'
  }
}

const createDots = () => {
  const dots = document.querySelector('.page_about_photogallery-back__dots')

  dots.innerHTML = ''

  allPhotos.forEach(photo => {
    const dot = document.createElement('span')
    dot.setAttribute('class', 'page_about_photogallery-back__dot')
    dots.appendChild(dot)
  })
}

const hideSliderOnKeyDown = event => {
  event.key === 'Escape' &&
    hideSlider()
}

const hideSlider = () => {
  const back = document.querySelector('.page_about_photogallery-back')

  if (back.className.match('closed')) return;

  back.classList.remove('opened')
  back.classList.add('closed')
  mainSlide = null
  start = null
}

const PhotogalleryPage = () => {
  useEffect(() => {
    document.addEventListener('keydown', handleArrowsOnKeyDown)
	  document.addEventListener('keydown', hideSliderOnKeyDown)
  })

  return (
    <Layout>
      <SEO title='Фотогалерея' keywords={[`фотографии краснопольской библиотеки`, `фотогалерея`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
      <Photogallery
        photos2019={photos2019}
        photos2018={photos2018}
        allPhotos={allPhotos}
        showFirstSlideOnKeyDown={showFirstSlideOnKeyDown}
        showFirstSlide={showFirstSlide}
        handleArrows={handleArrows}
        hideSlider={hideSlider}
      />
    </Layout>
  )
}

export default PhotogalleryPage
