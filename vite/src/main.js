import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const canvas = document.getElementById("canvas");

//renderer
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

//scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#000000");

//camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

//lights
const light = new THREE.SpotLight("#9CDBA6", 100);
light.position.set(1, 1, 1);
scene.add(light);

//objects
const dodecahedronGeometry = new THREE.DodecahedronGeometry();
const dodecahedronMaterial = new THREE.MeshStandardMaterial({color: "#465858", emissive: "#465858"});
const dodecahedron = new THREE.Mesh(dodecahedronGeometry, dodecahedronMaterial);
scene.add(dodecahedron);

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshStandardMaterial({color: "#F0F0F0", emissive: "#F0F0F0"});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -2
scene.add(box);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

//orbit
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = false;

//animate
function animate() {

  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;

  box.rotation.y += 0.05;

  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate); //calls the aniamte function every available frame