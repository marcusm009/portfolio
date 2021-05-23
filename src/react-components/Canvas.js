import { Component } from 'react'

import * as THREE from 'three'

import Camera from '../classes/Camera'
import Controller from '../classes/Controller'
import AudioManager from '../classes/AudioManager'
import RectangularPrismPlayer from '../classes/RectangularPrismPlayer'
import Floor from '../classes/Floor'

import { Button, IconButton } from '@material-ui/core'
import VolumeOffIcon from '@material-ui/icons/VolumeOff'
import VolumeUpIcon from '@material-ui/icons/VolumeUp'

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
      'initialMountHeight': null,
      'isInitialized': false,
      'audioiOS': {
        'isiOS': this.props.isiOS,
        'controller': null,
        'source': null
      },
      'isMuted': this.props.isiOS,
      'shouldResumeCanvas': true,
      'hasMoved': false
    }
  }

  async componentDidMount() {
    console.log('Canvas mounted')
    this.initThreeCanvas()
    window.addEventListener('resize', this.resizeCanvasToMountSize.bind(this))
  }

  async componentDidUpdate() {
    console.log('Canvas updated')
    if(this.state.isInitialized) {
      if(this.state.shouldResumeCanvas)
        this.resumeThreeCanvas()
      else
        this.state.shouldResumeCanvas = true
      
      this.resizeCanvasToMountSize()
      this.state.controller.isEnabled = this.props.isActive
      // If props are set to complete and player state complete, player completed level
      if(this.props.isComplete && this.state.player.completedLevel) {
        console.log('completed - ', this.props.level)
      }
      // If props are not set to complete but player state is, this implies that the level
      // needs to be restarted
      if(!this.props.isComplete && this.state.player.completedLevel) {
        this.state.player.completedLevel = false
        this.state.player.respawn()
        this.state.camera.reset()
        this.state.controller.reset()
        this.setState(this.state)
        console.log(this.state)
      }
    }
  }

  async componentWillUnmount() {
    window.removeEventListener('resize', this.resizeCanvasToMountSize.bind(this))
    console.log('Canvas unmounted')
  }

  async initThreeCanvas() {
    console.log(navigator.platform)

    // client, offset, scroll, css
    this.state.initialMountWidth = this.mount.offsetWidth
    this.state.initialMountHeight = this.mount.offsetHeight

    let aspect = this.state.initialMountWidth / this.state.initialMountHeight

    this.state.scene = new THREE.Scene()
    this.state.camera = new Camera(
      new THREE.Vector3(-1,1,1),
      this.state.scene.position.clone(),
      aspect
    )
    this.state.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    })
    
    this.state.renderer.setPixelRatio(window.devicePixelRatio)
    this.state.renderer.setSize(this.state.initialMountWidth, this.state.initialMountHeight, true)
    this.mount.appendChild(this.state.renderer.domElement)
      
    this.state.renderer.domElement.style.zIndex = 0
  
    let dirLight = new THREE.DirectionalLight()
    this.state.scene.add(dirLight)
    dirLight.position.set(-20,100,50)

    this.state.audioManager = new AudioManager(window, this.props.baseRoute, this.state.audioiOS)

    this.state.camera.add(this.state.audioManager.listener)
    this.state.audioManager.loadSound('block-move', 4)
  
    // add floor
    this.state.floor = new Floor(
        0.9,
        [0xacff78,0x292929],
        [0,1]
    )
    await this.state.floor.loadTemplate(`${this.props.baseRoute}/levels/${this.props.level}.tsv`)
    this.state.floor.addToScene(this.state.scene)

    // add player
    this.state.controller = new Controller(
      document,
      this.props.isActive,
      `${this.props.baseRoute}/levels/solutions/${this.props.level}.txt`
    );
    // if(this.props.level === 'projects' || this.props.level === 'contact')
    this.state.player = new RectangularPrismPlayer(this.state.floor.spawnTile.position.x, this.state.floor.spawnTile.position.z)
    // this.state.player = new CubePlayer(this.state.floor.spawnTile.position.x, this.state.floor.spawnTile.position.z);
    this.state.player.setController(this.state.controller)
    this.state.scene.add(this.state.player)
    this.state.camera.follow(this.state.player)

    this.state.isInitialized = true
    this.setState(this.state)
  }

  // main animation loop
  async resumeThreeCanvas(logLocation=true) {
    let frame = 0
    let shouldRender = true
  
    const animate = () => {

        if(this.props.isActive && shouldRender) {
          this.state.renderer.render(this.state.scene, this.state.camera)
  
          // Move this before render to use block zoom in as background
          if(this.state.player.completedLevel) {
            shouldRender = false
          }

          // The controller says it has moved, but it has not been reflected in the state yet
          // Used to remove text and icons explaining what to do
          if(this.state.controller.hasMoved && !this.state.hasMoved) {
            this.state.hasMoved = true
            this.state.shouldResumeCanvas = false
            this.setState(this.state)
          }

          if(this.state.player.playSound && !this.state.isMuted) {
            this.state.audioManager.playSound('block-move')
          }
  
          if (this.state.player.completionPending && !this.props.isComplete) {
            this.props.completeStageCallback()
          }

          this.state.player.animate(this.state.floor)
          this.state.camera.follow(this.state.player, .1);
    
          if(frame % 200 === 0 && logLocation) {
              // let dir = this.state.player.getWorldDirection()
              // dir.round()
              // console.log(dir)
              // console.log(this.state.player.position)
              // console.log(this.state.player.rotation)
              // let vector = new THREE.Vector3(0,0,1)
              // vector.applyQuaternion(this.state.player.quaternion)
              // console.log(vector)
              console.log(this.state.player.getGridPosition())
          }
    
          frame += 1
          this.state.isRunning = true
          requestAnimationFrame(animate)
        }
    }
    animate()
  }

  resizeCanvasToMountSize() {
    let canvas = this.state.renderer.domElement
    let canvasWidth = canvas.offsetWidth
    let canvasHeight = canvas.offsetHeight

    let mountWidth = this.mount.offsetWidth
    let mountHeight = this.mount.offsetHeight

    if (canvasWidth !== mountWidth || canvasHeight !== mountHeight) {
      this.state.renderer.setPixelRatio(window.devicePixelRatio)
      this.state.renderer.setSize(mountWidth, mountHeight, true)
      this.state.camera.aspect = mountWidth / mountHeight
      this.state.camera.update()
      updateCanvasCSS(this.mount) // Must update CSS manually since THREE.js
                                  // doesn't do it
    }
  }
  
  render() {
    return (
      <>
      {this.props.isActive && (
        <audio
          id='init'
          ref={ref => (this.state.audioiOS.controller = ref)}
          controls>
          <source
            ref={ref => (this.state.audioiOS.source = ref)}
            src='http://mmills.io/portfolio/sounds/silence.wav'
            type='audio/mpeg'></source>
            Your browser does not support the audio tag.
        </audio>
      )}

      {this.props.isActive && !this.props.isComplete && (
        <IconButton  
          id='intro'
          size='large'
          aria-label='delete'
          onClick={() => {
            if(this.state.audioiOS.isiOS && this.state.isMuted) {
              alert('Warning: Real-time sound on iOS is experimental and may have bugs!')
              this.state.audioiOS.controller.play()
            }
            this.state.isMuted = !this.state.isMuted
            this.state.shouldResumeCanvas = false
            this.setState(this.state)
          }}
          style={{
            zIndex: 1000,
            color: 'white',
            top: '5rem',
            left: '1rem',
            transform: 'scale(1.5)'
          }}>
            {this.state.isMuted ? <VolumeOffIcon/> : <VolumeUpIcon/>}
        </IconButton>
      )}
      <div
        ref={ref => (this.mount = ref)}
        id={this.props.level}
        className='canvas-container'
        style={{
          display: (this.props.isActive) ? 'block' : 'none'
        }}
      >
        {!this.state.hasMoved && <Hints/>}
        <div style={{
          display: (this.props.isActive && !this.props.isComplete) ? 'block' : 'none',
          position: 'fixed',
          margin: 'auto',
          bottom: '2rem',
          left: 0,
          right: 0,
          textAlign: 'center',
          zIndex: '4'
        }}>
          <Button
            variant='contained'
            onClick={() => {
              this.state.controller.autoSolve(.25)
            }}
            // style={{
            //   display: (this.props.isActive && !this.props.isComplete) ? 'block' : 'none',
            //   position: 'fixed',
            //   margin: 'auto',
            //   bottom: '2rem',
            //   left: 0,
            //   right: 0,
            //   textAlign: 'center',
            //   zIndex: '4'
            // }}
            >
            Auto-solve
          </Button>
        </div>
      </div>
      </>
    )
  }
}

function updateCanvasCSS(mount) {
  let canvas = mount.firstElementChild
  canvas.style.width = mount.offsetWidth
  canvas.style.height = mount.offsetHeight
}

function Hints() {
  return (
    isTouchDevice() ? (
      <>
      <h1 id='directions-text'>Swipe to move!</h1>
      {/* <div id='touch-icon'></div> */}
      </>
    ) : (
      <>
      <h1 id='directions-text'>Use WASD or arrow keys to move!</h1>
      </>
    )
  )
}

function isTouchDevice() {
  return window.matchMedia('(any-hover: none)').matches
}

export default Canvas
