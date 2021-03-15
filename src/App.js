import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Canvas, useResource } from 'react-three-fiber'
import { OrthographicCamera } from '@react-three/drei'
import { Controls, useControl } from 'react-three-gui';

import * as THREE from 'three'

import NavBar from './components/NavBar'
import Player from './components/Player'
import Tile from './components/Tile'
import Level from './components/Level'

const App = () => {
  
  const myCamera = useResource()
  
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

  const template = [
    ['x', 'x'],
    ['' , 'x']
  ]
  
  return (
    <Router>
      <NavBar buttons={navButtons}/>
      <div id='canvas-container'>
        <Canvas>
          <OrthographicCamera
            ref={myCamera}
            postion={[-1,-1,1]}
            near={-300}
            far={1500}
            zoom={100}
            rotation={[Math.PI/4,-(1.25)*Math.PI/8,-(1.25)*Math.PI/8]}
            makeDefault>
            <mesh />
          </OrthographicCamera>
          <directionalLight position={[-.5,-3,5]}/>
          <Level template={template}/>
        </Canvas>
      </div>
    </Router>
  )
}

export default App;
