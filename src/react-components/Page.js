import { useState, useEffect, useRef } from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Footer from './Footer'

const Page = ({ Component, isActive, replayStageCallback, baseRoute }) => {
  const [isFadingIn, setFadingIn] = useState(true)

  const useStyles = makeStyles(() => ({
    root: {
      display: 'none',
      top: '4rem',
      position: 'relative',
      backgroundColor: 'white',
      transition: 'opacity .3s linear',
      '-moz-transition': 'opacity .3s linear',
      '-webkit-transition': 'opacity .3s linear',
      zIndex: 1
    },
    fade: {
      display: 'block',
      opacity: 0
    },
    active: {
      display: 'block',
      opacity: 1
    }
  }))

  useEffect(() => {
    let timer = setTimeout(() => setFadingIn(false), 1000)
  }, [])

  const classes = useStyles()

  return (
      <>
      {/* <div className={`page-container ${isFadingIn ? 'fade': ''} ${!isFadingIn && isActive ? 'active': ''}`}> */}
      {isActive &&
        <Container className={`${classes.root} ${isFadingIn ? classes.fade : ''} ${!isFadingIn && isActive ? classes.active: ''}`} maxWidth='md' >
          <Component baseRoute={baseRoute}/>
          <Footer />
        </Container>}
      {/* </div> */}
      </>
  )
}

export default Page
