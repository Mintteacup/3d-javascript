import * as THREE from 'three';

//creates a scene
const scene = new THREE.Scene();

//creates a camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 500);
camera.position.set(0, 0, 30); //moves the camera so it isn't in the centre of the cube
camera.lookAt( 0, 0, 0 ); //makes sure the camera is always looking at the centre of the world

//creates the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); //sets the size of the renderer
document.body.appendChild(renderer.domElement); //appends the renderer to the html

//creates a cube
const cubegeometry = new THREE.BoxGeometry(7, 7, 7); //width, height and depth of cube
const cubematerial = new THREE.MeshBasicMaterial({color: 0xf000fb}); //colour of the cube
const cube = new THREE.Mesh(cubegeometry, cubematerial); //creates a mesh of the cube applying the geometry and the material
scene.add(cube); //adds the cube to the scene at (0,0,0)

//creates a line
const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));

const linegeometry = new THREE.BufferGeometry().setFromPoints(points);
const linematerial = new THREE.LineBasicMaterial({color: 0xf000fb});
const line = new THREE.Line(linegeometry, linematerial)
scene.add(line);

function animate() {

    line.rotation.y += 0.01;

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate); //calls the aniamte function every available frame