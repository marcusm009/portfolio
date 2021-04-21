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
      
      console.log(orientation)

      if((orientation === 'UPRIGHT') ||
         (orientation === 'UPDOWN' && (direction === 'u' || direction === 'd')) ||
         (orientation === 'LEFTRIGHT' && (direction === 'l' || direction === 'r'))) {
          
        deltaGrid *= 1.5
        deltaY = (orientation === 'UPRIGHT' ? -1 : 1) * .25 * this.size[1] / framesPerRoll
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

      didMove = true
      this.playSound = true
      this.isReadyToMove = false
    }

    return didMove
  }

  getOrientation() {
    let x = this.position.x
    let z = this.position.z

    if(x === toInt(x) && z === toInt(z))
      return 'UPRIGHT'
    if(x === toInt(x))
      return 'LEFTRIGHT'
    if(z === toInt(z))
      return 'UPDOWN'

    console.log('x: ', x)
    console.log('z: ', z)
  }

  // getOrientation() {
  //   for (const [orientation, quaternions] of Object.entries(ORIENTATION)) {
  //     for(const q of quaternions) {
  //       if(this.quaternion.equals(q))
  //         return orientation
  //     }
  //   }
  //   return 'LEFTRIGHT'
  // }

  // getNextAction() {
  //   let prevY = this.position.y
  //   if (this.respawnPending) {
  //     this.respawnPending = false
  //     this.respawn()
  //   } else {
  //     this.roundQuaternion()
  //     this.isReadyToMove = true
  //   }
  // }

  checkFloor(floor) {
    let x = this.position.x
    let z = this.position.z

    if(x !== toInt(x) || z !== toInt(z)) {
      console.log('not upright')
    }
    
    if (!floor.hasBlockInLocation(this.position.x, this.position.z)) { // fall

      // complete level
      if (floor.hasGoalInLocation(this.position.x, this.position.z)) {
        this.fall(0.005, 100)
        this.beginCompletion()
        floor.completeLevel()
        // respawn once animation is finished
      } else {
        this.fall(0.02)
        this.respawnPending = true
      }
    }
  }

  // getBothPositions() {

  // }

  // Rounds the position to the nearest .5
  roundPosition() {
    this.position.x = Math.round(this.position.x*2)/2
    this.position.z = Math.round(this.position.z*2)/2
  }
}

const toInt = (num) => ~~num

export default RectangularPrismPlayer