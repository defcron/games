import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js';

import { Player } from './player.js';
import { Environment } from './environment.js';
import { Collectible } from './collectible.js';

class Game {
  constructor() {
    this.clock = new THREE.Clock();
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x222222);
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 2, 5);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    window.addEventListener('resize', () => this.onResize());

    this.environment = new Environment(this.scene);
    this.player = new Player(this.scene);
    this.collectibles = [];
    this.score = 0;
    this.scoreEl = document.getElementById('score');
    this.spawnCollectibles(5);

    this.animate = this.animate.bind(this);
    this.animate();
  }

  spawnCollectibles(count) {
    for (let i = 0; i < count; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        0.5,
        (Math.random() - 0.5) * 20
      );
      this.collectibles.push(new Collectible(this.scene, pos));
    }
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(this.animate);
    const delta = this.clock.getDelta();
    this.player.update(delta);
    this.checkCollisions();
    if (this.scoreEl) {
      this.scoreEl.textContent = `Score: ${this.score}`;
    }
    this.renderer.render(this.scene, this.camera);
  }

  checkCollisions() {
    const playerPos = this.player.mesh.position;
    this.collectibles.forEach((c) => {
      if (!c.collected && c.mesh.position.distanceTo(playerPos) < 0.7) {
        c.collect();
        this.score += 1;
      }
    });
    this.collectibles = this.collectibles.filter((c) => !c.collected);
  }
}

new Game();
