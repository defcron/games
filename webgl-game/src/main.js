import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js';

import { Player } from './player.js';
import { Environment } from './environment.js';

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

    this.scoreElement = document.createElement('div');
    this.scoreElement.id = 'score';
    this.scoreElement.style.position = 'absolute';
    this.scoreElement.style.top = '10px';
    this.scoreElement.style.left = '10px';
    this.scoreElement.style.color = 'white';
    this.scoreElement.style.fontFamily = 'sans-serif';
    this.scoreElement.textContent = 'Score: 0';
    document.body.appendChild(this.scoreElement);

    window.addEventListener('resize', () => this.onResize());

    this.environment = new Environment(this.scene);

    this.player = new Player(
      this.scene,
      this.environment.obstacles,
      this.environment.pickups,
      this.scoreElement
    );

    this.animate = this.animate.bind(this);
    this.animate();
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
    this.renderer.render(this.scene, this.camera);
  }
}

new Game();
