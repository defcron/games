import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js';
import { Obstacle } from './obstacle.js';
import { Pickup } from './pickup.js';

export class Environment {
  constructor(scene) {
    this.scene = scene;
    this.obstacles = [];
    this.pickups = [];
    this.createGround();
    this.addLighting();
    this.createObstacles();
    this.createPickups();
  }

  createGround() {
    const geometry = new THREE.PlaneGeometry(50, 50);
    const material = new THREE.MeshStandardMaterial({ color: 0x808080 });
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 2;
    plane.receiveShadow = true;
    this.scene.add(plane);
  }

  addLighting() {
    const ambient = new THREE.AmbientLight(0x404040);
    this.scene.add(ambient);
  }

  createObstacles() {
    const obstacle1 = new Obstacle(this.scene, new THREE.Vector3(3, 0.5, -2));
    const obstacle2 = new Obstacle(this.scene, new THREE.Vector3(-2, 0.5, 2));
    this.obstacles.push(obstacle1, obstacle2);
  }

  createPickups() {
    const positions = [
      new THREE.Vector3(2, 0.3, -3),
      new THREE.Vector3(-3, 0.3, 1),
      new THREE.Vector3(0, 0.3, 3),
    ];
    for (const pos of positions) {
      const pickup = new Pickup(this.scene, pos);
      this.pickups.push(pickup);
    }
  }
}
