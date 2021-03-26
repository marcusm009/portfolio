import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './react-components/NavBar'
import Canvas from './react-components/Canvas'

const App = () => {  
  const navButtons = [
    {
      text: 'About',
      route: '/about'
    },
    {
      text: 'Projects',
      route: '/projects'
    },
    {
      text: 'Contact',
      route: '/contact'
    }
  ]

  return (
    <Router>
      <NavBar buttons={navButtons}/>
      <Switch>
        <Route path='/about'>
          <Canvas level='about' />
        </Route>
        <Route path='/projects'>
          <Canvas level='projects' />
        </Route>
        <Route path='/contact'>
          <Canvas level='contact' />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
