class Controller {
    constructor(document, isEnabled, solutionPath=undefined) {

        this.moveCallback = (dir) => {console.log('Move callback never assigned');}
        
        // keyboard event listeners
        document.addEventListener('keydown', this.handleKeyDown.bind(this), false)

        // touch event listeners
        document.addEventListener('touchstart', this.handleTouchStart.bind(this), false)        
        document.addEventListener('touchmove', this.handleTouchMove.bind(this), false)

        // touch control variables
        this.xDown = null                                                     
        this.yDown = null

        // auto-solver
        this.solutionLoaded = false
        this.autoSolveTimer = null

        if(solutionPath) {
          this.loadSolution(solutionPath)
          document.addEventListener('wheel', this.handleScroll.bind(this), false);
        }

        this.lastMoveWasManual = false
        this.isEnabled = isEnabled
    }

    async loadSolution(solutionPath) {
        await fetch(solutionPath)
        .then(res => res.text())
        .then((solution) => {
            this.solution = solution
            this.solutionIdx = 0
            this.solutionLoaded = true
        });
    }

    handleScroll(event) {
        if(!this.solutionLoaded || !this.isEnabled)
            return

        if(event.deltaY === -100) {
            // scroll up: unconditionally respawn
            if(this.moveCallback('resp'))
                this.solutionIdx = 0
        } else if(event.deltaY === 100) {
            // scroll down:
            // if last move was manual, respawn; otherwise, move towards objective
            if(this.lastMoveWasManual) {
                if(this.moveCallback('resp'))
                    this.solutionIdx = 0
            } else if(this.moveCallback(this.solution[this.solutionIdx]))
                this.solutionIdx++
        }
        this.lastMoveWasManual = false
    }

    handleKeyDown(event) {
        if (!this.isEnabled)
            return
        
        let keyCode = event.which;
        if (keyCode === 87 || keyCode === 38) {
            this.moveCallback('u')
        } else if (keyCode === 83 || keyCode === 40) {
            this.moveCallback('d')
        } else if (keyCode === 65 || keyCode === 37) {
            this.moveCallback('l')
        } else if (keyCode === 68 || keyCode === 39) {
            this.moveCallback('r')
        } else if (keyCode === 13) {
            this.autoSolve(.25)
        } else {
            console.log('Key pressed: ' + keyCode);
        }
        
        if (keyCode !== 13) {
          clearTimeout(this.autoSolveTimer)  
          this.lastMoveWasManual = true
        }
    }

    getTouches(event) {
        return event.touches || event.originalEvent.touches;
    }

    handleTouchStart(event) {
        const firstTouch = this.getTouches(event)[0];                                      
        this.xDown = firstTouch.clientX;                                      
        this.yDown = firstTouch.clientY;                                      
    }

    handleTouchMove(event) {
        if (!this.isEnabled || !this.xDown || !this.yDown)
            return

        let xUp = event.touches[0].clientX;                                    
        let yUp = event.touches[0].clientY;

        let xDiff = this.xDown - xUp;
        let yDiff = this.yDown - yUp;
        
        if (xDiff !== 0 && yDiff !== 0) {
            let angle = Math.atan2(yDiff,xDiff);
            if (0 <= angle && angle < Math.PI/2) {
                this.moveCallback('l');
            } else if (Math.PI/2 <= angle && angle <= Math.PI) {
                this.moveCallback('u');
            } else if (-Math.PI <= angle && angle < -Math.PI/2) {
                this.moveCallback('r');
            } else if (-Math.PI/2 <= angle && angle < 0) {
                this.moveCallback('d');
            } else {
                console.log(`This should not happen - touch input angle: ${angle}`);
            }
        }

        this.xDown = null
        this.yDown = null

        clearTimeout(this.autoSolveTimer)
        this.lastMoveWasManual = true
    }

    autoSolve(stepTimeInSeconds) {      
        if(!this.solutionLoaded || !this.isEnabled)
            return

        if(this.solutionIdx < this.solution.length) {
            this.handleScroll({deltaY: 100})
            this.autoSolveTimer = setTimeout(() => {
                this.autoSolve(stepTimeInSeconds)
            }, stepTimeInSeconds * 1000)
        }
    }
}

export default Controller