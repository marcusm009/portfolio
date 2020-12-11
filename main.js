// global variables
let renderer;
let scene;
let camera;

let control;

function init() {

    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera();

    camera.left = window.innerWidth / -2;
    camera.right = window.innerWidth / 2;
    camera.top = window.innerHeight / 2;
    camera.bottom = window.innerHeight / -2;
    camera.near = 0.1;
    camera.far = 1500;

    camera.updateProjectionMatrix();

    // create a render, sets the background color and the size
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // position and point the camera to the center of the scene
    camera.position.x = -500;
    camera.position.y = 200;
    camera.position.z = 300;
    camera.lookAt(scene.position);

    let dirLight = new THREE.DirectionalLight();
    scene.add(dirLight);
    dirLight.position.set(-500, 200, 300);

    // add the output of the renderer to the html element
    document.body.appendChild(renderer.domElement);

    control = new function () {
        this.left = camera.left;
        this.right = camera.right;
        this.top = camera.top;
        this.bottom = camera.bottom;
        this.far = camera.far;
        this.near = camera.near;

        this.updateCamera = function () {
            camera.left = control.left;
            camera.right = control.right;
            camera.top = control.top;
            camera.bottom = control.bottom;
            camera.far = control.far;
            camera.near = control.near;

            camera.updateProjectionMatrix();
        };
    };

    addControls(control);

    // add ground
    for (let x = 0; x < 15; x++) {
        for (let z = 0; z < 15; z++) {
            let floorBlock = new FloorBlock(x, z);
            scene.add(floorBlock);
        }
    }

    // add player
    let player = new Player(7,7);
    scene.add(player);

    // main animation loop
    let frame = 0;
    const animate = () => {
        renderer.render(scene, camera);

        player.animate();

        frame += 1;
        requestAnimationFrame(animate);
    }

    // call the animate function
    animate();
}

function addControls(controlObject) {
    let gui = new dat.GUI();
    gui.add(controlObject, 'left', -1000, 0).onChange(controlObject.updateCamera);
    gui.add(controlObject, 'right', 0, 1000).onChange(controlObject.updateCamera);
    gui.add(controlObject, 'top', 0, 1000).onChange(controlObject.updateCamera);
    gui.add(controlObject, 'bottom', -1000, 0).onChange(controlObject.updateCamera);
    gui.add(controlObject, 'far', 100, 2000).onChange(controlObject.updateCamera);
    gui.add(controlObject, 'near', 0, 200).onChange(controlObject.updateCamera);
}

class FloorBlock extends THREE.Mesh {
    constructor(x, z) {
        let cubeGeometry = new THREE.BoxGeometry(50, 50, 50);
        let cubeMaterial = new THREE.MeshLambertMaterial();
        cubeMaterial.color = new THREE.Color(0xffffff * Math.random())
        cubeMaterial.transparent = true;
        super(cubeGeometry, cubeMaterial);
        this.name = 'floor';
        this.position.x = 60 * x - 450;
        this.position.y = 0;
        this.position.z = 60 * z - 450;
    }
}

class Player extends FloorBlock {
    constructor(x, z) {
        super(x, z);
        this.name = 'player';
        this.position.y += 60;
        this.speed = 60;
        
        this.keyHeldDown = false;
        this.isReadyToMove = true;
        
        this.animationFn = null;
        this.framesLeftOfAnimation = 0;
        
        document.addEventListener('keydown', this.move.bind(this), false);
        document.addEventListener('keyup', this.keyUp.bind(this), false);
    }

    move(event) {
        let keyCode = event.which;
        // let rotVel = 50;
        let rotVel = 0.1 * (Math.PI/2);
        let totAnimationFrames = (Math.PI/2) / rotVel;
        
        if (this.isReadyToMove == true) {
            // up
            if (keyCode == 87 || keyCode == 38) {
                this.position.x += this.speed;
                this.setAnimation(() => {
                        this.rotation.z -= rotVel;
                    }, totAnimationFrames);
            // down
            } else if (keyCode == 83 || keyCode == 40) {
                this.position.x -= this.speed;
                this.setAnimation(() => {
                    this.rotation.z += rotVel;
                }, totAnimationFrames);
            // left
            } else if (keyCode == 65 || keyCode == 37) {
                this.position.z -= this.speed;
                this.setAnimation(() => {
                    this.rotation.x -= rotVel;
                }, totAnimationFrames);
            // right
            } else if (keyCode == 68 || keyCode == 39) {
                this.position.z += this.speed;
                this.setAnimation(() => {
                    this.rotation.x += rotVel;
                }, totAnimationFrames);
            }
        }
        this.keyHeldDown = true;
        this.isReadyToMove = false;
    };

    keyUp() {
        this.keyHeldDown = false;
    };

    checkReadyToMove() {
        if (this.keyHeldDown == false && this.framesLeftOfAnimation == 0) {
            this.rotation.x = 0;
            this.rotation.z = 0;
            this.isReadyToMove = true;
        }
    };

    setAnimation(animationFn, totalAnimationFrames) {
        this.animationFn = animationFn;
        this.framesLeftOfAnimation = totalAnimationFrames;
    };

    animate() {
        if (this.framesLeftOfAnimation != 0) {
            this.animationFn.bind(this)();
            this.framesLeftOfAnimation -= 1;
        }
        this.checkReadyToMove();
    };
}

window.onload = init;