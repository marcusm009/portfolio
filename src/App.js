import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

const App = () => {
  const navButtonClick = (route) => {
    console.log(route)
  }
  
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
  ];
  
  return (
    <Router>
      <NavBar buttons={navButtons} onClick={navButtonClick}/>
    </Router>
  );
}

export default App;
