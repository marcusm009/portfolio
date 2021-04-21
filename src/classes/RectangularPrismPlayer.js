import * as THREE from 'three'
import Player from './Player'

class RectangularPrismPlayer extends Player {
  constructor(x, z, y = 1, scale = [.9, 1.8, .9], color = 'blue') {
    super(x, z, y + .25 * scale[1], scale, color)
  }

  move(direction, framesPerRoll = 10) {
    let rotVel = (Math.PI / 2) / framesPerRoll
    let didMove = false

    if (this.isReadyToMove === true) {
      
      let orientation = this.getOrientation()
      let deltaGrid = 1 / framesPerRoll
      let deltaY = 0
      
      let rotation

      if((orientation === 'UPRIGHT') ||
         (orientation === 'UP-DOWN' && (direction === 'u' || direction === 'd')) ||
         (orientation === 'LEFT-RIGHT' && (direction === 'l' || direction === 'r'))) {
          
        deltaGrid *= 1.5
        deltaY = (orientation === 'UPRIGHT' ? -1 : 1) * .25 * this.size[1] / framesPerRoll
      }

      if(direction === 'u') {
        rotation = new THREE.Vector3(0,0,-1)
        this.animations.push([() => {
          this.position.x += deltaGrid
          this.position.y += deltaY
          this.rotateOnWorldAxis(rotation, rotVel)
          }, framesPerRoll])
      } else if(direction === 'd') {
        rotation = new THREE.Vector3(0,0,1)
        this.animations.push([() => {
          this.position.x -= deltaGrid
          this.position.y += deltaY
          this.rotateOnWorldAxis(rotation, rotVel)
          }, framesPerRoll])
      } else if(direction === 'r') {
        rotation = new THREE.Vector3(1,0,0)
        this.animations.push([() => {
          this.position.z += deltaGrid
          this.position.y += deltaY
          this.rotateOnWorldAxis(rotation, rotVel)
          }, framesPerRoll])
      } else if(direction === 'l') {
        rotation = new THREE.Vector3(-1,0,0)
        this.animations.push([() => {
            this.position.z -= deltaGrid
            this.position.y += deltaY
            this.rotateOnWorldAxis(rotation, rotVel)
            }, framesPerRoll])
      } else if (direction == 'resp') {
        this.respawn()
      }

      didMove = true
      this.playSound = true
      this.isReadyToMove = false
      this.lastDirection = direction
      this.lastRotation = rotation
    }

    return didMove
  }

  getOrientation() {
    let x = this.position.x
    let z = this.position.z

    if(x === toInt(x) && z === toInt(z))
      return 'UPRIGHT'
    if(x === toInt(x))
      return 'LEFT-RIGHT'
    if(z === toInt(z))
      return 'UP-DOWN'
  }

  checkFloor(floor) {
    let pos = this.getGridPosition()
    let orientation = this.getOrientation()
    let lastDir = this.lastDirection

    // regular checkFloor handling
    if(orientation === 'UPRIGHT') {
      return super.checkFloor(floor)
    }
    
    // any fall
    if (!floor.hasBlockInLocation(pos[0]) || !floor.hasBlockInLocation(pos[1])) {
      // both blocks off the grid
      if (!floor.hasBlockInLocation(pos[0]) && !floor.hasBlockInLocation(pos[1])) {
        // this.quickRotate(this.lastRotation)
      }
      // first block off grid
      else if (!floor.hasBlockInLocation(pos[0])) {
        console.log('first off')
        if(orientation === 'UP-DOWN')
          this.quickRotate(new THREE.Vector3(0,0,1))
        else
          this.quickRotate(new THREE.Vector3(-1,0,0), false)
      }
      // second block off grid
      else {
        console.log('second off')
        if(orientation === 'UP-DOWN')
          this.quickRotate(new THREE.Vector3(0,0,-1))
        else
          this.quickRotate(new THREE.Vector3(1,0,0), false)
      }
      
      this.fall(0.02)
      this.respawnPending = true
    }
  }

  quickRotate(axis, invertPos=true, posFrames=10, rotFrames=25) {
    // push position change
    let x = (invertPos ? -1 : 1) * axis.z
    let z = (invertPos ? -1 : 1) * axis.x
    this.animations.push([() => {
      this.position.x += .5*x / posFrames
      this.position.z += .5*z / posFrames
    }, posFrames])

    // push rot change
    let rotVel = (Math.PI / 2) / rotFrames
    this.animations.push([() => {
      this.rotateOnWorldAxis(axis, rotVel)
    }, rotFrames])
  }

  getGridPosition() {
    let x = this.position.x
    let z = this.position.z
    let orientation = this.getOrientation()

    if(orientation === 'UPRIGHT')
      return [x,z]
    if(orientation === 'UP-DOWN')
      return [[x-.5,z],[x+.5,z]]
    if(orientation === 'LEFT-RIGHT')
      return [[x,z-.5],[x,z+.5]]
  }

  // Rounds the position to the nearest .5
  roundPosition() {
    this.position.x = Math.round(this.position.x*2)/2
    this.position.z = Math.round(this.position.z*2)/2
  }
}

const toInt = (num) => ~~num

export default RectangularPrismPlayer