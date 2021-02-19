class Floor {
    constructor(position, dimensions, rotationAxis, scale, rotation, colors=[0xffffff], colorProb=[1], holes = []) {
        this.blocks = [];

        this.position = position;
        this.dimensions = dimensions;
        this.rotationAxis = rotationAxis;
        
        this.scale = scale;
        this.rotation = rotation;

        this.colors = colors;
        this.colorProb = colorProb;
        
        this.holes = holes;

        document.addEventListener('keydown', this.move.bind(this), false);

        this.addFloor();
    }

    move(event) {
        let keyCode = event.which;
        if (keyCode == 81) {
            this.rotation.x += 5;
        }
    };

    addFloor() {
        console.log(this.dimensions);
        this.start = this.dimensions.clone().addScalar(-1).divideScalar(-2);
        this.end = this.start.clone().multiplyScalar(-1);

        for (let x = this.start.x; x <= this.end.x; x++) {
            for (let z = this.start.y; z <= this.end.y; z++) {
                let isHole = false;
                for (let hole of this.holes) {
                    if (x == hole[0] && z == hole[1]) {
                        isHole = true;
                        break;
                    }
                }
                if (!isHole) {
                    let cumulativeProb = 0;
                    let color = 0xffffff;
                    
                    for (let i = 0; i < this.colorProb.length; i++) {
                        cumulativeProb += this.colorProb[i];
                        console.log(cumulativeProb);
                        if (Math.random() < cumulativeProb) {
                            color = this.colors[i];
                            break;
                        }

                    }
                    this.blocks.push(new FloorBlock(x + this.position.x, this.position.y, z + this.position.z, this.scale, color));
                }
            }
        }
    }

    addToScene(scene) {
        for (let block of this.blocks) {
            scene.add(block);
        }
    }

    hasBlockInLocation(x, z) {
        if (x < this.start.x - .1 || x > this.end.x + .1 || z < this.start.y - .1  || z > this.end.y + .1) {
            return false;
        }
        let holeFound = false;
        for (let hole of this.holes) {
            if (x == hole[0] && z == hole[1]) {
                holeFound = true;
                break;
            }
        }
        return !holeFound;
    }

    getPositions() {
        let positions = [];
        for (let block of this.blocks) {
            positions.push(block.position);
        }
        return positions;
    }
}