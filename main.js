const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeightght / 2, window.innerHeight / - 2, 1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Add cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// Add plane
const geometry1 = new THREE.PlaneGeometry(5, 5);
const material1 = new THREE.MeshBasicMaterial({color: 0xffff00, side: THREE.DoubleSide});
const plane = new THREE.Mesh(geometry1, material1);
scene.add(plane);

camera.position.z = 1;
camera.rotateZ(0.785398);

plane.rotateZ(0.785398);

let angle = 0;
let radius = 500;

let cameraRotation = THREE.Vector3(0,0,0);

const animate = function () {
    requestAnimationFrame(animate);

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    // camera.getWorldDirection(cameraRotation);
    // console.log(cameraRotation);

    console.log("pos: ")
    console.log(camera.position);
    console.log("rot:")
    console.log(camera.rotation);


    renderer.render(scene, camera);
};

animate();