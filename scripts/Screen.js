class Screen extends THREE.Mesh {
    constructor(position, dimensions, quaternion=new THREE.Quaternion(0,0,0,1), color='white') {
        let material = new THREE.MeshBasicMaterial({wireframe: false});
        material.color.set(color)
        material.opacity   = 0;
        material.blending  = THREE.NoBlending;
        
        let geometry = new THREE.PlaneGeometry(dimensions.x, dimensions.y, 1, 1);
        super(geometry, material);
        
        this.position.copy(position);
        this.image = null;

        this.applyQuaternion(quaternion);
        this.quaternion.normalize();

        this.dimensions = dimensions;

        this.powerOn();
    }

    powerOn() {
        let element = document.createElement('iframe');
        // element.src = [ 'https://www.youtube.com/embed/xBOqwRRj82A', '?rel=0' ].join( '' );
        element.src = 'screen/main.html';
        element.style.width = this.dimensions.x * 100 + 'px';
        element.style.height = this.dimensions.y * 100 + 'px';

        this.image = new THREE.CSS3DObject(element);
        this.image.position.copy(this.position);
        this.image.rotation.copy(this.rotation);

        this.image.scale.set(.01,.01,.01);

        // this.image.scale.copy(this.scale.multiplyScalar(.01));

    };

    addToScene(scene) {
        if(this.image != null) {
            scene.add(this.image);
        }
        scene.add(this);
    };
}