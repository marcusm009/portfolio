import { Component } from 'react'

import * as THREE from 'three'

import Camera from '../classes/Camera'
import Controller from '../classes/Controller'
import AudioManager from '../classes/AudioManager'
import CubePlayer from '../classes/CubePlayer'
import RectangularPrismPlayer from '../classes/RectangularPrismPlayer'
import Floor from '../classes/Floor'

class Canvas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'renderer': null,
      'scene': null,
      'camera': null,
      'audioManager': null,
      'floor': null,
      'controller': null,
      'player': null,
      'initialMountWidth': null,
      'initialMountHeight': null
    }
  }

  async componentDidMount() {
    await this.initThreeCanvas()
    await this.resumeThreeCanvas()
  }

  async componentDidUpdate() {
    if(this.state.controller) {
      this.state.controller.isEnabled = this.props.isActive
      if(this.state.player.completedLevel) {
        console.log('completed - ', this.props.level)
      }
    }
  }

  async initThreeCanvas() {
    this.state.initialMountWidth = this.mount.clientWidth;
    this.state.initialMountHeight = this.mount.clientHeight;

    console.log('width: ', window.innerWidth)
    console.log('height: ', window.innerHeight)

    let aspect = this.state.initialMountWidth / this.state.initialMountHeight

    this.state.scene = new THREE.Scene();
    this.state.camera = new Camera(
      new THREE.Vector3(-1,1,1),
      this.state.scene.position.clone(),
      aspect
    )
    this.state.renderer = new THREE.WebGLRenderer({
      alpha: true,
    })
    
    // this.state.renderer.setPixelRatio(window.devicePixelRatio)
    
    // let container = this.mount
    this.state.renderer.setSize(this.state.initialMountWidth, this.state.initialMountHeight, false)
    this.mount.appendChild(this.state.renderer.domElement)
      
    this.state.renderer.domElement.style.zIndex = 0
  
    let dirLight = new THREE.DirectionalLight();
    this.state.scene.add(dirLight);
    dirLight.position.set(-20,100,50);

    this.state.audioManager = new AudioManager(window, this.props.baseRoute);
  
    this.state.camera.add(this.state.audioManager.listener);
    this.state.audioManager.loadSound('wooden-percussion-shot');
  
    // add floor
    this.state.floor = new Floor(
        0.9,
        [0xacff78,0x292929],
        [0,1]
    )
    await this.state.floor.loadTemplate(`${this.props.baseRoute}/levels/${this.props.level}.tsv`);
    this.state.floor.addToScene(this.state.scene)
  
    // add player
    this.state.controller = new Controller(document, this.props.isActive);
    if(this.props.level == 'projects')
        this.state.player = new RectangularPrismPlayer(this.state.floor.spawnTile.position.x, this.state.floor.spawnTile.position.z);
    else
        this.state.player = new CubePlayer(this.state.floor.spawnTile.position.x, this.state.floor.spawnTile.position.z);
    this.state.player.setController(this.state.controller);
    this.state.scene.add(this.state.player);
    this.state.camera.follow(this.state.player);
  }

  // main animation loop
  async resumeThreeCanvas() {
    let frame = 0;
  
    const animate = () => {
        // if(frame%200 == 0)
        this.resizeCanvasToMountSize()
      
        this.state.renderer.render(this.state.scene, this.state.camera);
  
        if(this.state.player.playSound) {
            this.state.audioManager.playSound('wooden-percussion-shot');
        }

        this.state.player.animate(this.state.floor);
        this.state.camera.follow(this.state.player, .1);

        if (this.state.player.completionPending && !this.props.isComplete) {
            this.props.completeStageCallback()
        }
  
        if(frame % 200 == 0) {
            console.log(this.state.player.position);
        }
  
        frame += 1;
        requestAnimationFrame(animate);
    }
    animate();
  }

  resizeCanvasToMountSize() {
    let canvas = this.state.renderer.domElement
    let canvasWidth = canvas.clientWidth
    let canvasHeight = canvas.clientHeight

    let mountWidth = this.mount.clientWidth
    let mountHeight = this.mount.clientHeight

    console.log('canvas width: ', canvasWidth)
    console.log('canvas height: ', canvasHeight)

    console.log('mount width: ', mountWidth)
    console.log('mount height: ', mountHeight)
  
    if (canvasWidth !== mountWidth || canvasHeight !== mountHeight) {
      this.state.renderer.setSize(mountWidth, mountHeight, false);
      this.state.camera.aspect = mountWidth / mountHeight;
      this.state.camera.update();

    }
  }
  
  render() {
    return (
      <div
        ref={ref => (this.mount = ref)}
        id={this.props.level}
        className='canvas-container'
        style={{
          display: this.props.isActive ? 'block' : 'none'
        }}
      >
      </div>
    )
  }
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
