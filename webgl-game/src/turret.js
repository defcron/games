import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js';
import { Projectile } from './projectile.js';

export class Turret {
  constructor(scene, position = new THREE.Vector3(), interval = 1.5, projectileSpeed = 4, environment = null) {
    this.scene = scene;
    this.position = position.clone();
    this.interval = interval;
    this.projectileSpeed = projectileSpeed;
    this.environment = environment;
    this.player = environment ? environment.player : null;
    this.time = 0;
    const geometry = new THREE.CylinderGeometry(0.4, 0.6, 0.8, 8);
    const material = new THREE.MeshStandardMaterial({ color: 0x333399 });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.copy(position);
    scene.add(this.mesh);
    this.box = new THREE.Box3().setFromObject(this.mesh);
  }

  update(delta, player) {
    this.time += delta;
    if (player) {
      this.mesh.lookAt(player.mesh.position);
    }
    if (this.time >= this.interval && this.environment && player) {
      this.time = 0;
      const dir = new THREE.Vector3().subVectors(player.mesh.position, this.mesh.position).normalize();
      const projectile = new Projectile(this.scene, this.mesh.position.clone(), dir, this.projectileSpeed, this.environment);
      this.environment.enemies.push(projectile);
    }
    this.box.setFromObject(this.mesh);
  }

  dispose() {
    this.scene.remove(this.mesh);
    if (this.environment) {
      const i = this.environment.enemies.indexOf(this);
      if (i !== -1) this.environment.enemies.splice(i, 1);
    }
  }
}
