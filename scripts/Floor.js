class Floor {
    constructor(position, dimensions, rotationAxis, scale, rotation, color=0xffffff, holes = []) {
        this.blocks = [];

        this.position = position;
        this.dimensions = dimensions;
        this.rotationAxis = rotationAxis;
        
        this.scale = scale;
        this.rotation = rotation;

        this.color = color;
        this.holes = holes;

        this.addFloor();
    }

    addFloor() {
        this.start = this.dimensions.clone().addScalar(-1).divideScalar(-2);
        this.end = this.start.clone().multiplyScalar(-1);

        for (let x = this.start.x; x <= this.end.x; x++) {
            for (let y = this.start.y; y <= this.end.y; y++) {
                let isHole = false;
                for (let hole of this.holes) {
                    if (x == hole[0] && y == hole[1]) {
                        isHole = true;
                        break;
                    }
                }
                if (!isHole) {
                    this.blocks.push(new FloorBlock(x, y, this.scale, this.color));
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