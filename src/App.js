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
const VERSION = '1.0'

console.log('VER: ', VERSION)

const App = () => {  
  const [state, setState] = useState({
    pages: [
      {
        text: 'About',
        route: '/about',
        completed: true,
        component: About
      },
      {
        text: 'Projects',
        route: '/projects',
        completed: true,
        component: Projects
      },
      {
        text: 'Contact',
        route: '/contact',
        completed: true,
        component: Contact
      }
    ],
    welcomePageDismissed: false,
    gameModeEnabled: false,
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
        newState.gameModeEnabled = true
        setState(newState)
      }
    })
  }

  const startGame = () => {
    let newPages = state.pages
    for (let page of newPages) {
      page.completed = false
    }
    setState({welcomePageDismissed: true, pages: newPages, gameModeEnabled: true})
  }
  
  const startClassic = () => {
    setState({welcomePageDismissed: true, pages: state.pages, gameModeEnabled: false})
  }

  const showWelcomePage = () => {
    setState({welcomePageDismissed: false, pages: state.pages})
  }

  return (
    <BrowserRouter
      basename={BASE_ROUTE}>
      
      <CssBaseline />
      <TitleBar
        baseRoute={BASE_ROUTE}
        showWelcomePage={showWelcomePage}
      />
      <NavBar
        buttons={state.pages}
        baseRoute={BASE_ROUTE}
      />
      {
        !state.welcomePageDismissed ? (
          <Welcome
            baseRoute={BASE_ROUTE}
            startGame={startGame}
            startClassic={startClassic}
            />
        ) : (
          <CanvasSwitcher
            pages={state.pages}
            completeStageCallback={completeStage}
            replayStageCallback={replayStage}
            baseRoute={BASE_ROUTE}
            isiOS={isiOS()}
            gameModeEnabled={state.gameModeEnabled}
          />
        )
      }
      {/* <div
        id={'ver'}
        style={{
          color: 'white',
          position: 'fixed',
          right: '2px',
          bottom: '2px',
          zIndex: '999'
        }}
        >
        Ver: {VERSION}</div> */}
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