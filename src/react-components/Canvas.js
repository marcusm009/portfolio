import { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'


import * as THREE from 'three'

import Camera from '../classes/Camera'
import Controller from '../classes/Controller'
import AudioManager from '../classes/AudioManager'
import CubePlayer from '../classes/CubePlayer'
import RectangularPrismPlayer from '../classes/RectangularPrismPlayer'
import Floor from '../classes/Floor'

let renderer;
let scene;
let camera;

let initialScreenWidth;
let initialScreenHeight;

const Canvas = ({ level }) => {
  const location = useLocation()
  const mount = useRef(null)

  const [state, setState] = useState({
    'isInitialized': false,
    'renderer': null,
    'scene': null,
    'camera': null,
    'audioManager': null
  })

  useEffect(async () => {
    if(!state.isInitialized)
      await initThreeCanvas(level, location, mount, state)
    resumeThreeCanvas(level, location, mount, state)
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

  if(level == location.pathname.split('/').pop()) {
    setupScene(window, document, level, mount);
  }

  let audioManager = new AudioManager(window);

  camera.add(audioManager.listener);
  audioManager.loadSound('wooden-percussion-shot');

  // add floor
  let floor = new Floor(
      0.9,
      [0xacff78,0x292929],
      [0,1]
  )
  await floor.loadTemplate(`levels/${level}.tsv`);
  floor.addToScene(scene);

  // add player
  let controller = new Controller(document);
  let player;
  if(level == 'projects')
      player = new RectangularPrismPlayer(floor.spawnTile.position.x, floor.spawnTile.position.z);
  else
      player = new CubePlayer(floor.spawnTile.position.x, floor.spawnTile.position.z);
  player.setController(controller);
  scene.add(player);
  camera.follow(player);

  // main animation loop
  let frame = 0;

  const animate = () => {
      renderer.render(scene, camera);

      if(player.playSound) {
          audioManager.playSound('wooden-percussion-shot');
      }

      player.animate(floor);
      camera.follow(player, .1);

      if (player.completionPending) {
          player.completionPending = false;
          player.completedLevel = true;
      }

      if(frame % 200 == 0) {
          console.log(player.position);
      }

      frame += 1;
      requestAnimationFrame(animate);
  }

  animate();

}

async function resumeThreeCanvas(level, location, mount, state) {
  console.log('done loading!')
}

function setupScene(window, document, containerId, mount) {
  initialScreenWidth = window.innerWidth;
  initialScreenHeight = window.innerHeight;

  scene = new THREE.Scene();
  camera = new Camera(window, scene);
  renderer = new THREE.WebGLRenderer({alpha: true})
  
  let container = mount.current
  console.log(mount.current)
  // let container = document.getElementById(containerId)
  let w = container ? container.offsetWidth : 0
  let h = container ? container.offsetHeight : 0
  renderer.setSize(w, h)
  if(container) {
    console.log(container)
    container.appendChild(renderer.domElement)
    console.log(renderer.domElement)
  }
    
  renderer.domElement.style.zIndex = 0

  let dirLight = new THREE.DirectionalLight();
  scene.add(dirLight);
  dirLight.position.set(-20,100,50);
}

function destroyScene(document, containerId) {
  document.getElementById(containerId).innerHTML = '';
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function scrollTransition() {
  window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
  });
}

export default Canvas
