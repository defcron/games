import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js';

export class Obstacle {
  constructor(scene, position = new THREE.Vector3()) {
    this.scene = scene;
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x883333 });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.copy(position);
    this.mesh.castShadow = true;
    this.scene.add(this.mesh);

    this.box = new THREE.Box3().setFromObject(this.mesh);
  }

  update() {
    this.box.setFromObject(this.mesh);
  }
}
