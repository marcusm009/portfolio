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
    camera.top = window.innerHeight / 2 + 200;
    camera.bottom = window.innerHeight / -2 + 200;
    camera.near = -300;
    camera.far = 1500;

    camera.updateProjectionMatrix();

    // create a render, sets the background color and the size
    renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = 0;    
    renderer.domElement.style.zIndex = '1';

    // create CSS renderer
    let cssRenderer = new THREE.CSS3DRenderer();
    cssRenderer.setSize(window.innerWidth, window.innerHeight);
    cssRenderer.domElement.style.position = 'absolute';
    cssRenderer.domElement.style.top = 0;

    // position and point the camera to the center of the scene
    camera.position.x = -300;
    camera.position.y = 250;
    camera.position.z = 200;
    let focalPoint = scene.position;
    focalPoint.y += 150;
    camera.lookAt(focalPoint);

    let dirLight = new THREE.DirectionalLight();
    scene.add(dirLight);
    dirLight.position.set(-500, 200, 300);

    // add the output of the renderer to the html element
    document.body.appendChild(cssRenderer.domElement);
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
            let floorBlock = new FloorBlock(x, z, 0xffffff);
            scene.add(floorBlock);
        }
    }

    // add player
    let player = new Player(7,7);
    scene.add(player);

    // add screen
    let screen = new Screen(scene);
    // screen.addToScene(scene);

    // main animation loop
    let frame = 0;
    const animate = () => {
        cssRenderer.render(scene, camera);
        renderer.render(scene, camera);

        player.animate();
        // console.log(player.position);

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

class Screen extends THREE.Mesh {
    constructor(scene) {
        let material = new THREE.MeshBasicMaterial({wireframe: false});
        material.color.set('black')
        material.opacity   = 0;
        material.blending  = THREE.NoBlending;
        let geometry = new THREE.PlaneGeometry(900, 500, 32, 32);
        super(geometry, material);
        // this.position.x = 450;
        // this.position.y = 250;
        // this.position.z = -50;
        this.position.x = 450;
        this.position.y = 225;
        this.position.z = -50;
        this.rotation.y = -Math.PI/2;

        this.scene = scene;
        this.scene.add(this);

        this.powerOn();
        // this.goToUrl('https://google.com');
    }

    powerOn() {
        // let element = document.createElement('img');
        // element.src = 'textures/ml-example-screen.png';

        let element = document.createElement('iframe');
        element.src = [ 'https://www.youtube.com/embed/jO2viLEW-1A', '?rel=0' ].join( '' );
        element.style.width = '200px';
        element.style.height = '150px';

        this.image = new THREE.CSS3DObject(element);
        console.log(typeof(element));
        console.log(element);
        this.image.position.copy(this.position);
        this.image.rotation.copy(this.rotation);

    };

    // addToScene(scene) {
    //     scene.add(this.image);
    //     scene.add(this);
    // };

    goToUrl(url) {
        httpGetAsync('https://cors-anywhere.herokuapp.com/' + url, (data) => {
            let doc = new DOMParser().parseFromString(data, "text/html");    
            console.log(typeof(doc));
            console.log(doc);
            console.log(doc.childNodes);
            console.log('hello2!');
            this.image = new THREE.CSS3DObject(doc);
            console.log('hello!');
            console.log(this.image);
            this.image.position.copy(this.position);
            this.image.rotation.copy(this.rotation);
            this.scene.add(this.image);
        });

    };

}

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

class Player extends FloorBlock {
    constructor(x, z) {
        super(x, z, 0xff0000);
        this.name = 'player';
        this.position.y += 60;
        this.speed = 60;
        
        this.keyHeldDown = false;
        this.isReadyToMove = true;
        
        this.animations = [];
        this.framesLeftOfAnimation = 0;
        
        document.addEventListener('keydown', this.move.bind(this), false);
        document.addEventListener('keyup', this.keyUp.bind(this), false);
    }

    move(event) {
        let keyCode = event.which;
        let rotVel = 0.1 * (Math.PI/2);
        let totAnimationFrames = (Math.PI/2) / rotVel;
        
        if (this.isReadyToMove == true) {
            // up
            if (keyCode == 87 || keyCode == 38) {
                this.animations.push([() => {
                    this.position.x += this.speed/totAnimationFrames;
                    this.rotation.z -= rotVel;
                }, totAnimationFrames]);
            // down
            } else if (keyCode == 83 || keyCode == 40) {
                this.animations.push([() => {
                    this.position.x -= this.speed/totAnimationFrames;
                    this.rotation.z += rotVel;
                }, totAnimationFrames]);
            // left
            } else if (keyCode == 65 || keyCode == 37) {
                this.animations.push([() => {
                    this.position.z -= this.speed/totAnimationFrames;
                    this.rotation.x -= rotVel
                }, totAnimationFrames]);
            // right
            } else if (keyCode == 68 || keyCode == 39) {
                this.animations.push([() => {
                    this.position.z += this.speed/totAnimationFrames;
                    this.rotation.x += rotVel;
                }, totAnimationFrames]);
            }
        }
        this.keyHeldDown = true;
        this.isReadyToMove = false;
    };

    keyUp() {
        this.keyHeldDown = false;
    };

    checkReadyToMove() {
        if (this.keyHeldDown == false && this.animations.length == 0) {
            this.rotation.x = 0;
            this.rotation.z = 0;
            this.isReadyToMove = true;
        }
    };

    animate() {
        for (let i = 0; i < this.animations.length; i++) {
            if (this.animations[i][1] > 0) {
                this.animations[i][0].bind(this)();
                this.animations[i][1]--;
            }
        }
        this.removeCompletedAnimations();
        this.checkReadyToMove();
    };

    removeCompletedAnimations() {
        let newAnimations = [];
        for (let i = 0; i < this.animations.length; i++) {
            if (this.animations[i][1] > 0)
                newAnimations.push(this.animations[i]);
        }
        this.animations = newAnimations;
    };
}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
}

window.onload = init;