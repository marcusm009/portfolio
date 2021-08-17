import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { Container, Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ReplayIcon from '@material-ui/icons/Replay'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

import Footer from './Footer'

const Page = ({ Component, isActive, replayStageCallback, prevLevel, nextLevel, baseRoute, shouldFadeIn }) => {
  const [isFadingIn, setFadingIn] = useState(shouldFadeIn)
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
          id='page'
          >
          <Button
            variant='contained'
            startIcon={<ReplayIcon/>}
            onClick={() => {replayStageCallback()}}>
              Replay Level
            </Button>
          <br/><br/>
          <Component baseRoute={baseRoute}/>
          <Grid container justify='space-between'>
            <Button
                variant='contained'
                disabled={!prevLevel}
                startIcon={<NavigateBeforeIcon/>}
                onClick={() => {
                  history.push(prevLevel.route)}}>
                {prevLevel && !prevLevel.completed ? 'Prev Level' : 'Prev Page'}
              </Button>
            <Button
              variant='contained'
              disabled={!nextLevel}
              endIcon={<NavigateNextIcon/>}
              onClick={() => {
                history.push(nextLevel.route)}}>
                {nextLevel && !nextLevel.completed ? 'Next Level' : 'Next Page'}
            </Button>
          </Grid>
          <Footer />
        </Container>}
      </>
  )
}

export default Page