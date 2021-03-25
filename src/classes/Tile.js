import * as THREE from 'three'

class Tile extends THREE.Mesh {
    constructor(x, z, y=0, scale=.9, color=0xffffff, name='tile') {
        let cubeGeometry = new THREE.BoxGeometry(scale, .5*scale, scale);
        let cubeMaterial = new THREE.MeshPhongMaterial();
        cubeMaterial.color = new THREE.Color(color);
        cubeMaterial.blending = THREE.NoBlending;

        super(cubeGeometry, cubeMaterial);
        this.name = name;
        this.position.x = x;
        this.position.y = y+.325*scale;
        this.position.z = z;
        this.color = color;
    }

    getPosition() {
        return [this.position.x, this.position.z]
    }
}

export default Tile