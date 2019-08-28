import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Photogallery from '../components/photogallery'
import { photos2019, photos2018 } from '../lists/photogallery'

const allPhotos = photos2019.concat(photos2018)

let mainSlide = null
let start = null

class PhotogalleryPage extends Component {
  constructor(props) {
    super(props)

    this.showFirstSlideOnKeyDown = this.showFirstSlideOnKeyDown.bind(this)
    this.showFirstSlide = this.showFirstSlide.bind(this)
    this.handleArrowsOnKeyDown = this.handleArrowsOnKeyDown.bind(this)
    this.handleArrows = this.handleArrows.bind(this)
    this.hideSliderOnKeyDown = this.hideSliderOnKeyDown.bind(this)
    this.hideSlider = this.hideSlider.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleArrowsOnKeyDown)
	  document.addEventListener('keydown', this.hideSliderOnKeyDown)
  }

  showFirstSlideOnKeyDown(event) {
  	event.key === 'Enter' &&
      this.showFirstSlide(event)
  }

  showFirstSlide(event) {
    const back = document.querySelector('.page_about_photogallery-back')
    const slides = document.querySelectorAll('.page_about_photogallery-back__slide')

    if (back.className.match('opened')) return;

    this.createDots()

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
        this.handleArrows()
      }
    })
  }

  handleArrowsOnKeyDown(event) {
    const back = document.querySelector('.page_about_photogallery-back')

    if (back.className.match('closed')) return;

  	if (event.key === 'ArrowLeft') {
  		this.handleArrows(-1)
  	} else if (event.key === 'ArrowRight') {
  		this.handleArrows(1)
  	}
  }

  handleArrows(index) {
    const slides = document.querySelectorAll('.page_about_photogallery-back__slide')
    const prevSlide = document.querySelector('.page_about_photogallery-back__prev-slide')
    const nextSlide = document.querySelector('.page_about_photogallery-back__next-slide')

    if ((index === -1 && mainSlide === 0) ||
			(index === 1 && mainSlide === slides.length - 1)) {
  		index = null
  	} else if (index === undefined) {
  		mainSlide = start
  	} else {
  		mainSlide += index
  	}

  	if (mainSlide === 0) {
  		prevSlide.style.display = 'none'
  	} else {
  		prevSlide.style.display = 'block'
  	}

  	if (mainSlide === slides.length - 1) {
  		nextSlide.style.display = 'none'
  	} else {
  		nextSlide.style.display = 'block'
  	}

  	this.showSlides()
  }

  showSlides() {
    const slides = document.querySelectorAll('.page_about_photogallery-back__slide')

    slides.forEach(slide => slide.style.display = 'none')

    for (let i = start; i < slides.length; i++) {
      slides[mainSlide].style.display = 'block'
      this.currentSlide()
    }
  }

  currentSlide() {
    const dots = document.querySelectorAll('.page_about_photogallery-back__dot')

    dots.forEach(dot => dot.style.backgroundColor = 'oldlace')

    for (let i = start; i < dots.length; i++) {
      dots[mainSlide].style.backgroundColor = 'saddlebrown'
    }
  }

  createDots() {
    const dots = document.querySelector('.page_about_photogallery-back__dots')

    dots.innerHTML = ''

    allPhotos.forEach(photo => {
      const dot = document.createElement('span')
      dot.setAttribute('class', 'page_about_photogallery-back__dot')
      dots.appendChild(dot)
    })
  }

  hideSliderOnKeyDown(event) {
  	event.key === 'Escape' &&
      this.hideSlider()
  }

  hideSlider() {
    const back = document.querySelector('.page_about_photogallery-back')

    if (back.className.match('closed')) return;

    back.classList.remove('opened')
    back.classList.add('closed')
    mainSlide = null
    start = null
  }

  render() {
    return (
      <Layout>
        <SEO title='Фотогалерея' keywords={[`фотографии краснопольской библиотеки`, `фотогалерея`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
        <Photogallery
          photos2019={photos2019}
          photos2018={photos2018}
          allPhotos={allPhotos}
          showFirstSlideOnKeyDown={this.showFirstSlideOnKeyDown}
          showFirstSlide={this.showFirstSlide}
          handleArrows={this.handleArrows}
          hideSlider={this.hideSlider}
        />
      </Layout>
    )
  }
}

export default PhotogalleryPage
