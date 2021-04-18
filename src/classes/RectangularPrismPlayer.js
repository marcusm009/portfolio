import * as THREE from 'three'
import Player from './Player'

const UPRIGHT_QUATERNION = new THREE.Quaternion(0,0,0,1)

const ROTATIONS = {

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
      
      let deltaGrid = (this.isUpright === true ? 1.5 : 1) / framesPerRoll
      let deltaY = (this.isUpright === true ? -1 : 1) * .25 * this.size[1] / framesPerRoll

      let slerpFactor = (this.isUpright === true) ? 1 : .5

      let quaternion = new THREE.Quaternion()

      if(direction === 'u') {
        this.animations.push([() => {
          // let correctAxis = 
          this.position.x += deltaGrid
          // correctAxis.applyQuaternion(this.quaternion)
          this.rotateOnWorldAxis(new THREE.Vector3(0,0,1),-Math.PI/2/framesPerRoll)
          }, framesPerRoll])
          // this.translateOnAxis(
          //   new THREE.Vector3(0,1,0).applyQuaternion(this.quaternion),
          //   deltaGrid/framesPerRoll)
      }
      if(direction === 'd') {
        this.animations.push([() => {
          this.position.x -= deltaGrid
          this.applyQuaternion(
            quaternion.setFromEuler(new THREE.Euler(0,0,Math.PI/2/framesPerRoll,'XYZ')))
          }, framesPerRoll])
      }
      if(direction === 'r') {
        this.animations.push([() => {
          this.position.z += deltaGrid
          this.applyQuaternion(
            quaternion.setFromEuler(new THREE.Euler(Math.PI/2/framesPerRoll,0,0,'XYZ')))
          }, framesPerRoll])
      }
      if(direction === 'l') {
        this.animations.push([() => {
            this.position.z -= deltaGrid
            this.applyQuaternion(
              quaternion.setFromEuler(new THREE.Euler(-Math.PI/2/framesPerRoll,0,0,'XYZ')))
            }, framesPerRoll])
      }

      console.log(this.getWorldDirection())

      // if(direction === 'u') {
      //   this.animations.push([() => {
      //     this.position.x += deltaGrid
      //     this.applyQuaternion(
      //       new THREE.Quaternion(0,0,-Math.sqrt(2)/2,Math.sqrt(2)/2))
      //     }, framesPerRoll])
      // }

      // if(direction === 'd') {
      //   this.animations.push([() => {
      //     this.position.x -= deltaGrid
      //     this.applyQuaternion(
      //       new THREE.Quaternion(0,0,Math.sqrt(2)/2,Math.sqrt(2)/2))
      //     }, framesPerRoll])
      // }

      // if(direction === 'r') {
      //   if(this.isUpright) {
      //     this.animations.push([() => {
      //       this.quaternion.slerp(
      //         new THREE.Quaternion(Math.sqrt(2)/2,0,0,Math.sqrt(2)/2),
      //         slerpFactor/framesPerRoll)
      //       }, framesPerRoll])
      //     }
      // }

      // if(direction === 'l') {
      //   this.animations.push([() => {
      //       // this.position.z += deltaGrid
      //       this.quaternion.slerp(
      //         new THREE.Quaternion(-Math.sqrt(2)/2,0,0,Math.sqrt(2)/2),
      //         slerpFactor/framesPerRoll)
      //     }, framesPerRoll])
      // }

      this.isUpright = false

      // if (direction === 'u') {
      //   this.animations.push([() => {
      //     this.position.x += deltaGrid
      //     this.position.y += deltaY
      //     this.rotation.z -= rotVel
      //   }, framesPerRoll])
      //   this.isUpright = !this.isUpright
      // } else if (direction === 'd') {
      //   this.animations.push([() => {
      //     this.position.x -= deltaGrid
      //     this.position.y += deltaY
      //     this.setRotationFromEuler(new THREE.Euler(0,0,Math.PI/2,'XYZ'))
      //     // this.rotation.z += rotVel
      //   }, framesPerRoll])
      //   this.isUpright = !this.isUpright
      // } else if (direction === 'l') {
      //   this.animations.push([() => {
      //     this.position.z -= deltaGrid
      //     this.position.y += deltaY
      //     this.rotation.x -= rotVel
      //   }, framesPerRoll])
      //   this.isUpright = !this.isUpright
      // } else if (direction === 'r') {
      //   this.animations.push([() => {
      //     this.position.z += deltaGrid
      //     this.position.y += deltaY
      //     this.rotation.x += rotVel
      //   }, framesPerRoll])
      //   this.isUpright = !this.isUpright
      // } else if (direction === 'resp') {
      //   this.respawn()
      //   this.isUpright = true
      // }

      didMove = true
      this.playSound = true
      this.isReadyToMove = false
    }

    return didMove
  }

  // updateOrientation()

  getRotationAxis(dir) {
    let newGridPos
    if (dir === 'u') {
      newGridPos = this.gridPos.map((pos) => {
        pos.x += 1
      })
    }
  }

  // Change to something better
  getNextAction() {
    let prevY = this.position.y
    if (this.respawnPending) {
      this.respawnPending = false
      this.respawn()
    } else {
      if(this.quaternion.equals(UPRIGHT_QUATERNION)) {
        this.isUpright = true
      }
      // this.rotation.set(0,0,0);
      // this.position.round()
      // this.position.y = prevY
      this.isReadyToMove = true
    }
  };
}

export default RectangularPrismPlayer