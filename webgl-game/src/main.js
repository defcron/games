import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js';

import { Player } from './player.js';
import { Environment } from './environment.js';
import { generateLevel, LEVEL_COUNT } from './levels.js';

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
    this.camera.lookAt(0, 0, 0);

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

    this.healthElement = document.createElement('div');
    this.healthElement.id = 'health';
    this.healthElement.style.position = 'absolute';
    this.healthElement.style.top = '40px';
    this.healthElement.style.left = '10px';
    this.healthElement.style.color = 'white';
    this.healthElement.style.fontFamily = 'sans-serif';
    document.body.appendChild(this.healthElement);

    this.levelElement = document.createElement('div');
    this.levelElement.id = 'level';
    this.levelElement.style.position = 'absolute';
    this.levelElement.style.top = '10px';
    this.levelElement.style.right = '10px';
    this.levelElement.style.color = 'white';
    this.levelElement.style.fontFamily = 'sans-serif';
    document.body.appendChild(this.levelElement);

    this.messageElement = document.createElement('div');
    this.messageElement.id = 'message';
    this.messageElement.style.position = 'absolute';
    this.messageElement.style.bottom = '20px';
    this.messageElement.style.left = '50%';
    this.messageElement.style.transform = 'translateX(-50%)';
    this.messageElement.style.color = 'white';
    this.messageElement.style.fontFamily = 'sans-serif';
    this.messageElement.style.padding = '8px';
    this.messageElement.style.background = 'rgba(0,0,0,0.5)';
    document.body.appendChild(this.messageElement);

    window.addEventListener('resize', () => this.onResize());

    this.environment = new Environment(this.scene);

    this.currentLevel = 0;
    this.loadLevel(this.currentLevel);

    this.player = new Player(
      this.scene,
      this.environment.obstacles,
      this.environment.pickups,
      this.environment.enemies,
      this.environment.healthPickups,
      this.scoreElement,
      this.healthElement,
      (msg) => this.showMessage(msg, 2),
      () => this.restartGame()
    );

    this.environment.setPlayer(this.player);

    this.animate = this.animate.bind(this);
    this.animate();
  }

  showMessage(text, duration = 3) {
    this.messageElement.textContent = text;
    this.messageElement.style.display = 'block';
    if (this.messageTimeout) clearTimeout(this.messageTimeout);
    this.messageTimeout = setTimeout(() => {
      this.messageElement.style.display = 'none';
    }, duration * 1000);
  }

  loadLevel(index) {
    const data = generateLevel(index);
    this.environment.createObstacles(data.obstacles);
    this.environment.createPickups(data.pickups);
    this.environment.createHealthPickups(data.healthPickups || []);
    this.environment.createEnemies(data.enemies);
    this.levelElement.textContent = `Level: ${index + 1}`;
    this.showMessage(data.message, 4);
  }

  nextLevel() {
    this.currentLevel += 1;
    if (this.currentLevel >= LEVEL_COUNT) {
      this.showMessage(`You escaped with ${this.player.score} points! Thanks for playing.`, 10);
      this.currentLevel = LEVEL_COUNT - 1;
      return;
    }
    this.loadLevel(this.currentLevel);
    this.player.obstacles = this.environment.obstacles;
    this.player.pickups = this.environment.pickups;
    this.player.enemies = this.environment.enemies;
    this.player.healthPickups = this.environment.healthPickups;
    this.player.reset();
  }

  restartGame() {
    this.showMessage('Game over! Restarting...', 3);
    this.currentLevel = 0;
    this.player.score = 0;
    if (this.scoreElement) this.scoreElement.textContent = 'Score: 0';
    this.loadLevel(this.currentLevel);
    this.player.obstacles = this.environment.obstacles;
    this.player.pickups = this.environment.pickups;
    this.player.enemies = this.environment.enemies;
    this.player.healthPickups = this.environment.healthPickups;
    this.player.health = this.player.maxHealth;
    if (this.healthElement) this.healthElement.textContent = `Health: ${this.player.health}`;
    this.player.reset();
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
    if (this.environment.pickups.length === 0) {
      this.nextLevel();
    }
    this.renderer.render(this.scene, this.camera);
  }
}

new Game();
