import React from 'react'

const Corner = ({ secondClass, src, alt }) => (
  <img 
    src={src}
    alt={alt}
    className={`corner corner-${secondClass}`}
  />
)

export default Corner
