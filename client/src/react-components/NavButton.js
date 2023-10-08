import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const NavButton = ({ button }) => {
  const location = useLocation().pathname
  
  return (
    <Link
      to={button.route}
      className={(location === button.route) ? 'selected' : ''}
    >
      {button.text}
    </Link>
  )
}

export default NavButton
