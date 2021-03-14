import { useRef, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Canvas, useFrame } from 'react-three-fiber'
import * as THREE from 'three'

import NavBar from './components/NavBar'

const Box = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state 
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });
  
  return (
    <mesh
    {...props}
    ref={mesh}
    scale={active ? [2, 2, 2] : [1.5, 1.5, 1.5]}
    onClick={(e) => setActive(!active)}
      >
      <boxBufferGeometry args={[1, 1, 1]} />
    </mesh>
  );
}

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
  ];
  
  return (
    <Router>
      <NavBar buttons={navButtons}/>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[2.5, 0, 0]} />
      </Canvas>
    </Router>
  );
}

export default App;
