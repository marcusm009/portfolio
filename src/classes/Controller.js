import * as THREE from 'three'

class Controller {
    constructor(document, isEnabled) {

        this.moveCallback = (dir) => {console.log('Move callback never assigned');};
        
        // keyboard event listeners
        document.addEventListener('keydown', this.handleKeyDown.bind(this), false);

        // touch event listeners
        document.addEventListener('touchstart', this.handleTouchStart.bind(this), false);        
        document.addEventListener('touchmove', this.handleTouchMove.bind(this), false);

        // touch control variables
        this.xDown = null;                                                        
        this.yDown = null;

        this.isEnabled = isEnabled
    }

    handleKeyDown(event) {
        if (!this.isEnabled)
          return
        
        let keyCode = event.which;
        if (keyCode == 87 || keyCode == 38) {
            this.moveCallback('up');
        } else if (keyCode == 83 || keyCode == 40) {
            this.moveCallback('down');
        } else if (keyCode == 65 || keyCode == 37) {
            this.moveCallback('left');
        } else if (keyCode == 68 || keyCode == 39) {
            this.moveCallback('right');
        } else {
            console.log('Key pressed: ' + keyCode);
        }
    };

    getTouches(event) {
        return event.touches || event.originalEvent.touches;
    };

    handleTouchStart(event) {
        const firstTouch = this.getTouches(event)[0];                                      
        this.xDown = firstTouch.clientX;                                      
        this.yDown = firstTouch.clientY;                                      
    };

    handleTouchMove(event) {
        if (!this.isEnabled || !this.xDown || !this.yDown)
            return

        let xUp = event.touches[0].clientX;                                    
        let yUp = event.touches[0].clientY;

        let xDiff = this.xDown - xUp;
        let yDiff = this.yDown - yUp;
        
        if (xDiff != 0 && yDiff != 0) {
            let angle = Math.atan2(yDiff,xDiff);
            if (0 <= angle && angle < Math.PI/2) {
                this.moveCallback('left');
            } else if (Math.PI/2 <= angle && angle <= Math.PI) {
                this.moveCallback('up');
            } else if (-Math.PI <= angle && angle < -Math.PI/2) {
                this.moveCallback('right');
            } else if (-Math.PI/2 <= angle && angle < 0) {
                this.moveCallback('down');
            } else {
                console.log(`This should not happen - touch input angle: ${angle}`);
            }
        }

        this.xDown = null;
        this.yDown = null;                                             
    };
}

export default Controller