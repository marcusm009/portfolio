import * as THREE from 'three'

class Camera extends THREE.OrthographicCamera {
    constructor(position, focalPoint, aspect, frustumSize=10) {
        super()
        
        this.spawnPos = position.clone()
        this.focalPoint = focalPoint.clone()
        this.aspect = aspect
        this.frustumSize = frustumSize
        
        this.position.set(-1,1,1)
        this.lookAt(this.focalPoint);

        this.near = -300;
        this.far = 1500;

        this.update()
    }

    update() {
      this.left = this.frustumSize * this.aspect / - 2
      this.right = this.frustumSize * this.aspect / 2
      this.top = this.frustumSize / 2
      this.bottom = this.frustumSize / - 2
      
      this.updateProjectionMatrix();
    }

    // constructor(mount, scene, zoom=250) {
    //   super()
    //   this.left = mount.offsetWidth / -zoom;
    //   this.right = mount.offsetWidth / zoom;
    //   this.top = mount.offsetHeight / zoom;
    //   this.bottom = mount.offsetHeight / -zoom;

    //   this.near = -300;
    //   this.far = 1500;
    //   this.focalPoint = scene.position.clone()
      
    //   this.updateProjectionMatrix();

    //   this.position.set(-1, 1, 1);

    //   this.spawnPos = this.position.clone();

    //   this.lookAt(this.focalPoint);
    // }

    follow(player, maxSpeed=Number.MAX_SAFE_INTEGER) {
        let xDiff = player.position.x - this.position.x;
        let zDiff = player.position.z - this.position.z;

        if (player.completionPending || player.completedLevel) {
            let origYDiff = player.spawnPos.y - this.spawnPos.y
            let newYDiff = player.position.y - this.position.y

            let deltaY = newYDiff - origYDiff

            if (deltaY < 0)
              this.position.y += Math.max(deltaY, -999999);  
            else
              this.position.y += Math.min(deltaY, 999999);
        }


        if (xDiff < 0)
            this.position.x += Math.max(xDiff, -maxSpeed);  
        else
            this.position.x += Math.min(xDiff, maxSpeed);

        if (zDiff < 0)
            this.position.z += Math.max(zDiff, -maxSpeed);
        else
            this.position.z += Math.min(zDiff, maxSpeed);
    };
}

export default Camera