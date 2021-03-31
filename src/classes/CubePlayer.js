import * as THREE from 'three'

class CubePlayer extends THREE.Mesh {
    constructor(x, z, y=1, scale=[.9,.9,.9], color='red') {
        let cubeGeometry = new THREE.BoxGeometry(scale[0], scale[1], scale[2]);
        let cubeMaterial = new THREE.MeshPhongMaterial();
        cubeMaterial.color = new THREE.Color(color);
        cubeMaterial.blending = THREE.NoBlending;
        super(cubeGeometry, cubeMaterial);
        
        this.name = 'player';
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;

        this.spawnPos = this.position.clone();

        this.gravity = 0.025;
        this.fallVelocity = 0;
        
        this.isReadyToMove = true;
        this.isFalling = false;
        this.completedLevel = false;

        this.respawnPending = false;
        this.completionPending = false;
        
        this.animations = [];
        this.framesLeftOfAnimation = 0;
    };

    setController(controller) {
        this.controller = controller;
        this.controller.moveCallback = (dir) => {
            this.move(dir);
        };
    };

    move(direction, framesPerRoll=10) {
        let rotVel = (Math.PI/2) / framesPerRoll;

        if(this.isReadyToMove == true) {
            if (direction == 'up') {
                this.animations.push([() => {
                    this.position.x += 1/framesPerRoll;
                    this.rotation.z -= rotVel;
                }, framesPerRoll]);
            } else if (direction == 'down') {
                this.animations.push([() => {
                    this.position.x -= 1/framesPerRoll;
                    this.rotation.z += rotVel;
                }, framesPerRoll]);
            } else if (direction == 'left') {
                this.animations.push([() => {
                    this.position.z -= 1/framesPerRoll;
                    this.rotation.x -= rotVel
                }, framesPerRoll]);
            } else if (direction == 'right') {
                this.animations.push([() => {
                    this.position.z += 1/framesPerRoll;
                    this.rotation.x += rotVel;
                }, framesPerRoll]);
            }

            this.playSound = true;
            this.isReadyToMove = false;
        }
    };

    animate(floor) {
        for (let i = 0; i < this.animations.length; i++) {
            if (this.animations[i][1] > 0) {
                this.animations[i][0].bind(this)();
                this.animations[i][1]--;
            }
        }
        this.removeCompletedAnimations();        
        
        if (this.animations.length == 0) {
            if (this.completionPending) {
                this.complete()
            } else {
                this.getNextAction();
                this.checkFloor(floor);
            }
        }
        this.playSound = false;
    };

    removeCompletedAnimations() {
        let newAnimations = [];
        for (let i = 0; i < this.animations.length; i++) {
            if (this.animations[i][1] > 0)
                newAnimations.push(this.animations[i]);
        }
        this.animations = newAnimations;
    };

    getNextAction() {
        if (this.respawnPending) {
            this.respawnPending = false;
            this.respawn();
        } else {
            this.rotation.set(0,0,0);
            this.position.round();
            this.isReadyToMove = true;
        }
    };

    checkFloor(floor) {        
        if (!floor.hasBlockInLocation(this.position.x, this.position.z)) { // fall
            this.isFalling = true;
            
            this.animations.push([() => {
                this.position.y -= this.fallVelocity;
                this.fallVelocity += this.gravity;
            }, 50]);

            // complete level
            if (floor.hasGoalInLocation(this.position.x, this.position.z)) {
                this.beginCompletion()
                floor.completeLevel();
            // respawn once animation is finished
            } else {
                this.respawnPending = true;
            }
        }
    };

    respawn() {
        this.fallVelocity = 0;
        this.position.copy(this.spawnPos);
    };

    beginCompletion() {
        this.completionPending = true

        // Add completion animations
        // let totalFrames = 10;
        // let rotVel = (Math.PI/4) / totalFrames;
        // this.animations.push([() => {
        //     this.rotation.y -= rotVel;
        // }, totalFrames]);
        // this.animations.push([() => {
        //   this.scale.x *= 1.1
        //   this.scale.y *= 1.1
        //   this.scale.z *= 1.1
        // }, 5*totalFrames]);
    }

    complete() {
        this.position.x = 9999999
        this.position.y = 9999999
        this.position.z = 9999999
        this.completedLevel = true
    }
}

export default CubePlayer