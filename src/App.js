import { BrowserRouter, Redirect } from 'react-router-dom'
import { useState } from 'react'

import { CssBaseline } from '@material-ui/core'

import NavBar from './react-components/NavBar'
import TitleBar from './react-components/TitleBar'
import CanvasSwitcher from './react-components/CanvasSwitcher'

import Welcome from './react-components/pages/Welcome'
import About from './react-components/pages/About'
import Projects from './react-components/pages/Projects'
import Contact from './react-components/pages/Contact'

const BASE_ROUTE = '/portfolio'
const VERSION = '0.8.5'

console.log('VER: ', VERSION)

const App = () => {  
  const [state, setState] = useState({
    pages: [
      {
        text: 'About',
        route: '/about',
        completed: false,
        component: About
      },
      {
        text: 'Projects',
        route: '/projects',
        completed: false,
        component: Projects
      },
      {
        text: 'Contact',
        route: '/contact',
        completed: false,
        component: Contact
      }
    ],
    welcomePageDismissed: false,
    touchEnabled: false
  })

  const completeStage = route => {
    console.log(route, ' completed!')
    state.pages.forEach((page, idx) => {
      if (page.route === route){
        let newState = {}
        Object.assign(newState, state)
        newState.pages[idx].completed = true
        setState(newState)
      }
    })
  }

  const replayStage = route => {
    console.log(route, ' - replaying!')
    state.pages.forEach((page, idx) => {
      if (page.route === route){
        let newState = {}
        Object.assign(newState, state)
        newState.pages[idx].completed = false
        setState(newState)
      }
    })
  }

  const dismissWelcomePage = () => {
    setState({welcomePageDismissed: true, pages: state.pages})
  }

  return (
    <BrowserRouter
      basename={BASE_ROUTE}>
      
      <CssBaseline />
      <TitleBar
        baseRoute={BASE_ROUTE}
      />
      <NavBar
        buttons={state.pages}
        baseRoute={BASE_ROUTE}
      />
      {
        !state.welcomePageDismissed ? (
          <Welcome
            dismissWelcomePage={dismissWelcomePage}
            />
        ) : (
          <CanvasSwitcher
            pages={state.pages}
            completeStageCallback={completeStage}
            replayStageCallback={replayStage}
            baseRoute={BASE_ROUTE}
            isiOS={isiOS()}
          />
        )
      }
      <div
        id={'ver'}
        style={{
          color: 'white',
          position: 'fixed',
          right: '2px',
          bottom: '2px',
          zIndex: '999'
        }}
        >
        Ver: {VERSION}</div>
    </BrowserRouter>
  )
}

function isiOS() {
  let isiOS = false
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
      isiOS = true
  }
  return isiOS
}

export default App;