class Screen extends THREE.Mesh {
    constructor(scene) {
        let material = new THREE.MeshBasicMaterial({wireframe: false});
        material.color.set('black')
        material.opacity   = 0;
        material.blending  = THREE.NoBlending;
        let geometry = new THREE.PlaneGeometry(900, 500, 32, 32);
        super(geometry, material);
        this.position.x = 450;
        this.position.y = 225;
        this.position.z = -50;
        this.rotation.y = -Math.PI/2;

        this.scene = scene;

        this.powerOn();
    }

    powerOn() {
        let element = document.createElement('iframe');
        // element.src = [ 'https://www.youtube.com/embed/xBOqwRRj82A', '?rel=0' ].join( '' );
        element.src = 'screen/main.html';
        element.style.width = '900px';
        element.style.height = '500px';

        this.image = new THREE.CSS3DObject(element);
        this.image.position.copy(this.position);
        this.image.rotation.copy(this.rotation);

    };

    addToScene(scene) {
        scene.add(this.image);
        scene.add(this);
    };
}