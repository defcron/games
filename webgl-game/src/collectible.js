import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js';

export class Collectible {
  constructor(scene, position = new THREE.Vector3()) {
    this.scene = scene;
    const geometry = new THREE.SphereGeometry(0.3, 16, 16);
    const material = new THREE.MeshStandardMaterial({ color: 0xffcc00 });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.copy(position);
    this.scene.add(this.mesh);
    this.collected = false;
  }

  collect() {
    if (!this.collected) {
      this.scene.remove(this.mesh);
      this.collected = true;
    }
  }
}
