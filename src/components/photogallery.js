import React from 'react'
import DecorMain from '../components/decorMain'
import PhotogalleryByYear from './photogalleryByYear'
import Slider from './slider'
import '../styles/page/page.scss'
import '../styles/page/_about.scss'

const Photogallery = ({ photos2019, photos2018, allPhotos, showFirstSlideOnKeyDown, showFirstSlide, handleArrows, hideSlider }) => (
  <>
    <div className='page page_about page_about_photogallery'>
      <DecorMain />
      <h2 className='page__title'>Фотогалерея</h2>
      <PhotogalleryByYear
        year='2019 год'
        photosOfTheYear={photos2019}
        showFirstSlideOnKeyDown={showFirstSlideOnKeyDown}
        showFirstSlide={showFirstSlide}
      />
      <PhotogalleryByYear
        year='2018 год'
        photosOfTheYear={photos2018}
        showFirstSlideOnKeyDown={showFirstSlideOnKeyDown}
        showFirstSlide={showFirstSlide}
      />
    </div>
    <Slider
      allPhotos={allPhotos}
      handleArrows={handleArrows}
      hideSlider={hideSlider}
    />
  </>
)

export default Photogallery
