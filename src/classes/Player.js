import * as THREE from 'three'

class Player extends THREE.Mesh {
  constructor(x, z, y = 1, scale = [.9, .9, .9], color = 'red') {
    let cubeGeometry = new THREE.BoxGeometry(scale[0], scale[1], scale[2])
    // let cubeMaterial = new THREE.MeshPhongMaterial({map: texture})
    // cubeMaterial.color = new THREE.Color(color)
    // cubeMaterial.blending = THREE.NoBlending
    
    let materials = []
    for(let i = 0; i < 6; i++) {
      materials.push(
        new THREE.MeshBasicMaterial({
          map: new THREE.TextureLoader().load(`textures/${i+1}.png`),
          side: THREE.DoubleSide
        })
      )
    }

    let cubeMaterial = new THREE.MeshFaceMaterial(materials)
    super(cubeGeometry, materials)

    this.name = 'player'
    this.position.x = x
    this.position.y = y
    this.position.z = z

    this.size = scale

    this.spawnPos = this.position.clone()

    this.fallVelocity = 0

    this.isReadyToMove = true
    this.isFalling = false
    this.completedLevel = false

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

    if (this.isReadyToMove == true) {
      if (direction == 'u') {
        this.animations.push([() => {
          this.position.x += 1 / framesPerRoll
          this.rotation.z -= rotVel
        }, framesPerRoll])
      } else if (direction == 'd') {
        this.animations.push([() => {
          this.position.x -= 1 / framesPerRoll
          this.rotation.z += rotVel
        }, framesPerRoll])
      } else if (direction == 'l') {
        this.animations.push([() => {
          this.position.z -= 1 / framesPerRoll
          this.rotation.x -= rotVel
        }, framesPerRoll])
      } else if (direction == 'r') {
        this.animations.push([() => {
          this.position.z += 1 / framesPerRoll
          this.rotation.x += rotVel
        }, framesPerRoll])
      } else if (direction == 'resp') {
        this.respawn()
      }

      didMove = true
      this.playSound = true
      this.isReadyToMove = false
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

    if (this.animations.length == 0) {
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
      this.rotation.set(0, 0, 0)
      this.position.round()
      this.isReadyToMove = true
    }
  };

  checkFloor(floor) {
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
  };

  fall(gravity, frames = 50) {
    this.isFalling = true
    this.isReadyToMove = false

    this.animations.push([() => {
      this.position.y -= this.fallVelocity
      this.fallVelocity += gravity
    }, frames])
  }

  respawn() {
    this.fallVelocity = 0
    this.position.copy(this.spawnPos)
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
    this.completedLevel = true
  }
}

export default Player