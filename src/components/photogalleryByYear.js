import React from 'react'

const PhotogalleryByYear = ({ year, photosOfTheYear, showFirstSlideOnKeyDown, showFirstSlide }) => (
  <>
  <h3 className='page_about_photogallery__year'>{year}</h3>
  <div className='page_about_photogallery__sorted-by-year'>
    {photosOfTheYear.map(photo => {
      const { src, alt } = photo

      return <img src={src} alt={alt} title='Нажмите, чтобы посмотреть в большом разрешении' key={src} tabIndex='0'
              className='page_about_photogallery__mini-photo'
              onKeyDown={showFirstSlideOnKeyDown} onClick={showFirstSlide}
            />
    })}
  </div>
  </>
)

export default PhotogalleryByYear
