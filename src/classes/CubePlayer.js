import Player from './Player'

class CubePlayer extends Player {
    constructor(x, z, y=1, scale=[.9,.9,.9], color='red') {
        super(x, z, y, scale, color)
    }
}

export default CubePlayer