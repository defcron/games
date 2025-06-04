import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js';
import { Obstacle } from './obstacle.js';
import { Pickup } from './pickup.js';
import { Enemy } from './enemy.js';

export class Environment {
  constructor(scene) {
    this.scene = scene;
    this.obstacles = [];
    this.pickups = [];
    this.enemies = [];
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

  clearObstacles() {
    for (const obs of this.obstacles) {
      this.scene.remove(obs.mesh);
    }
    this.obstacles = [];
  }

  clearPickups() {
    for (const p of this.pickups) {
      this.scene.remove(p.mesh);
    }
    this.pickups = [];
  }

  clearEnemies() {
    for (const e of this.enemies) {
      this.scene.remove(e.mesh);
    }
    this.enemies = [];
  }

  createObstacles(positions = []) {
    this.clearObstacles();
    for (const pos of positions) {
      const obstacle = new Obstacle(this.scene, pos);
      this.obstacles.push(obstacle);
    }
  }

  createPickups(positions = []) {
    this.clearPickups();
    for (const pos of positions) {
      const pickup = new Pickup(this.scene, pos);
      this.pickups.push(pickup);
    }
  }

  createEnemies(configs = []) {
    this.clearEnemies();
    for (const cfg of configs) {
      const enemy = new Enemy(this.scene, cfg.position, cfg.axis, cfg.range, cfg.speed);
      this.enemies.push(enemy);
    }
  }
}
