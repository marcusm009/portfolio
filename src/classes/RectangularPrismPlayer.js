import * as THREE from 'three'
import Player from './Player'

// const UPRIGHT_QUATERNION = new THREE.Quaternion(0,0,0,1)

const ORIENTATION = {
  UPRIGHT: [
    new THREE.Quaternion(1,0,0,0),
    new THREE.Quaternion(-1,0,0,0),
    new THREE.Quaternion(0,1,0,0),
    new THREE.Quaternion(0,-1,0,0),
    new THREE.Quaternion(0,0,1,0),
    new THREE.Quaternion(0,0,-1,0),
    new THREE.Quaternion(0,0,0,1),
    new THREE.Quaternion(0,0,0,-1),
    new THREE.Quaternion(Math.sqrt(2)/2,0,Math.sqrt(2)/2,0),
    new THREE.Quaternion(Math.sqrt(2)/2,0,-Math.sqrt(2)/2,0),
    new THREE.Quaternion(-Math.sqrt(2)/2,0,Math.sqrt(2)/2,0),
    new THREE.Quaternion(-Math.sqrt(2)/2,0,-Math.sqrt(2)/2,0),
    new THREE.Quaternion(0,Math.sqrt(2)/2,0,Math.sqrt(2)/2),
    new THREE.Quaternion(0,Math.sqrt(2)/2,0,-Math.sqrt(2)/2),
    new THREE.Quaternion(0,-Math.sqrt(2)/2,0,Math.sqrt(2)/2),
    new THREE.Quaternion(0,-Math.sqrt(2)/2,0,-Math.sqrt(2)/2),
  ],
  UPDOWN: [
    new THREE.Quaternion(.5,.5,.5,-.5),
    new THREE.Quaternion(.5,-.5,.5,.5),
    new THREE.Quaternion(-.5,.5,.5,.5),
    new THREE.Quaternion(-.5,-.5,.5,-.5),
    
    new THREE.Quaternion(Math.sqrt(2)/2,Math.sqrt(2)/2,0,0),
    new THREE.Quaternion(-Math.sqrt(2)/2,Math.sqrt(2)/2,0,0),
    new THREE.Quaternion(0,0,Math.sqrt(2)/2,Math.sqrt(2)/2),
    new THREE.Quaternion(0,0,-Math.sqrt(2)/2,Math.sqrt(2)/2),

    new THREE.Quaternion(-.5,-.5,-.5,.5),
    new THREE.Quaternion(-.5,.5,-.5,-.5),
    new THREE.Quaternion(.5,-.5,-.5,-.5),
    new THREE.Quaternion(.5,.5,-.5,.5),
    
    new THREE.Quaternion(-Math.sqrt(2)/2,-Math.sqrt(2)/2,0,0),
    new THREE.Quaternion(Math.sqrt(2)/2,-Math.sqrt(2)/2,0,0),
    new THREE.Quaternion(0,0,-Math.sqrt(2)/2,-Math.sqrt(2)/2),
    new THREE.Quaternion(0,0,Math.sqrt(2)/2,-Math.sqrt(2)/2),

  ]
}

class RectangularPrismPlayer extends Player {
  constructor(x, z, y = 1, scale = [.9, 1.8, .9], color = 'blue') {
    super(x, z, y + .25 * scale[1], scale, color)
    this.isUpright = true
    this.gridPos = [{
      x: x,
      z: z
    }]
    this.orientation = 'XYZ'
  }

  move(direction, framesPerRoll = 10) {
    let rotVel = (Math.PI / 2) / framesPerRoll
    let didMove = false

    if (this.isReadyToMove === true) {
      
      let orientation = this.getOrientation()
      let deltaGrid = 1 / framesPerRoll
      let deltaY = 0
      // let deltaY = (this.isUpright === true ? -1 : 1) * .25 * this.size[1] / framesPerRoll
      
      if((orientation === 'UPRIGHT') ||
         (orientation === 'UPDOWN' && (direction === 'u' || direction === 'd')) ||
         (orientation === 'LEFTRIGHT' && (direction === 'l' || direction === 'r'))) {
          
        deltaGrid *= 1.5
        deltaY = (orientation === 'UPRIGHT' ? -1 : 1) * .25 * this.size[1] / framesPerRoll
        console.log('special')
      } else {
        console.log(orientation)
        console.log(this.quaternion)
      }
      

      if(direction === 'u') {
        this.animations.push([() => {
          this.position.x += deltaGrid
          this.position.y += deltaY
          this.rotateOnWorldAxis(new THREE.Vector3(0,0,1),-rotVel)
          }, framesPerRoll])
      }
      if(direction === 'd') {
        this.animations.push([() => {
          this.position.x -= deltaGrid
          this.position.y += deltaY
          this.rotateOnWorldAxis(new THREE.Vector3(0,0,1), rotVel)
          }, framesPerRoll])
      }
      if(direction === 'r') {
        this.animations.push([() => {
          this.position.z += deltaGrid
          this.position.y += deltaY
          this.rotateOnWorldAxis(new THREE.Vector3(1,0,0), rotVel)
          }, framesPerRoll])
      }
      if(direction === 'l') {
        this.animations.push([() => {
            this.position.z -= deltaGrid
            this.position.y += deltaY
            this.rotateOnWorldAxis(new THREE.Vector3(1,0,0), -rotVel)
            }, framesPerRoll])
      }

      // this.isUpright = false

      didMove = true
      this.playSound = true
      this.isReadyToMove = false
    }

    return didMove
  }

  getOrientation() {
    for (const [orientation, quaternions] of Object.entries(ORIENTATION)) {
      for(const q of quaternions) {
        if(this.quaternion.equals(q))
          return orientation
      }
    }
    return 'LEFTRIGHT'
  }

  updateOrientation() {
    const orientation = this.getOrientation()
    // console.log(orientation)
    if(orientation === 'UPRIGHT') {
      this.isUpright = true
    }
  }

  // Change to something better
  getNextAction() {
    let prevY = this.position.y
    if (this.respawnPending) {
      this.respawnPending = false
      this.respawn()
    } else {
      this.roundQuaternion()
      // console.log(this.quaternion._x)
      // if (this.quaternion._x != undefined)
      this.updateOrientation()
      // this.rotation.set(0,0,0);
      // this.position.round()
      // this.position.y = prevY
      this.isReadyToMove = true
    }
  }

  roundQuaternion() {
    let x, y, z, w
    if(this.quaternion._x != undefined && 
       this.quaternion._y != undefined &&
       this.quaternion._z != undefined && 
       this.quaternion._w != undefined) {
      x = roundQuaternionComponent(this.quaternion._x)
      y = roundQuaternionComponent(this.quaternion._y)
      z = roundQuaternionComponent(this.quaternion._z)
      w = roundQuaternionComponent(this.quaternion._w)
      let q = new THREE.Quaternion(x,y,z,w)
      this.setRotationFromQuaternion(q)
    }
  }
}

function roundQuaternionComponent(q) {
  // round to 0
  if(Math.abs(q) < 1e-10)
    return 0
  // round to (+/-) .5
  if(Math.abs(q) - .5 < 1e-10) {
    if(q < 0)
      return -.5
    else
      return .5
  }
  // round to (+/-) sqrt(2) / 2
  if(Math.abs(q) - (Math.sqrt(2) / 2) < 1e-10) {
    if(q < 0)
      return -Math.sqrt(2) / 2
    else
      return Math.sqrt(2) / 2
  }
  // round to (+/-) 1
  if(Math.abs(q) - 1 < 1e-10) {
    if(q < 0)
      return -1
    else
      return 1
  }
}

export default RectangularPrismPlayer