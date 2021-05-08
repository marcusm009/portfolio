import { useState, useEffect } from 'react'

const EntryPage = ({ isActive, baseRoute }) => {
  const [isFadingIn, setFadingIn] = useState(true)

  useEffect(
    () => {
      let timer = setTimeout(() => setFadingIn(false), 1000)

      return () => {
        clearTimeout(timer)
      }
    }, [])
  
  return (
      <div id={'entry-page'} className={`${isFadingIn ? 'fade': ''} ${!isFadingIn && isActive ? 'active': ''}`}>
        <h1 className={`${isFadingIn ? 'fade': ''} ${!isFadingIn && isActive ? 'active': ''}`}>
          Hi, I'm Marcus Mills, and welcome to my interactive portfolio website inspired by Bloxorz
        </h1>
      </div>
  )
}

export default EntryPage
