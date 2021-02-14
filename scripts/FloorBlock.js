class FloorBlock extends THREE.Mesh {
    constructor(x, z, color, multiplier=60) {
        let cubeGeometry = new THREE.BoxGeometry(50, 50, 50);
        let cubeMaterial = new THREE.MeshPhongMaterial();
        cubeMaterial.color = new THREE.Color(color);
        cubeMaterial.blending = THREE.NoBlending;
        // cubeMaterial.wireframe = true;
        super(cubeGeometry, cubeMaterial);
        this.name = 'floor';
        this.multiplier = multiplier;
        this.position.x = multiplier * x - 450;
        this.position.y = -50;
        this.position.z = multiplier * z - 450;
    }

    getPosition() {
        return [
            (this.position.x + 450) / this.multiplier,
            (this.position.z + 450) / this.multiplier
        ]
    }
}