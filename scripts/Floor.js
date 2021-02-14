class Floor {
    constructor(m, n, color=0xffffff, holes = []) {
        this.blocks = [];
        this.m = m;
        this.n = n;
        this.color = color;
        this.holes = holes;

        this.addFloor();
    }

    addFloor() {
        for (let x = 0; x < this.m; x++) {
            for (let z = 0; z < this.n; z++) {
                let isHole = false;
                for (let hole of this.holes) {
                    if (x == hole[0] && z == hole[1]) {
                        isHole = true;
                        break;
                    }
                }
                if (!isHole) {
                    this.blocks.push(new FloorBlock(x, z, this.color));
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
        if (x < 0 || x >= this.m || z < 0 || z >= this.n) {
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
}