import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { Container, Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ReplayIcon from '@material-ui/icons/Replay'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

import Footer from './Footer'

const Page = ({ Component, isActive, replayStageCallback, nextLevel, baseRoute }) => {
  const [isFadingIn, setFadingIn] = useState(true)
  const history = useHistory()

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
    setTimeout(() => setFadingIn(false), 1000)
  }, [])

  const classes = useStyles()

  return (
      <>
      {isActive &&
        <Container
          className={`${classes.root} ${isFadingIn ? classes.fade : ''} ${!isFadingIn && isActive ? classes.active: ''}`}
          maxWidth='lg'
          style={{
            minHeight: '96vh'
          }}
          >
          <Button
            variant='contained'
            startIcon={<ReplayIcon/>}
            onClick={() => {replayStageCallback()}}>
              Replay Level
            </Button>
          <br/><br/>
          <Component baseRoute={baseRoute}/>
          <Grid container justify='flex-end'>
            <Button
              variant='contained'
              endIcon={<NavigateNextIcon/>}
              onClick={() => {
                console.log(nextLevel)
                history.push(nextLevel.route)}}
              style={{
                display: (nextLevel !== undefined) ? 'inline-flex' : 'none',
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
