import { useRef, useState } from 'react'
import { useFrame } from 'react-three-fiber'

import Tile from './Tile'

const Level = ( {template, z} ) => {
  return (
    <>
    {template.map((row, y) => (
        row.map((cell, x) => {
          return cell != '' ? (<Tile position={[x,y,z]}/>) : ''
      })
    ))}
    </>
  )
}

export default Level