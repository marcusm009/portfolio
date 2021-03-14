import NavButton from './NavButton'

const NavBar = ({ buttons, onClick }) => {
  return (
    <div
      id='nav-bar'
      className='top-bar'>
          {buttons.map((button, idx) => (
            <NavButton
              key={idx}
              button={button}
              onClick={onClick}
            />
          ))}
    </div>
  )
}

export default NavBar
