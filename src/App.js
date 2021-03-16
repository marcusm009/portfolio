import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Canvas, useResource, useFrame } from 'react-three-fiber'
// import { OrthographicCamera } from '@react-three/drei'
import { Controls, useControl } from 'react-three-gui';

import * as THREE from 'three'

import NavBar from './components/NavBar'
import Player from './components/Player'
import Tile from './components/Tile'
import Level from './components/Level'
import Camera from './components/Camera'

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

  const playerGoTo = {
    position: [1,0,.75],
    rotation: [0,Math.PI/2,0]
  }
  
  return (
    <Router>
      <NavBar buttons={navButtons}/>
      <div id='canvas-container'>
        <Canvas>
          <Camera
            ref={myCamera}
            postion={[-1,-1,1]}
            near={-300}
            far={1500}
            zoom={100}
            rotation={[Math.PI/4,-(1.25)*Math.PI/8,-(1.25)*Math.PI/8]}
            makeDefault>
          </Camera>
          <directionalLight position={[-.5,-3,5]}/>
          <Level template={template}/>
          <Player
            position={[0,0,.75]}
            color={'red'}
            rotation={[0,0,0]}
            template={template}
            goto={playerGoTo}
            maxVel={.05}
            maxRotVel={.1}/>
        </Canvas>
      </div>
    </Router>
  )
}

export default App;
