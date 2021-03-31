import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const TitleBar = () => {
  const location = useLocation().pathname
  
  return (
    <div
      id={'title-bar'}
      className={'top-bar'}>
      <a
        href={location}
        className={'title'}
      >
        Marcus Mills
      </a>
    </div>

  )
}

export default TitleBar
