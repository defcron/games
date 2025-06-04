import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js';

export class Enemy {
  constructor(scene, position = new THREE.Vector3(), axis = 'x', range = 2, speed = 1) {
    this.scene = scene;
    this.origin = position.clone();
    this.axis = axis;
    this.range = range;
    this.speed = speed;
    this.direction = 1;
    const geometry = new THREE.SphereGeometry(0.5, 16, 16);
    const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.copy(position);
    scene.add(this.mesh);

    this.box = new THREE.Box3().setFromObject(this.mesh);
  }

  update(delta) {
    const move = this.speed * delta * this.direction;
    this.mesh.position[this.axis] += move;
    if (Math.abs(this.mesh.position[this.axis] - this.origin[this.axis]) > this.range) {
      this.direction *= -1;
    }
    this.box.setFromObject(this.mesh);
  }
}
