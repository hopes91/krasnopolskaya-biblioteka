import React from 'react'
import Corner from './corner'
import '../styles/decor/main.scss'
import { corners } from '../lists/decor'

const DecorMain = () => (
  <div className='decor-main'>
    {corners.map(corner => {
      const { secondClass, src } = corner

      return <Corner
              key={secondClass}
              secondClass={secondClass}
              src={src}
            />
    })}
  </div>
)

export default DecorMain
