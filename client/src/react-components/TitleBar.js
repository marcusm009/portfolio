import { IconButton } from '@material-ui/core'
import Icon from '@material-ui/core/Icon'
import { useHistory } from 'react-router'

import { RESOURCES_BASE_URL } from '../constants'

const TitleBar = ({ baseRoute, showWelcomePage }) => {
  const history = useHistory()
  
  const refresh = () => {
    window.location.reload()
  }

  const logoClicked = () => {
    showWelcomePage()
    history.push('/')
    window.location.reload()
  }

  const Logo = () => (
    <Icon>
      <img
        alt='Logo'
        src={RESOURCES_BASE_URL + '/images/favicon/favicon-64x64.png'}
        style={{
          width: '48px',
          maxWidth: '100%',
          height: 'auto'
        }}/>
    </Icon>
  )

  return (
    <div
      id={'title-bar'}
      className={'top-bar'}>
      <IconButton
        onClick={() => logoClicked()}>
        <Logo />
      </IconButton>
      <button
        type='button'
        className={'title'}
        onClick={() => logoClicked()}
      >
      {'Marcus Mills'}
      </button>
    </div>

  )
}

export default TitleBar
