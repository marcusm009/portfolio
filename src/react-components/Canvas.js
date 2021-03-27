import { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'


import * as THREE from 'three'

import Camera from '../classes/Camera'
import Controller from '../classes/Controller'
import AudioManager from '../classes/AudioManager'
import CubePlayer from '../classes/CubePlayer'
import RectangularPrismPlayer from '../classes/RectangularPrismPlayer'
import Floor from '../classes/Floor'
import { render } from 'react-three-fiber'

// let renderer;
// let scene;
// let camera;
// let audioManager;

// let initialScreenWidth;
// let initialScreenHeight;

let curState

const Canvas = ({ level }) => {
  const location = useLocation()
  const mount = useRef(null)

  const [lastState, setNextState] = useState({
    'isInitialized': false,
    'renderer': null,
    'scene': null,
    'camera': null,
    'audioManager': null,
    'floor': null,
    'controller': null,
    'player': null,
    'initialScreenWidth': null,
    'initialScreenHeight': null
  })

  useEffect(async () => {
    curState = lastState
    if(!lastState.isInitialized)
      curState = await initThreeCanvas(level, location, mount, curState)
    curState = await resumeThreeCanvas(level, location, mount, curState)
    console.log('hello')
    setNextState(curState)
    // return () => destroyScene(document, level)
  }, [location])
  
  return (
    <div
      ref={mount}
      id={level}
      className='canvas-container'
    >
    </div>
  )
}

async function initThreeCanvas(level, location, mount, state) {
  console.log('VER: 0.1.6');
  console.log('initializing...')
  console.log('state:', curState)

  if(level == location.pathname.split('/').pop()) {
    state = setupScene(window, document, mount, state);
  }

  state.audioManager = new AudioManager(window);

  state.camera.add(state.audioManager.listener);
  state.audioManager.loadSound('wooden-percussion-shot');

  // add floor
  state.floor = new Floor(
      0.9,
      [0xacff78,0x292929],
      [0,1]
  )
  await state.floor.loadTemplate(`levels/${level}.tsv`);
  state.floor.addToScene(state.scene);

  // add player
  state.controller = new Controller(document);
  if(level == 'projects')
      state.player = new RectangularPrismPlayer(state.floor.spawnTile.position.x, state.floor.spawnTile.position.z);
  else
      state.player = new CubePlayer(state.floor.spawnTile.position.x, state.floor.spawnTile.position.z);
  state.player.setController(state.controller);
  state.scene.add(state.player);
  state.camera.follow(state.player);
  
  console.log('done initializing')
  console.log('new state: ', state)
  return state
  // return {
  //   'isInitialized': true,
  //   'renderer': null,
  //   'scene': null,
  //   'camera': null,
  //   'audioManager': null,
  //   'floor': null,
  //   'controller': null,
  //   'player': null
  // }
}

async function resumeThreeCanvas(level, location, mount, state) {
  // let { audioManager, floor, controller, player, renderer, scene, camera, initialScreenHeight, initialScreenWidth } = curState
  
  // main animation loop
  let frame = 0;

  const animate = () => {
      state.renderer.render(state.scene, state.camera);

      if(state.player.playSound) {
          state.audioManager.playSound('wooden-percussion-shot');
      }

      state.player.animate(state.floor);
      state.camera.follow(state.player, .1);

      if (state.player.completionPending) {
          state.player.completionPending = false;
          state.player.completedLevel = true;
      }

      if(frame % 200 == 0) {
          console.log(state.player.position);
      }

      frame += 1;
      requestAnimationFrame(animate);
  }

  animate();

  return state

}

function setupScene(window, document, mount, state) {
  // let { audioManager, floor, controller, player, renderer, scene, camera, initialScreenHeight, initialScreenWidth } = curState
  
  state.initialScreenWidth = window.innerWidth;
  state.initialScreenHeight = window.innerHeight;

  state.scene = new THREE.Scene();
  state.camera = new Camera(window, state.scene);
  state.renderer = new THREE.WebGLRenderer({alpha: true})
  
  let container = mount.current
  // let container = document.getElementById(containerId)
  let w = container ? container.offsetWidth : 0
  let h = container ? container.offsetHeight : 0
  state.renderer.setSize(w, h)
  if(container) {
    console.log(container)
    container.appendChild(state.renderer.domElement)
    console.log(state.renderer.domElement)
  }
    
  state.renderer.domElement.style.zIndex = 0

  let dirLight = new THREE.DirectionalLight();
  state.scene.add(dirLight);
  dirLight.position.set(-20,100,50);

  return state
  // curState.scene = scene
  // curState.camera = camera
  // curState.renderer = renderer
  // curState.initialScreenHeight = initialScreenHeight
  // curState.initialScreenWidth = initialScreenWidth
}

function destroyScene(document, containerId) {
  document.getElementById(containerId).innerHTML = '';
}

// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// }

function scrollTransition() {
  window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
  });
}

export default Canvas
