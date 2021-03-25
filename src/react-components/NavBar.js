import NavButton from './NavButton'

const NavBar = ({ buttons }) => {
  return (
    <div
      id='nav-bar'
      className='top-bar'>
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
