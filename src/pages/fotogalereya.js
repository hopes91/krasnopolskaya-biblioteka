import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import OrnamentMain from '../components/ornamentMain'

import semejnyjKlub29Marta from '../images/photogalery/semejnyj-klub-29-marta.jpg'
import semejnyjKlub29Marta2 from '../images/photogalery/semejnyj-klub-29-marta-2.jpg'
import biblionik from '../images/photogalery/biblionik.jpg'
import chtoGdeKogdaPoPravu from '../images/photogalery/chto-gde-kogda-po-pravu.jpg'
import chtoGdeKogdaPoPravu2 from '../images/photogalery/chto-gde-kogda-po-pravu-2.jpg'
import kvestVoVremyaNochiPottera from '../images/photogalery/kvest-vo-vremya-nochi-pottera.jpg'
import garriPotter from '../images/photogalery/garri-potter.jpg'
import vedma from '../images/photogalery/vedma.jpg'
import horoshoSidim from '../images/photogalery/horosho-sidim.jpg'
import katyaSupermama from '../images/photogalery/katya-supermama.jpg'
import luchshieNaryady from '../images/photogalery/luchshie-naryady.jpg'
import lukomorieK45letijuBiblioteki from '../images/photogalery/lukomorie-k-45letiju-biblioteki.jpg'
import nochIskusstv from '../images/photogalery/noch-iskusstv.jpg'
import tort from '../images/photogalery/tort.jpg'
import otkryvaemYponiju from '../images/photogalery/otkryvaem-yaponiju.jpg'
import novogodnijVecherNaSemejnomKlube from '../images/photogalery/novogodnij-vecher-na-semejnom-klube.jpg'
import novogodnijVecherNaSemejnomKlube2 from '../images/photogalery/novogodnij-vecher-na-semejnom-klube-2.jpg'
import novogodnijVecherNaSemejnomKlube3 from '../images/photogalery/novogodnij-vecher-na-semejnom-klube-3.jpg'

const photos2019 = [
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

const miniPhotos = document.querySelectorAll('.mini-photo')
const back = document.getElementById('back')
const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dot')
const prevSlide = document.querySelector('.prev-slide')
const nextSlide = document.querySelector('.next-slide')

let mainSlide = null
let start = null

function showFirstSlide() {
  back.style.display = 'block'

  let clickedAlt = this.getAttribute('alt')
  let comparedAlt = null

  slides.forEach((slide, index) => {
    comparedAlt = slide.getAttribute('alt')
    slide.style.display = 'none'

    if (clickedAlt === comparedAlt) {
      slide.style.display = 'block'
      mainSlide = index
      start = index
      currentSlide(mainSlide)
    }

    if (start === 0) {
      prevSlide.style.display = 'none'
    } else if (start === miniPhotos.length - 1) {
      nextSlide.style.display = 'none'
    } else {
      prevSlide.style.display = 'block'
      nextSlide.style.display = 'block'
    }
  })
}

const moveSlides = index => {
  mainSlide += index;

  if (mainSlide < 1) {
    prevSlide.style.display = 'none'
  } else {
    prevSlide.style.display = 'block'
  }

  if (mainSlide > slides.length - 2) {
    nextSlide.style.display = 'none'
  } else {
    nextSlide.style.display = 'block'
  }

  slides.forEach(slide => slide.style.display = 'none')

  for (let i = start; i < slides.length; i++) {
    slides[mainSlide].style.display = 'block'
    currentSlide(mainSlide)
  }
}

const currentSlide = () => {
  dots.forEach(dot => dot.style.backgroundColor = 'oldlace')

  for (let i = start; i < dots.length; i++) {
    dots[mainSlide].style.backgroundColor = 'saddlebrown'
  }
}

const hideSlider = () => {
  mainSlide = null
  start = null
  back.style.display = 'none'
}

const PhotogalleryPage = () => (
  <Layout>
    <SEO title='Фотогалерея' keywords={[`фотогалерея`, `краснопольская библиотека`, `краснополье`, `сунский район`, `суна`, `кировская область`]} />
    <div className='about-library photogalery'>
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
              onClick={showFirstSlide}
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
              onClick={showFirstSlide}
            />
          )
        })}
      </div>
    </div>
    <div id='back'>
      <span title='Закрыть' id='close' onClick={hideSlider}>&times;</span>
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
      <span className='prev-slide' onClick={() => moveSlides(-1)}>&#10094;</span>
      <span className='next-slide' onClick={() => moveSlides(1)}>&#10095;</span>
      <div className='dots'>
        {/* {
          const dotsDiv = document.querySelector('.dots')
          const dot = document.createElement('span').setAttribute('class', 'dot')

          for (let i = 0; i < allPhotos.length; i++) {
            dotsDiv.appendChild(dot)
          }
        } */}
      </div>
    </div>
  </Layout>
)

export default PhotogalleryPage
