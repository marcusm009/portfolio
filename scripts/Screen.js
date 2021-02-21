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
        this.element = document.createElement('iframe');
        // element.src = [ 'https://www.youtube.com/embed/xBOqwRRj82A', '?rel=0' ].join( '' );
        this.element.src = 'screen/main.html';
        this.element.id = 'screen';
        this.element.style.width = this.scale.x * this.dimensions.x * 100 + 'px';
        this.element.style.height = this.scale.y * this.dimensions.y * 100 + 'px';

        this.image = new THREE.CSS3DObject(this.element);
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

    reflow() {
        console.log(this.element);
        this.element.style.width = this.scale.x * this.dimensions.x * 100 + 'px';
    };
}