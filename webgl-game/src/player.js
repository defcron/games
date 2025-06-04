import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js';

export class Player {
  constructor(
    scene,
    obstacles = [],
    pickups = [],
    enemies = [],
    healthPickups = [],
    scoreElement = null,
    healthElement = null,
    messageCallback = null,
    deathCallback = null
  ) {
    this.scene = scene;
    this.obstacles = obstacles;
    this.pickups = pickups;
    this.enemies = enemies;
    this.healthPickups = healthPickups;
    this.scoreElement = scoreElement;
    this.healthElement = healthElement;
    this.messageCallback = messageCallback;
    this.deathCallback = deathCallback;
    this.score = 0;
    this.maxHealth = 3;
    this.health = this.maxHealth;
    this.sounds = {
      jump: new Audio('https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg'),
      pickup: new Audio('https://actions.google.com/sounds/v1/cartoon/pop.ogg'),
      hit: new Audio('https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg')
    };
    if (this.scoreElement) this.scoreElement.textContent = `Score: ${this.score}`;
    if (this.healthElement) this.healthElement.textContent = `Health: ${this.health}`;
    this.mesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({ color: 0x44aa88 })
    );
    this.spawn = new THREE.Vector3(0, 0.5, 0);
    this.mesh.position.copy(this.spawn);
    scene.add(this.mesh);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 7.5);
    scene.add(light);

    this.velocity = new THREE.Vector3();
    this.speed = 2;
    this.jumpSpeed = 5;
    this.onGround = true;
    this.keys = {};
    this.box = new THREE.Box3().setFromObject(this.mesh);
    window.addEventListener('keydown', (e) => (this.keys[e.code] = true));
    window.addEventListener('keyup', (e) => (this.keys[e.code] = false));
  }

  reset() {
    this.mesh.position.copy(this.spawn);
    this.velocity.set(0, 0, 0);
    this.box.setFromObject(this.mesh);
  }

  hurt() {
    this.health -= 1;
    if (this.healthElement) this.healthElement.textContent = `Health: ${this.health}`;
    this.sounds.hit.play();
    if (this.health <= 0) {
      if (this.deathCallback) this.deathCallback();
    } else {
      if (this.messageCallback) this.messageCallback('You were hit! Returning to start.');
      this.reset();
    }
  }

  heal() {
    this.health = Math.min(this.maxHealth, this.health + 1);
    if (this.healthElement) this.healthElement.textContent = `Health: ${this.health}`;
  }

  update(delta) {
    // horizontal movement with simple acceleration and friction
    if (this.keys['ArrowLeft']) this.velocity.x -= this.speed * 5 * delta;
    if (this.keys['ArrowRight']) this.velocity.x += this.speed * 5 * delta;
    if (this.keys['ArrowUp']) this.velocity.z -= this.speed * 5 * delta;
    if (this.keys['ArrowDown']) this.velocity.z += this.speed * 5 * delta;

    this.velocity.x *= 0.9;
    this.velocity.z *= 0.9;

    if (this.keys['Space'] && this.onGround) {
      this.velocity.y = this.jumpSpeed;
      this.onGround = false;
      this.sounds.jump.play();
    }

    // apply gravity
    this.velocity.y -= 9.8 * delta;

    const previous = this.mesh.position.clone();
    this.mesh.position.addScaledVector(this.velocity, delta);
    this.box.setFromObject(this.mesh);

    for (let i = this.pickups.length - 1; i >= 0; i--) {
      const pickup = this.pickups[i];
      pickup.update();
      if (this.box.intersectsBox(pickup.box)) {
        pickup.collect();
        this.pickups.splice(i, 1);
        this.score += 1;
        this.sounds.pickup.play();
        if (this.scoreElement) {
          this.scoreElement.textContent = `Score: ${this.score}`;
        }
      }
    }

    for (let i = this.healthPickups.length - 1; i >= 0; i--) {
      const hp = this.healthPickups[i];
      hp.update();
      if (this.box.intersectsBox(hp.box)) {
        hp.collect();
        this.healthPickups.splice(i, 1);
        this.heal();
        this.sounds.pickup.play();
      }
    }

    for (const obstacle of this.obstacles) {
      obstacle.update();
      if (this.box.intersectsBox(obstacle.box)) {
        this.mesh.position.copy(previous);
        this.velocity.set(0, 0, 0);
        this.box.setFromObject(this.mesh);
        break;
      }
    }

    for (const enemy of this.enemies) {
      enemy.update(delta, this);
      if (this.box.intersectsBox(enemy.box)) {
        if (enemy.dispose) enemy.dispose();
        this.hurt();
        break;
      }
    }

    if (this.mesh.position.y <= 0.5) {
      this.mesh.position.y = 0.5;
      this.velocity.y = 0;
      this.onGround = true;
    }
    this.box.setFromObject(this.mesh);
  }
}
