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
    camera.position.x = -300;
    camera.position.y = 250;
    camera.position.z = 200;
    // camera.position.set(0, 0, 0);
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

    // addControls(control);

    let floor = new Floor(15, 15, color=0xffffff, holes=[[5,5]]);
    floor.addToScene(scene);

    // add player
    let player = new Player(7,7);
    scene.add(player);

    // add screen
    let screen = new Screen(scene);
    screen.addToScene(scene);

    // main animation loop
    let frame = 0;
    const animate = () => {
        cssRenderer.render(scene, camera);
        renderer.render(scene, camera);

        player.animate(floor);
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

window.onload = init;