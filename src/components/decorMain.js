import React from 'react'
import Corner from './corner'
import '../styles/decor/_main.scss'
import corner1 from '../images/decor/corner-1.jpg'
import corner2 from '../images/decor/corner-2.jpg'
import corner3 from '../images/decor/corner-3.jpg'
import corner4 from '../images/decor/corner-4.jpg'

const corners = [
  { secondClass: 'one', src: corner1 },
  { secondClass: 'two', src: corner2 },
  { secondClass: 'three', src: corner3 },
  { secondClass: 'four', src: corner4 }
]

const DecorMain = () => (
  <div className='decor_main'>
    {corners.map(corner => {
      const { secondClass, src } = corner

      return (
        <Corner
          key={secondClass}
          secondClass={secondClass}
          src={src}
        />
      )
    })}
  </div>
)

export default DecorMain
