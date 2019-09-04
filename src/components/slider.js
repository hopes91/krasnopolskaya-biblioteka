import React from 'react'

const Slider = ({ allPhotos, handleArrows, hideSlider }) => (
  <div className='page_about_photogallery-back closed'>
    <span title='Закрыть (ESC)' className='page_about_photogallery-back__close-icon' onClick={hideSlider}>&times;</span>
    <div className='page_about_photogallery-back__front'>
      {allPhotos.map(photo => {
        const { src, alt } = photo

        return <img src={src} alt={alt} title={alt} key={src} className='page_about_photogallery-back__slide' />
      })}
    </div>
    <span className='page_about_photogallery-back__prev-slide' onClick={() => handleArrows(-1)}>&#10094;</span>
    <span className='page_about_photogallery-back__next-slide' onClick={() => handleArrows(1)}>&#10095;</span>
    <div className='page_about_photogallery-back__dots'></div>
  </div>
)

export default Slider
