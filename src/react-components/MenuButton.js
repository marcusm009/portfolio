import { useLocation } from 'react-router-dom'

const MenuButton = ({ isOpen, setOpen }) => {
  
  return (
    <button
      id='menu-opener'
      onClick={() => setOpen(!isOpen)}>
      {isOpen ? (
        <div></div>
      ) : (
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect style={{fill: 'white'}} width="100" height="20"></rect>
          <rect style={{fill: 'white'}} y="30" width="100" height="20"></rect>
          <rect style={{fill: 'white'}} y="60" width="100" height="20"></rect>
        </svg>
      )}
      
    </button>
  )
}

export default MenuButton
