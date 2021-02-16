class FloorBlock extends THREE.Mesh {
    constructor(x, z, scale, color, multiplier=1) {
        let cubeGeometry = new THREE.BoxGeometry(scale, scale, scale);
        let cubeMaterial = new THREE.MeshPhongMaterial();
        cubeMaterial.color = new THREE.Color(color);
        cubeMaterial.blending = THREE.NoBlending;
        // cubeMaterial.wireframe = true;
        super(cubeGeometry, cubeMaterial);
        this.name = 'floor';
        this.multiplier = multiplier;
        this.position.x = multiplier * x;
        this.position.y = multiplier;
        this.position.z = multiplier * z;

        // this.position.y = z;
        // this.position.z = multiplier;
    }

    getPosition() {
        return [
            (this.position.x) / this.multiplier,
            (this.position.z) / this.multiplier
        ]
    }
}