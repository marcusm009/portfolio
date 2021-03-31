import { BrowserRouter, Redirect } from 'react-router-dom'
import { useState } from 'react'

import NavBar from './react-components/NavBar'
import TitleBar from './react-components/TitleBar'
import CanvasSwitcher from './react-components/CanvasSwitcher'

import About from './react-components/pages/About'
import Projects from './react-components/pages/Projects'
import Contact from './react-components/pages/Contact'


console.log('VER: 0.1.6');

const App = () => {  
  const [state, setState] = useState({
    pages: [
      {
        text: 'About',
        route: '/about',
        template: [
          ['x','x','x','x','x','x','x','x'],
          ['x','x','','s','x','x','x','x'],
          ['x','','x','x','x','x','g','x'],
          ],
        completed: false,
        component: About
      }
      // ,
      // {
      //   text: 'Projects',
      //   route: '/projects',
      //   completed: false,
      //   component: Projects
      // },
      // {
      //   text: 'Contact',
      //   route: '/contact',
      //   completed: false,
      //   component: Contact
      // }
    ]
  })

  // let pages = [
    
  // ]

  const completeStage = route => {
    console.log(route, ' completed!')
    state.pages.forEach((page, idx) => {
      if (page.route === route){
        let newState = {}
        Object.assign(newState, state)
        newState.pages[idx].completed = true
        setState(newState)
      }
    });
  }

  return (
    <BrowserRouter>
      {/* <Redirect exact from='/' to='about'/> */}
      <TitleBar/>
      <NavBar buttons={state.pages}/>
      <CanvasSwitcher pages={state.pages} completeStageCallback={completeStage}/>
    </BrowserRouter>
  )
}

export default App;
