import { useState, useEffect } from 'react'
import { Typography, Button } from '@material-ui/core'

const Instructions = ({ baseRoute }) => {
  const [directionsVis, setDirectionsVis] = useState(false)
  const [imgVis, setImgVis] = useState(false)
  const [tapClickVis, setTapClickVis] = useState(false)
  
  useEffect(() => {
    if(!directionsVis) {
      setTimeout(() => {
        setDirectionsVis(true)
      }, 500)
    }
    else if(!imgVis) {
      setTimeout(() => {
        setImgVis(true)
      }, 500)
    }
    else if(!tapClickVis) {
      setTimeout(() => {
        setTapClickVis(true)
      }, 500)
    }
  })

  return (
    <>
      <div
        className='welcome-element'
        style={{padding: '2rem'}}>
        <Typography
          className={directionsVis ? 'active' : 'fade'}
          variant='h4'>
          Beat the level to unlock the page or click the auto-solve button
        </Typography>
      </div>
      <img
      alt='Logo'
      className={imgVis ? 'active' : 'fade'}
      src={baseRoute + '/images/welcome/how-to-play.png'}
      style={{
        width: '800px',
        maxWidth: '80%',
        height: 'auto'
      }}/>

      <div style={{padding: '2rem'}}>
        <Typography
          className={tapClickVis ? 'active' : 'fade'}
          variant='h4'>
          Tap or click to get started!
        </Typography>
      </div>
    </>
  )
}

export default Instructions