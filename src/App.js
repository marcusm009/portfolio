import { BrowserRouter as Router } from 'react-router-dom'

import NavBar from './react-components/NavBar'
import CanvasSwitcher from './react-components/CanvasSwitcher'

const App = () => {  
  const navButtons = [
    {
      text: 'About',
      route: '/about',
      completed: 'false'
    },
    {
      text: 'Projects',
      route: '/projects',
      completed: 'false'
    },
    {
      text: 'Contact',
      route: '/contact',
      completed: 'false'
    }
  ]

  console.log('VER: 0.1.6');

  return (
    <Router>
      <NavBar buttons={navButtons}/>
      <CanvasSwitcher buttons={navButtons}/>
    </Router>
  )
}

export default App;
