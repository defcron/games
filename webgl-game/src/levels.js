import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js';

export const LEVELS = [
  {
    message: 'Level 1: Gather the three energy orbs!',
    pickups: [
      new THREE.Vector3(2, 0.3, -3),
      new THREE.Vector3(-3, 0.3, 1),
      new THREE.Vector3(0, 0.3, 3),
    ],
    obstacles: [
      new THREE.Vector3(3, 0.5, -2),
      new THREE.Vector3(-2, 0.5, 2),
    ],
    enemies: [],
  },
  {
    message: 'Level 2: Avoid the roaming sentinel!',
    pickups: [
      new THREE.Vector3(-4, 0.3, -3),
      new THREE.Vector3(4, 0.3, 2),
      new THREE.Vector3(0, 0.3, 4),
    ],
    obstacles: [
      new THREE.Vector3(1, 0.5, -1),
      new THREE.Vector3(-1, 0.5, 1),
      new THREE.Vector3(3, 0.5, 3),
    ],
    enemies: [
      { position: new THREE.Vector3(0, 0.5, 0), axis: 'x', range: 4, speed: 2 },
    ],
  },
];
