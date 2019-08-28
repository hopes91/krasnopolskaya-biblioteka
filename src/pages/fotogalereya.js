import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Photogallery from '../components/photogallery'
import detiNaViktorine from '../images/photogallery/2019/deti-na-viktorine.jpg'
import bibliosumerki from '../images/photogallery/2019/bibliosumerki.jpg'
import bibliosumerki2 from '../images/photogallery/2019/bibliosumerki-2.jpg'
import bibliosumerki3 from '../images/photogallery/2019/bibliosumerki-3.jpg'
import shlyapnayaVecherinka from '../images/photogallery/2019/shlyapnaya-vecherinka.jpg'
import shlyapnayaVecherinka2 from '../images/photogallery/2019/shlyapnaya-vecherinka-2.jpg'
import shlyapnayaVecherinka3 from '../images/photogallery/2019/shlyapnaya-vecherinka-3.jpg'
import shlyapnayaVecherinka4 from '../images/photogallery/2019/shlyapnaya-vecherinka-4.jpg'
import shlyapnayaVecherinka5 from '../images/photogallery/2019/shlyapnaya-vecherinka-5.jpg'
import chasPamyatiNaKruzhkeBiblionik from '../images/photogallery/2019/chas-pamyati-na-kruzhke-biblionik.jpg'
import bibliopiknik1Maya from '../images/photogallery/2019/bibliopiknik-1-maya.jpg'
import bibliochuchelo from '../images/photogallery/2019/bibliochuchelo-dlya-biblionochi.jpg'
import detsadovtsyVMaskah from '../images/photogallery/2019/detsadovtsy-v-maskah-na-zanyatii-kruzhka-biblionik.jpg'
import vystavkaTeatrIBiblioteka from '../images/photogallery/2019/vystavka-teatr-i-biblioteka.jpg'
import viktorinaNaDomuDlyaDevochkiSOV from '../images/photogallery/2019/viktorina-na-domu-dlya-devochki-s-organichennymi-vozmozhnostyami.jpg'
import chasZozhVperedPoDorogeZdoroviya from '../images/photogallery/2019/chas-zozh-vpered-po-doroge-zdoroviya.jpg'
import semejnyjKlub29Marta from '../images/photogallery/2019/semejnyj-klub-29-marta.jpg'
import semejnyjKlub29Marta2 from '../images/photogallery/2019/semejnyj-klub-29-marta-2.jpg'
import biblionik from '../images/photogallery/2018/biblionik.jpg'
import chtoGdeKogdaPoPravu from '../images/photogallery/2018/chto-gde-kogda-po-pravu.jpg'
import chtoGdeKogdaPoPravu2 from '../images/photogallery/2018/chto-gde-kogda-po-pravu-2.jpg'
import kvestVoVremyaNochiPottera from '../images/photogallery/2018/kvest-vo-vremya-nochi-pottera.jpg'
import garriPotter from '../images/photogallery/2018/garri-potter.jpg'
import vedma from '../images/photogallery/2018/vedma.jpg'
import horoshoSidim from '../images/photogallery/2018/horosho-sidim.jpg'
import katyaSupermama from '../images/photogallery/2018/katya-supermama.jpg'
import luchshieNaryady from '../images/photogallery/2018/luchshie-naryady.jpg'
import lukomorieK45letijuBiblioteki from '../images/photogallery/2018/lukomorie-k-45letiju-biblioteki.jpg'
import nochIskusstv from '../images/photogallery/2018/noch-iskusstv.jpg'
import tort from '../images/photogallery/2018/tort.jpg'
import otkryvaemYponiju from '../images/photogallery/2018/otkryvaem-yaponiju.jpg'
import novogodnijVecherNaSemejnomKlube from '../images/photogallery/2018/novogodnij-vecher-na-semejnom-klube.jpg'
import novogodnijVecherNaSemejnomKlube2 from '../images/photogallery/2018/novogodnij-vecher-na-semejnom-klube-2.jpg'
import novogodnijVecherNaSemejnomKlube3 from '../images/photogallery/2018/novogodnij-vecher-na-semejnom-klube-3.jpg'

const photos2019 = [
  { src: semejnyjKlub29Marta, alt: 'Семейный клуб 29 марта' },
  { src: semejnyjKlub29Marta2, alt: 'Семейный клуб 29 марта 2' },
  { src: chasZozhVperedPoDorogeZdoroviya, alt: 'Час ЗОЖ вперёд по дороге здоровья' },
  { src: viktorinaNaDomuDlyaDevochkiSOV, alt: 'Викторина на дому для девочки с ограниченными возможностями' },
  { src: vystavkaTeatrIBiblioteka, alt: 'Выставка «Театр и библиотека»' },
  { src: detsadovtsyVMaskah, alt: 'Детсадовцы в масках на кружке «Библионик»' },
  { src: bibliochuchelo, alt: 'Библиочучело для Библионочи' },
  { src: bibliopiknik1Maya, alt: 'Библиопикник 1 мая' },
  { src: chasPamyatiNaKruzhkeBiblionik, alt: 'Час памяти на кружке «Библионик»' },
  { src: shlyapnayaVecherinka, alt: 'Шляпная вечеринка' },
  { src: shlyapnayaVecherinka2, alt: 'Шляпная вечеринка 2' },
  { src: shlyapnayaVecherinka3, alt: 'Шляпная вечеринка 3' },
  { src: shlyapnayaVecherinka4, alt: 'Шляпная вечеринка 4' },
  { src: shlyapnayaVecherinka5, alt: 'Шляпная вечеринка 5' },
  { src: bibliosumerki, alt: 'Библиосумерки' },
  { src: bibliosumerki2, alt: 'Библиосумерки 2' },
  { src: bibliosumerki3, alt: 'Библиосумерки 3' },
  { src: detiNaViktorine, alt: 'Дети на викторине' },
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
  { src: novogodnijVecherNaSemejnomKlube3, alt: 'Новогодний вечер на семейном клубе 3' },
]

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
