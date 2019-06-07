import React, { Component } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import OrnamentMain from '../components/ornamentMain'

import viktorinaNaDomuDlyaDevochkiSOV from '../images/photogallery/viktorina-na-domu-dlya-devochki-s-organichennymi-vozmozhnostyami.jpg'
import chasZozhVperedPoDorogeZdoroviya from '../images/photogallery/chas-zozh-vpered-po-doroge-zdoroviya.jpg'
import semejnyjKlub29Marta from '../images/photogallery/semejnyj-klub-29-marta.jpg'
import semejnyjKlub29Marta2 from '../images/photogallery/semejnyj-klub-29-marta-2.jpg'
import biblionik from '../images/photogallery/biblionik.jpg'
import chtoGdeKogdaPoPravu from '../images/photogallery/chto-gde-kogda-po-pravu.jpg'
import chtoGdeKogdaPoPravu2 from '../images/photogallery/chto-gde-kogda-po-pravu-2.jpg'
import kvestVoVremyaNochiPottera from '../images/photogallery/kvest-vo-vremya-nochi-pottera.jpg'
import garriPotter from '../images/photogallery/garri-potter.jpg'
import vedma from '../images/photogallery/vedma.jpg'
import horoshoSidim from '../images/photogallery/horosho-sidim.jpg'
import katyaSupermama from '../images/photogallery/katya-supermama.jpg'
import luchshieNaryady from '../images/photogallery/luchshie-naryady.jpg'
import lukomorieK45letijuBiblioteki from '../images/photogallery/lukomorie-k-45letiju-biblioteki.jpg'
import nochIskusstv from '../images/photogallery/noch-iskusstv.jpg'
import tort from '../images/photogallery/tort.jpg'
import otkryvaemYponiju from '../images/photogallery/otkryvaem-yaponiju.jpg'
import novogodnijVecherNaSemejnomKlube from '../images/photogallery/novogodnij-vecher-na-semejnom-klube.jpg'
import novogodnijVecherNaSemejnomKlube2 from '../images/photogallery/novogodnij-vecher-na-semejnom-klube-2.jpg'
import novogodnijVecherNaSemejnomKlube3 from '../images/photogallery/novogodnij-vecher-na-semejnom-klube-3.jpg'

const photos2019 = [
  { src: viktorinaNaDomuDlyaDevochkiSOV, alt: 'Викторина на дому для девочки с ограниченными возможностями' },
  { src: chasZozhVperedPoDorogeZdoroviya, alt: 'Час ЗОЖ вперёд по дороге здоровья' },
  { src: semejnyjKlub29Marta, alt: 'Семейный клуб 29 марта' },
  { src: semejnyjKlub29Marta2, alt: 'Семейный клуб 29 марта 2' }
]
const photos2018 = [
  { src: biblionik, alt: 'Библионик' },
  { src: chtoGdeKogdaPoPravu, alt: 'Что, где, когда по праву' },
  { src: chtoGdeKogdaPoPravu2, alt: 'Что, где, когда по праву 2' },
  { src: kvestVoVremyaNochiPottera, alt: 'Квест во время ночи Поттера' },
  { src: garriPotter, alt: 'Гарри Поттер' },
  { src: vedma, alt: 'Ведьма' },
  { src: horoshoSidim, alt: 'Хороши сидим' },
  { src: katyaSupermama, alt: 'Катя — супермама' },
  { src: luchshieNaryady, alt: 'Лучшие наряды' },
  { src: lukomorieK45letijuBiblioteki, alt: 'Лукоморье к 45-летию библиотеки' },
  { src: nochIskusstv, alt: 'Ночь искусств' },
  { src: tort, alt: 'Торт' },
  { src: otkryvaemYponiju, alt: 'Открываем Японию' },
  { src: novogodnijVecherNaSemejnomKlube, alt: 'Новогодний вечер на семейном клубе' },
  { src: novogodnijVecherNaSemejnomKlube2, alt: 'Новогодний вечер на семейном клубе 2' },
  { src: novogodnijVecherNaSemejnomKlube3, alt: 'Новогодний вечер на семейном клубе 3' }
]

const allPhotos = photos2019.concat(photos2018)
let mainSlide = null
let start = null

class PhotogalleryPage extends Component {
  constructor(props) {
    super(props)

    this.showFirstSlide = this.showFirstSlide.bind(this)
    this.showSlides = this.showSlides.bind(this)
    this.handleArrows = this.handleArrows.bind(this)
    this.currentSlide = this.currentSlide.bind(this)
    this.hideSlider = this.hideSlider.bind(this)
  }

  componentDidMount() {
    for (let i = 0; i < allPhotos.length; i++) {
      const dot = document.createElement('span')
      dot.setAttribute('class', 'dot')
      document.querySelector('.dots').appendChild(dot)
    }
  }

  showFirstSlide(event) {
    const slides = document.querySelectorAll('.slide')

    document.getElementById('back').style.display = 'block'

    let clickedAlt = event.target.getAttribute('alt')
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

  handleArrows(index) {
    const slides = document.querySelectorAll('.slide')
    const prevSlide = document.querySelector('.prev-slide')
    const nextSlide = document.querySelector('.next-slide')

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
    const slides = document.querySelectorAll('.slide')

    slides.forEach(slide => slide.style.display = 'none')

    for (let i = start; i < slides.length; i++) {
      slides[mainSlide].style.display = 'block'
      this.currentSlide()
    }
  }

  currentSlide() {
    const dots = document.querySelectorAll('.dot')

    dots.forEach(dot => dot.style.backgroundColor = 'oldlace')

    for (let i = start; i < dots.length; i++) {
      dots[mainSlide].style.backgroundColor = 'saddlebrown'
    }
  }

  hideSlider() {
    mainSlide = null
    start = null
    document.getElementById('back').style.display = 'none'
  }

  render() {
    return (
      <Layout>
        <SEO title='Фотогалерея' keywords={[`фотогалерея`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
        <div className='about-library photogallery'>
          <OrnamentMain />
          <h2>Фотогалерея</h2>
          <h3>2019 год</h3>
          <div className='sorted-by-year'>
            {photos2019.map(photo => {
              const { src, alt } = photo

              return (
                <img
                  src={src} alt={alt} title='Нажмите, чтобы посмотреть в большом разрешении' key={src}
                  className='mini-photo'
                  onClick={this.showFirstSlide}
                />
              )
            })}
          </div>

          <h3>2018 год</h3>
          <div className='sorted-by-year'>
            {photos2018.map(photo => {
              const { src, alt } = photo

              return (
                <img
                  src={src} alt={alt} title='Нажмите, чтобы посмотреть в большом разрешении' key={src}
                  className='mini-photo'
                  onClick={this.showFirstSlide}
                />
              )
            })}
          </div>
        </div>

        <div id='back'>
          <span title='Закрыть' id='close' onClick={this.hideSlider}>&times;</span>
          <div id='front'>
            {allPhotos.map(photo => {
              const { src, alt } = photo

              return (
                <img
                  src={src} alt={alt} title={alt} key={src}
                  className='slide'
                />
              )
            })}
          </div>
          <span className='prev-slide' onClick={() => this.handleArrows(-1)}>&#10094;</span>
          <span className='next-slide' onClick={() => this.handleArrows(1)}>&#10095;</span>
          <div className='dots'></div>
        </div>
      </Layout>
    )
  }
}

export default PhotogalleryPage
