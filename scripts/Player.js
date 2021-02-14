class Player extends FloorBlock {
    constructor(x, z) {
        super(x, z, 0xff0000);
        this.name = 'player';
        this.position.y += 60;
        this.speed = 60;
        
        this.keyHeldDown = false;
        this.isReadyToMove = true;
        
        this.animations = [];
        this.framesLeftOfAnimation = 0;
        
        document.addEventListener('keydown', this.move.bind(this), false);
        document.addEventListener('keyup', this.keyUp.bind(this), false);
    }

    move(event) {
        let keyCode = event.which;
        let rotVel = 0.1 * (Math.PI/2);
        let totAnimationFrames = (Math.PI/2) / rotVel;
        
        if (this.isReadyToMove == true) {
            // up
            if (keyCode == 87 || keyCode == 38) {
                this.animations.push([() => {
                    this.position.x += this.speed/totAnimationFrames;
                    this.rotation.z -= rotVel;
                }, totAnimationFrames]);
            // down
            } else if (keyCode == 83 || keyCode == 40) {
                this.animations.push([() => {
                    this.position.x -= this.speed/totAnimationFrames;
                    this.rotation.z += rotVel;
                }, totAnimationFrames]);
            // left
            } else if (keyCode == 65 || keyCode == 37) {
                this.animations.push([() => {
                    this.position.z -= this.speed/totAnimationFrames;
                    this.rotation.x -= rotVel
                }, totAnimationFrames]);
            // right
            } else if (keyCode == 68 || keyCode == 39) {
                this.animations.push([() => {
                    this.position.z += this.speed/totAnimationFrames;
                    this.rotation.x += rotVel;
                }, totAnimationFrames]);
            }
        }
        this.keyHeldDown = true;
        this.isReadyToMove = false;
    };

    keyUp() {
        this.keyHeldDown = false;
    };

    checkReadyToMove() {
        if (this.keyHeldDown == false && this.animations.length == 0) {
            this.rotation.x = 0;
            this.rotation.z = 0;
            this.isReadyToMove = true;
        }
    };

    animate() {
        for (let i = 0; i < this.animations.length; i++) {
            if (this.animations[i][1] > 0) {
                this.animations[i][0].bind(this)();
                this.animations[i][1]--;
            }
        }
        this.removeCompletedAnimations();
        this.checkReadyToMove();
    };

    removeCompletedAnimations() {
        let newAnimations = [];
        for (let i = 0; i < this.animations.length; i++) {
            if (this.animations[i][1] > 0)
                newAnimations.push(this.animations[i]);
        }
        this.animations = newAnimations;
    };
}