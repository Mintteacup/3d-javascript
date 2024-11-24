import * as THREE from 'three';

//creates a scene
const scene = new THREE.Scene();
//creates a camera with an fov of 75
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//creates the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); //sets the size of the renderer
document.body.appendChild(renderer.domElement); //appends the renderer to the html

//creates a cube
const geometry = new THREE.BoxGeometry(1, 1, 1); //width, height and depth of cube
const material = new THREE.MeshBasicMaterial( {color: 0xf000fb}); //colour of the cube
const cube = new THREE.Mesh(geometry, material); //creates a mesh of the cube applying the geometry and the material
scene.add(cube); //adds the cube to the scene at (0,0,0)

camera.position.z = 5; //moves the camera so it isn't in the centre of the cube

//
function animate() {

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate); //calls the aniamte function every available frame