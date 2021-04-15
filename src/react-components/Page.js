import { useState, useEffect, useRef } from 'react'
import Footer from './Footer'

function useStateRef(initialValue) {
  const [value, setValue] = useState(initialValue);

  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return [value, setValue, ref];
}

const Page = ({ Component, isActive, baseRoute }) => {
  const scrollPos = useRef(0)
  const [pagePressure, setPagePressure, pagePressureRef] = useStateRef(0)
  const [isFadingIn, setFadingIn] = useState(true)

  const listenToScroll = () => {    
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    scrollPos.current = winScroll / height
  }

  const listenToWheel = (event) => {
    if(scrollPos.current === 0 && event.deltaY === -100) {
      setPagePressure(pagePressureRef.current - 1)
    } else if(scrollPos.current === 1 && event.deltaY === 100) {
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

  return (
      <div
        className={`page ${isFadingIn ? 'fade': ''} ${!isFadingIn && isActive ? 'active': ''}`}
        style={{
          transform: `translate(${
            pagePressure !== 0 ? -Math.sign(pagePressure) * Math.log(Math.abs(pagePressure)) : 0
          }%)`
        }}>
        <Component baseRoute={baseRoute}/>
        <Footer />
      </div>
  )
}

export default Page
