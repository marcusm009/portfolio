// global variables
let renderer;
let scene;
let camera;
let control;

function init() {

    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera();

    let zoom = 192;
    let defaultCameraPos = THREE.Vector3(-1, 0.5, 0.75);

    camera.left = window.innerWidth / -zoom;
    camera.right = window.innerWidth / zoom;
    camera.top = window.innerHeight / zoom;
    camera.bottom = window.innerHeight / -zoom;

    camera.near = -300;
    camera.far = 1500;

    camera.updateProjectionMatrix();

    // create a render, sets the background color and the size
    renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setClearColor(0x000000, 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = 0;    
    renderer.domElement.style.zIndex = 0;

    // create CSS renderer
    let cssRenderer = new THREE.CSS3DRenderer();
    cssRenderer.setSize(window.innerWidth, window.innerHeight);
    cssRenderer.domElement.style.position = 'absolute';
    cssRenderer.domElement.style.top = 0;
    cssRenderer.domElement.style.zIndex = 1;

    // position and point the camera to the center of the scene
    camera.position.set(-1, 4, 1);
    
    let focalPoint = scene.position.clone();
    
    focalPoint.y += 3;
    camera.lookAt(focalPoint);

    let dirLight = new THREE.DirectionalLight();
    scene.add(dirLight);
    dirLight.position.set(-500, 200, 300);

    // add the output of the renderer to the html element
    document.body.appendChild(cssRenderer.domElement);
    document.body.appendChild(renderer.domElement);

    // control = new function () {
    //     this.left = camera.left;
    //     this.right = camera.right;
    //     this.top = camera.top;
    //     this.bottom = camera.bottom;
    //     this.far = camera.far;
    //     this.near = camera.near;

    //     this.updateCamera = function () {
    //         camera.left = control.left;
    //         camera.right = control.right;
    //         camera.top = control.top;
    //         camera.bottom = control.bottom;
    //         camera.far = control.far;
    //         camera.near = control.near;

    //         camera.updateProjectionMatrix();
    //     };
    // };

    // addControls(control);

    // let floor = new Floor(new THREE.Vector3(), new THREE.Vector2(9,9), new THREE.Vector3(), 0.9, 0, color=0xffffff, holes=[[1,1]]);
    // floor.addToScene(scene);

    let planet = [];
    for (let i = 0; i < 9; i++) {
        let ground = new Floor(
            new THREE.Vector3(0,-i,0),
            new THREE.Vector2(9,9),
            new THREE.Vector3(),
            0.9,
            0,
            colors=[0xacff78,'blue'], // light green, blue
            colorProb=[.75,.25],
            holes=[[1,1]]
        );
        planet.push(ground);
        ground.addToScene(scene);
    }

    // add player
    let player = new Player(0,0);
    scene.add(player);

    // add screen 0
    let quaternion = new THREE.Quaternion();
    quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), -Math.PI/2);
    let screen = new Screen(
        new THREE.Vector3(4.5,3.8,0),
        new THREE.Vector2(9,4.5),
        quaternion
    );
    screen.addToScene(scene);

    // add screen 1
    quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), -Math.PI/4);
    let screen1 = new Screen(
        new THREE.Vector3(0,-22,0),
        new THREE.Vector2(24,12),
        quaternion
    );
    screen1.addToScene(scene);

    // main animation loop
    let frame = 0;
    let playerAnimations = [];
    let playerIsFalling = false;

    const animate = () => {
        // camera.position.set(-1,.5,.75);
        cssRenderer.render(scene, camera);
        // camera.position.multiplyScalar(1000);
        renderer.render(scene, camera);

        player.animate(planet[0]);

        frame += 1;
        requestAnimationFrame(animate);
        
        // TODO: Consider applying quaternion to camera instead
        if (player.isFalling && camera.position.y > -20) {
            let vel = .4;
            focalPoint.y -= vel;
            camera.lookAt(focalPoint);
            camera.position.setY(camera.position.y - vel);
        }

        if(frame % 200 == 0) {
            console.log(planet[0].getPositions());
            console.log(player.position);
        }
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

window.onload = init;