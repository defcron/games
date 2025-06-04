import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js';

export class Environment {
  constructor(scene) {
    this.scene = scene;
    this.createGround();
    this.addLighting();
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
}
