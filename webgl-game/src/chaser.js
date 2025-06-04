import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js';

export class Chaser {
  constructor(scene, position = new THREE.Vector3(), speed = 1.5) {
    this.scene = scene;
    this.speed = speed;
    this.mesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.4, 16, 16),
      new THREE.MeshStandardMaterial({ color: 0xff66ff })
    );
    this.mesh.position.copy(position);
    scene.add(this.mesh);
    this.box = new THREE.Box3().setFromObject(this.mesh);
  }

  update(delta, player) {
    if (player) {
      const dir = new THREE.Vector3().subVectors(player.mesh.position, this.mesh.position);
      dir.y = 0;
      if (dir.lengthSq() > 0.001) {
        dir.normalize();
        this.mesh.position.addScaledVector(dir, this.speed * delta);
      }
    }
    this.box.setFromObject(this.mesh);
  }
}
