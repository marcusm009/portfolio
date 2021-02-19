class FloorBlock extends THREE.Mesh {
    constructor(x, y, z, scale, color, multiplier=1) {
        let cubeGeometry = new THREE.BoxGeometry(scale, scale, scale);
        let cubeMaterial = new THREE.MeshPhongMaterial();
        cubeMaterial.color = new THREE.Color(color);
        cubeMaterial.blending = THREE.NoBlending;
        // cubeMaterial.wireframe = true;
        super(cubeGeometry, cubeMaterial);
        this.name = 'floor';
        this.multiplier = multiplier;
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;

    }

    getPosition() {
        return [
            (this.position.x) / this.multiplier,
            (this.position.z) / this.multiplier
        ]
    }
}