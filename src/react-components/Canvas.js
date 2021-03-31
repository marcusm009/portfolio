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
      'initialScreenWidth': null,
      'initialScreenHeight': null
    }
  }

  async componentDidMount() {
    console.log(this.props)
    await this.initThreeCanvas()
    await this.resumeThreeCanvas()
  }

  async componentDidUpdate() {
    this.state.controller.isEnabled = this.props.isActive
    if(this.state.player.completedLevel) {
      console.log('completed - ', this.props.level)
    }
  }

  async initThreeCanvas() {    
    this.state.initialScreenWidth = window.innerWidth;
    this.state.initialScreenHeight = window.innerHeight;
  
    this.state.scene = new THREE.Scene();
    this.state.camera = new Camera(window, this.state.scene);
    this.state.renderer = new THREE.WebGLRenderer({alpha: true})
    
    let container = this.mount
    this.state.renderer.setSize(this.state.initialScreenWidth, this.state.initialScreenHeight)
    container.appendChild(this.state.renderer.domElement)
      
    this.state.renderer.domElement.style.zIndex = 0
  
    let dirLight = new THREE.DirectionalLight();
    this.state.scene.add(dirLight);
    dirLight.position.set(-20,100,50);

    this.state.audioManager = new AudioManager(window);
  
    this.state.camera.add(this.state.audioManager.listener);
    // this.state.audioManager.loadSound('wooden-percussion-shot');
  
    // add floor
    this.state.floor = new Floor(
        0.9,
        [0xacff78,0x292929],
        [0,1]
    )
    this.state.floor.setTemplate(this.props.template)
    // await this.state.floor.loadTemplate(`levels/${this.props.level}.tsv`);
    this.state.floor.addToScene(this.state.scene)

    console.log(this.state.floor)
  
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
        this.state.renderer.render(this.state.scene, this.state.camera);
  
        // if(this.state.player.playSound) {
        //     this.state.audioManager.playSound('wooden-percussion-shot');
        // }
  
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
  
  render() {
    return (
      <div
        ref={ref => (this.mount = ref)}
        id={this.props.level}
        className='canvas-container'
        style={{display: this.props.isActive ? 'block' : 'none'}}
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
