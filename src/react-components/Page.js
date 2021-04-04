import { useState, useEffect } from 'react'

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
      </div>
  )
}

export default Page
