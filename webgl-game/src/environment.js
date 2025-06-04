import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js';
import { Obstacle } from './obstacle.js';
import { Pickup } from './pickup.js';
import { Enemy } from './enemy.js';
import { Turret } from './turret.js';
import { Chaser } from './chaser.js';
import { HealthPickup } from './healthPickup.js';

export class Environment {
  constructor(scene) {
    this.scene = scene;
    this.player = null;
    this.obstacles = [];
    this.pickups = [];
    this.healthPickups = [];
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

  setPlayer(player) {
    this.player = player;
    for (const e of this.enemies) {
      if (typeof e.player !== 'undefined') {
        e.player = player;
      }
    }
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

  clearHealthPickups() {
    for (const p of this.healthPickups) {
      this.scene.remove(p.mesh);
    }
    this.healthPickups = [];
  }

  clearEnemies() {
    for (const e of this.enemies) {
      if (e.mesh) this.scene.remove(e.mesh);
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

  createHealthPickups(positions = []) {
    this.clearHealthPickups();
    for (const pos of positions) {
      const hp = new HealthPickup(this.scene, pos);
      this.healthPickups.push(hp);
    }
  }

  createEnemies(configs = []) {
    this.clearEnemies();
    for (const cfg of configs) {
      if (cfg.type === 'turret') {
        const turret = new Turret(this.scene, cfg.position, cfg.interval, cfg.projectileSpeed, this);
        this.enemies.push(turret);
      } else if (cfg.type === 'chaser') {
        const chaser = new Chaser(this.scene, cfg.position, cfg.speed);
        this.enemies.push(chaser);
      } else {
        const enemy = new Enemy(this.scene, cfg.position, cfg.axis, cfg.range, cfg.speed);
        this.enemies.push(enemy);
      }
    }
  }
}
