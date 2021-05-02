import { useState, useEffect, useRef } from 'react'
import { Container, Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ReplayIcon from '@material-ui/icons/Replay'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

import Footer from './Footer'

const Page = ({ Component, isActive, replayStageCallback, baseRoute }) => {
  const [isFadingIn, setFadingIn] = useState(true)

  const useStyles = makeStyles(() => ({
    root: {
      display: 'none',
      top: '4rem',
      position: 'relative',
      backgroundColor: 'white',
      padding: '2rem',
      paddingBottom: '5rem',
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
      {isActive &&
        <Container className={`${classes.root} ${isFadingIn ? classes.fade : ''} ${!isFadingIn && isActive ? classes.active: ''}`} maxWidth='lg' >
          <Button
            variant='contained'
            gutterBottom
            startIcon={<ReplayIcon/>}>
              Replay Level
            </Button>
          <br/><br/>
          <Component baseRoute={baseRoute}/>
          <Grid container justify='flex-end'>
            <Button
              variant='contained'
              gutterBottom
              endIcon={<NavigateNextIcon/>}
              style={{
                right: 0
              }}>
                Next Level
            </Button>
          </Grid>
          <Footer />
        </Container>}
      </>
  )
}

export default Page
