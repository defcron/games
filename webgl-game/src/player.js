import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js';

export class Player {
  constructor(scene) {
    this.scene = scene;
    this.mesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({ color: 0x44aa88 })
    );
    this.mesh.position.y = 0.5;
    scene.add(this.mesh);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 7.5);
    scene.add(light);

    this.velocity = new THREE.Vector3();
    this.speed = 2;
    this.jumpSpeed = 5;
    this.onGround = true;
    this.keys = {};
    window.addEventListener('keydown', (e) => (this.keys[e.code] = true));
    window.addEventListener('keyup', (e) => (this.keys[e.code] = false));
  }

  update(delta) {
    this.velocity.x = 0;
    this.velocity.z = 0;
    
    if (this.keys['ArrowLeft']) this.velocity.x -= this.speed * delta;
    if (this.keys['ArrowRight']) this.velocity.x += this.speed * delta;
    if (this.keys['ArrowUp']) this.velocity.z -= this.speed * delta;
    if (this.keys['ArrowDown']) this.velocity.z += this.speed * delta;

    if (this.keys['Space'] && this.onGround) {
      this.velocity.y = this.jumpSpeed;
      this.onGround = false;
    }

    // apply gravity
    this.velocity.y -= 9.8 * delta;

    this.mesh.position.add(this.velocity);

    if (this.mesh.position.y <= 0.5) {
      this.mesh.position.y = 0.5;
      this.velocity.y = 0;
      this.onGround = true;
    }
  }
}
