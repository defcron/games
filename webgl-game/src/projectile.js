import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js';

export class Projectile {
  constructor(scene, position = new THREE.Vector3(), direction = new THREE.Vector3(0,0,1), speed = 4, environment = null) {
    this.scene = scene;
    this.direction = direction.clone().normalize();
    this.speed = speed;
    this.environment = environment;
    const geometry = new THREE.SphereGeometry(0.2, 8, 8);
    const material = new THREE.MeshStandardMaterial({ color: 0xffff00 });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.copy(position);
    scene.add(this.mesh);
    this.origin = position.clone();
    this.alive = true;
    this.box = new THREE.Box3().setFromObject(this.mesh);
  }

  update(delta) {
    if (!this.alive) return;
    this.mesh.position.addScaledVector(this.direction, this.speed * delta);
    if (this.mesh.position.distanceTo(this.origin) > 40) {
      this.dispose();
      return;
    }
    this.box.setFromObject(this.mesh);
  }

  dispose() {
    if (!this.alive) return;
    this.alive = false;
    this.scene.remove(this.mesh);
    if (this.environment) {
      const i = this.environment.enemies.indexOf(this);
      if (i !== -1) this.environment.enemies.splice(i, 1);
    }
  }
}
