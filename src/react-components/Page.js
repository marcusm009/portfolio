import { useState, useEffect, useRef } from 'react'
import { Container } from '@material-ui/core'
import Footer from './Footer'

const Page = ({ Component, isActive, replayStageCallback, baseRoute }) => {
  const [isFadingIn, setFadingIn] = useState(true)

  useEffect(() => {
    let timer = setTimeout(() => setFadingIn(false), 1000)
  }, [])

  return (
      <div
        className={`page-container ${isFadingIn ? 'fade': ''} ${!isFadingIn && isActive ? 'active': ''}`}>
        <Container maxWidth='md' >
          <Component baseRoute={baseRoute}/>
          <Footer />
        </Container>
      </div>
  )
}

export default Page
