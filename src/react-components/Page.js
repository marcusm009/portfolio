import { useState, useEffect, useRef } from 'react'
import Footer from './Footer'
import useStateRef from './hooks'

const PRESSURE_NEEDED_FOR_PAGE_CHANGE = 20
const PRESSURE_NEEDED_FOR_TO_START_ANIMATION = 5

const Page = ({ Component, isActive, replayStageCallback, baseRoute }) => {
  const scrollPos = useRef(0)
  const [pagePressure, setPagePressure, pagePressureRef] = useStateRef(0)
  const [isFadingIn, setFadingIn] = useState(true)

  const listenToScroll = () => {    
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    scrollPos.current = winScroll / height
  }

  const listenToWheel = (event) => {
    if(scrollPos.current === 0 && event.deltaY < 0) {
      setPagePressure(pagePressureRef.current - 1)
    } else if(scrollPos.current === 1 && event.deltaY > 0) {
      setPagePressure(pagePressureRef.current + 1)
    } else {
      setPagePressure(0)
    }
  }

  useEffect(() => {
    let timer = setTimeout(() => setFadingIn(false), 1000)

    window.addEventListener('scroll', listenToScroll)
    document.addEventListener('wheel', listenToWheel)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', listenToScroll)
      document.removeEventListener('wheel', listenToWheel)
    }
  }, [])

  useEffect(() => {
    if(pagePressure < -PRESSURE_NEEDED_FOR_PAGE_CHANGE) {
      console.log('goto prev page')
      // replayStageCallback()
    } else if(pagePressure > PRESSURE_NEEDED_FOR_PAGE_CHANGE) {
      console.log('goto next page')
    }
  }, [pagePressure])

  return (
      <div
        className={`page-container ${isFadingIn ? 'fade': ''} ${!isFadingIn && isActive ? 'active': ''}`}>
        <h1 style={{
          position: 'absolute',
          left: '0',
          right: '0',
          color: 'white',
          textAlign: 'center',
          zIndex: '-1',
          textShadow: pagePressure < -PRESSURE_NEEDED_FOR_PAGE_CHANGE ? '1px 1px' : ''
        }}>Replay level</h1>
        <div
          className={`page ${isFadingIn ? 'fade': ''} ${!isFadingIn && isActive ? 'active': ''}`}
          style={{
            transform: `translate(0,${
              Math.abs(pagePressure) > PRESSURE_NEEDED_FOR_TO_START_ANIMATION ? 
              -Math.sign(pagePressure-PRESSURE_NEEDED_FOR_TO_START_ANIMATION) * Math.log(
                2*Math.abs(pagePressure)-PRESSURE_NEEDED_FOR_TO_START_ANIMATION): 0
            }%)`
          }}>
          <Component baseRoute={baseRoute}/>
          <Footer />
        </div>
        <h1 style={{
          position: 'absolute',
          left: '0',
          right: '0',
          bottom: '.5rem',
          color: 'white',
          textAlign: 'center',
          zIndex: '-1',
          textShadow: pagePressure > PRESSURE_NEEDED_FOR_PAGE_CHANGE ? '1px 1px' : ''
        }}>Next level</h1>
      </div>
  )
}

export default Page
