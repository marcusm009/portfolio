class Screen extends THREE.Mesh {
    constructor(scene) {
        let material = new THREE.MeshBasicMaterial({wireframe: false});
        material.color.set('black')
        material.opacity   = 0;
        material.blending  = THREE.NoBlending;
        let geometry = new THREE.PlaneGeometry(9, 4.5, 10, 10);
        super(geometry, material);
        this.position.x = 4.5;
        this.position.y = 3.8;
        this.position.z = 0;
        this.rotation.y = -Math.PI/2;

        this.scene = scene;

        this.powerOn();
    }

    powerOn() {
        let element = document.createElement('iframe');
        // element.src = [ 'https://www.youtube.com/embed/xBOqwRRj82A', '?rel=0' ].join( '' );
        element.src = 'screen/main.html';
        element.style.width = '900px';
        element.style.height = '450px';

        this.image = new THREE.CSS3DObject(element);
        this.image.position.copy(this.position);
        this.image.rotation.copy(this.rotation);

        this.image.scale.set(.01,.01,.01);

    };

    addToScene(scene) {
        scene.add(this.image);
        scene.add(this);
    };
}