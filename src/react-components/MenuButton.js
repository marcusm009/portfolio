import { MdClose } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'

const MenuButton = ({ isOpen, setOpen }) => {
  
  return (
    <button
      id='menu-opener'
      onClick={() => setOpen(!isOpen)}>
      {isOpen ? (
        <MdClose style={{width: '40px', height: '40px'}}/>
      ) : (
        <FiMenu style={{width: '40px', height: '40px'}}/>
      )}
      
    </button>
  )
}

export default MenuButton
