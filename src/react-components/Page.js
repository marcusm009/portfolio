import { useState, useEffect } from 'react'
import Footer from './Footer'

const Page = ({ Component, isActive, baseRoute }) => {
  const [isFadingIn, setFadingIn] = useState(true)

  useEffect(
    () => {
      let timer = setTimeout(() => setFadingIn(false), 1000)

      return () => {
        clearTimeout(timer)
      }
    }, [])
  
  return (
      <div className={`page ${isFadingIn ? 'fade': ''} ${!isFadingIn && isActive ? 'active': ''}`}>
        <Component baseRoute={baseRoute}/>
        <Footer />
      </div>
  )
}

export default Page
