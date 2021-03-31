import * as THREE from 'three'
import CubePlayer from './CubePlayer'

class RectangularPrismPlayer extends CubePlayer {
    constructor(x, z, y=1, scale=[.9,1.8,.9], color='blue') {
        super(x, z, y+.25*scale[1], scale, color);
    }

    // Change to something better
    getNextAction() {
        let prevY = this.position.y;
        if (this.respawnPending) {
            this.respawnPending = false;
            this.respawn();
        } else {
            // this.rotation.set(0,0,0);
            this.position.round();
            this.position.y = prevY;
            this.isReadyToMove = true;
        }
    };
}

export default RectangularPrismPlayer