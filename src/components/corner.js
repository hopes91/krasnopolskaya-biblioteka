import React from 'react'

const Corner = ({ secondClass, src }) => (
  <img
    src={src}
    alt=''
    className={`corner corner-${secondClass}`}
  />
)

export default Corner
