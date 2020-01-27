import React from 'react'

const Slider = ({ allPhotos, handleArrows, hideSlider }) => (
  <div className='popup-back closed'>
    <span
      title='Закрыть (ESC)'
      className='close-popup-icon'
      onClick={hideSlider}
    >
      &times;
    </span>
    <div className='popup-front'>
      {allPhotos.map(photo => {
        const { src, alt, title } = photo

        return <img
                src={src}
                alt={alt}
                key={src}
                title={title}
                className='slide'
              />
      })}
    </div>
    <span
      className='prev-slide-arrow'
      onClick={() => handleArrows(-1)}
    >
      &#10094;
    </span>
    <span
      className='next-slide-arrow'
      onClick={() => handleArrows(1)}
    >
      &#10095;
    </span>
    <div className='dots'></div>
  </div>
)

export default Slider
