class FloorBlock extends THREE.Mesh {
    constructor(x, z, color) {
        let cubeGeometry = new THREE.BoxGeometry(50, 50, 50);
        let cubeMaterial = new THREE.MeshPhongMaterial();
        cubeMaterial.color = new THREE.Color(color);
        cubeMaterial.blending = THREE.NoBlending;
        // cubeMaterial.wireframe = true;
        super(cubeGeometry, cubeMaterial);
        this.name = 'floor';
        this.position.x = 60 * x - 450;
        this.position.y = -50;
        this.position.z = 60 * z - 450;
    }
}