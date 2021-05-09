import * as THREE from 'three'

class Player extends THREE.Mesh {
  constructor(x, z, y = 1, scale = [.9, .9, .9], color = 'red') {
    let cubeGeometry = new THREE.BoxGeometry(scale[0], scale[1], scale[2])
    let cubeMaterial = new THREE.MeshPhongMaterial()
    // let cubeMaterial = new THREE.MeshPhongMaterial({map: texture})
    cubeMaterial.color = new THREE.Color(color)
    cubeMaterial.blending = THREE.NoBlending
    super(cubeGeometry, cubeMaterial)
    
    // let materials = []
    // for(let i = 0; i < 6; i++) {
    //   materials.push(
    //     new THREE.MeshBasicMaterial({
    //       map: new THREE.TextureLoader().load(`textures/player/${(i === 2 || i === 3) ? '1' : '2'}.png`),
    //       side: THREE.DoubleSide
    //     })
    //   )
    // }

    // let cubeMaterial = new THREE.MeshFaceMaterial(materials)
    // super(cubeGeometry, materials)

    this.name = 'player'
    this.position.x = x
    this.position.y = y
    this.position.z = z

    this.size = scale

    this.spawnPos = this.position.clone()
    this.spawnScale = this.scale.clone()

    this.fallVelocity = 0

    this.isReadyToMove = true
    this.isFalling = false
    this.completedLevel = false

    this.lastDirection = 'resp'
    this.lastRotation = new THREE.Vector3(0,0,0)

    this.respawnPending = false
    this.completionPending = false

    this.animations = []
    this.framesLeftOfAnimation = 0;
  };

  setController(controller) {
    this.controller = controller;
    this.controller.moveCallback = (dir) => {
      return this.move(dir);
    };
  };

  move(direction, framesPerRoll = 10) {
    let rotVel = (Math.PI / 2) / framesPerRoll
    let didMove = false

    if (this.isReadyToMove === true) {
      if (direction === 'u') {
        this.animations.push([() => {
          this.position.x += 1 / framesPerRoll
          this.rotateOnWorldAxis(new THREE.Vector3(0,0,1),-rotVel)
        }, framesPerRoll])
      } else if (direction === 'd') {
        this.animations.push([() => {
          this.position.x -= 1 / framesPerRoll
          this.rotateOnWorldAxis(new THREE.Vector3(0,0,1), rotVel)
        }, framesPerRoll])
      } else if (direction === 'l') {
        this.animations.push([() => {
          this.position.z -= 1 / framesPerRoll
          this.rotateOnWorldAxis(new THREE.Vector3(1,0,0), -rotVel)
        }, framesPerRoll])
      } else if (direction === 'r') {
        this.animations.push([() => {
          this.position.z += 1 / framesPerRoll
          this.rotateOnWorldAxis(new THREE.Vector3(1,0,0), rotVel)
        }, framesPerRoll])
      } else if (direction === 'resp') {
        this.respawn()
      }

      didMove = true
      this.playSound = true
      this.isReadyToMove = false
      this.lastDirection = direction
    }

    return didMove
  }

  animate(floor) {
    /* Animations structure:
       [
         [
           fn: animation,
           int: tot_animation_frames,
           int (optional): delay_in_frames_before_starting
          ],
         [...],
         ...animations
       ]
    */

    for (let i = 0; i < this.animations.length; i++) {
      if (this.animations[i][1] > 0) {
        if (this.animations[i].length < 3 || this.animations[i][2] <= 0)
          this.animations[i][0].bind(this)()
        this.animations[i][1]--  // Decrement frames
        if (this.animations[i].length >= 3) {
          this.animations[i][2]--  // Decrement delay (if specified)
        }
      }
    }
    this.removeCompletedAnimations();

    if (this.animations.length === 0) {
      if (this.completionPending) {
        this.complete()
      } else {
        this.getNextAction()
        this.checkFloor(floor)
      }
    }
    this.playSound = false;
  };

  removeCompletedAnimations() {
    let newAnimations = [];
    for (let i = 0; i < this.animations.length; i++) {
      if (this.animations[i][1] > 0)
        newAnimations.push(this.animations[i])
    }
    this.animations = newAnimations
  };

  getNextAction() {
    if (this.respawnPending) {
      this.respawnPending = false
      this.respawn()
    } else {
      this.roundPosition()
      this.roundQuaternion()
      this.isReadyToMove = true
    }
  }

  checkFloor(floor) {
    let pos = this.getGridPosition()
    // fall
    if (!floor.hasBlockInLocation(pos)) {
      this.fall(0.02)
      this.respawnPending = true
    }
    // complete level
    else if (floor.hasGoalInLocation(pos)) {
      this.fall(0.005, 100)
      this.beginCompletion()
      floor.completeLevel()
    }
  }

  fall(gravity, frames = 50) {
    this.isFalling = true
    this.isReadyToMove = false

    this.animations.push([() => {
      this.position.y -= this.fallVelocity
      this.fallVelocity += gravity
    }, frames])
  }

  getGridPosition() {
    return [this.position.x, this.position.z]
  }

  roundPosition() {
    this.position.round()
  }

  roundQuaternion() {
    let x, y, z, w
    if(this.quaternion._x !== undefined && 
       this.quaternion._y !== undefined &&
       this.quaternion._z !== undefined && 
       this.quaternion._w !== undefined) {
      x = roundQuaternionComponent(this.quaternion._x)
      y = roundQuaternionComponent(this.quaternion._y)
      z = roundQuaternionComponent(this.quaternion._z)
      w = roundQuaternionComponent(this.quaternion._w)
      let q = new THREE.Quaternion(x,y,z,w)
      this.setRotationFromQuaternion(q)
    }
  }

  respawn() {
    this.fallVelocity = 0
    this.animations = []
    this.position.copy(this.spawnPos)
    this.scale.copy(this.spawnScale)
    this.setRotationFromQuaternion(new THREE.Quaternion(0,0,0,1))
  }

  beginCompletion() {
    this.completionPending = true

    // Add completion animations
    let framesPerAnimation = 25
    let rotVel = (Math.PI / 4) / framesPerAnimation
    let delay = framesPerAnimation

    this.animations.push([() => {
      this.rotation.y -= rotVel
    }, framesPerAnimation])
    this.animations.push([() => {
      this.scale.x *= 1.1
      this.scale.y *= 1.1
      this.scale.z *= 1.1
    }, 3 * framesPerAnimation, delay])
  }

  complete() {
    this.position.x = 9999999
    this.position.y = 9999999
    this.position.z = 9999999
    this.completionPending = false
    this.completedLevel = true
    console.log('completion called')
  }
}

const roundQuaternionComponent = (q) => {
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

export default Player