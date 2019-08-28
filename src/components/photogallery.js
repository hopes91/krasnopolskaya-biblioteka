import React from 'react'
import DecorMain from '../components/decorMain'
import '../styles/page/page.scss'
import '../styles/page/_about.scss'

const Photogallery = ({ photos2019, photos2018, allPhotos, showFirstSlideOnKeyDown, showFirstSlide, handleArrows, hideSlider }) => (
  <>
    <div className='page page_about page_about_photogallery'>
      <DecorMain />
      <h2 className='page__title'>Фотогалерея</h2>
      <h3 className='page_about_photogallery__year'>2019 год</h3>
      <div className='page_about_photogallery__sorted-by-year'>
        {photos2019.map(photo => {
          const { src, alt } = photo

          return (
            <img
              src={src} alt={alt} title='Нажмите, чтобы посмотреть в большом разрешении' key={src} tabIndex='0'
              className='page_about_photogallery__mini-photo'
              onKeyDown={showFirstSlideOnKeyDown}
              onClick={showFirstSlide}
            />
          )
        })}
      </div>

      <h3 className='page_about_photogallery__year'>2018 год</h3>
      <div className='page_about_photogallery__sorted-by-year'>
        {photos2018.map(photo => {
          const { src, alt } = photo

          return (
            <img
              src={src} alt={alt} title='Нажмите, чтобы посмотреть в большом разрешении' key={src} tabIndex='0'
              className='page_about_photogallery__mini-photo'
              onKeyDown={showFirstSlideOnKeyDown}
              onClick={showFirstSlide}
            />
          )
        })}
      </div>
    </div>

    <div className='page_about_photogallery-back closed'>
      <span title='Закрыть (ESC)' className='page_about_photogallery-back__close-icon' onClick={hideSlider}>&times;</span>
      <div className='page_about_photogallery-back__front'>
        {allPhotos.map(photo => {
          const { src, alt } = photo

          return (
            <img
              src={src} alt={alt} title={alt} key={src}
              className='page_about_photogallery-back__slide'
            />
          )
        })}
      </div>
      <span className='page_about_photogallery-back__prev-slide' onClick={() => handleArrows(-1)}>&#10094;</span>
      <span className='page_about_photogallery-back__next-slide' onClick={() => handleArrows(1)}>&#10095;</span>
      <div className='page_about_photogallery-back__dots'></div>
    </div>
  </>
)

export default Photogallery
