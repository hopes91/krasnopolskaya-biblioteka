import React from 'react'

const PhotogalleryByYear = ({ year, photosOfTheYear, showFirstSlideOnKeyDown, showFirstSlide }) => (
  <>
  <h3 className='photos-year'>{year}</h3>
  <div className='photos'>
    {photosOfTheYear.map(photo => {
      const { src, alt } = photo

      return <img
              src={src}
              alt={alt}
              key={src}
              tabIndex='0'
              title='Нажмите, чтобы посмотреть в большом разрешении'
              className='year-photo'
              onKeyDown={showFirstSlideOnKeyDown}
              onClick={showFirstSlide}
            />
    })}
  </div>
  </>
)

export default PhotogalleryByYear
