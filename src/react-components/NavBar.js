import { useState, useEffect, useRef } from 'react'
import MenuButton from './MenuButton'
import NavButton from './NavButton'

const calcOrientation = (width, height) => {
  return (width/height >= 1 && width > 600) ? 'landscape' : 'portrait'
}

const NavBar = ({ buttons }) => {
  const ref = useRef()
  const [isOpen, setOpen] = useState(false)
  const [orientation, setOrientation] = useState(
    calcOrientation(window.innerWidth, window.innerHeight))

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    window.addEventListener('resize', () => {
      setOrientation(calcOrientation(window.innerWidth, window.innerHeight))
    })
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
      
      window.removeEventListener('resize', () => {
        setOrientation(calcOrientation(window.innerWidth, window.innerHeight))
      })
    }
  }, [])
  
  return (
    <div
      id='nav-bar'
      ref={ref}
      className={`top-bar ${orientation} ${(isOpen) ? 'open' : 'closed'}`}>
          {(orientation === 'portrait') && (
            <MenuButton isOpen={isOpen} setOpen={setOpen}/>)}
          {buttons.map((button, idx) => (
            <NavButton
              key={idx}
              button={button}
            />
          ))}
    </div>
  )
}

export default NavBar
