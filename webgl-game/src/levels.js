import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js';

function randCoord(range) {
  return (Math.random() - 0.5) * range * 2;
}

function randomVector(y, range = 4) {
  return new THREE.Vector3(randCoord(range), y, randCoord(range));
}

export const LEVEL_GENERATORS = [
  () => ({
    message: 'Level 1: Gather the three energy orbs!',
    pickups: [randomVector(0.3), randomVector(0.3), randomVector(0.3)],
    obstacles: [randomVector(0.5), randomVector(0.5)],
    enemies: [],
  }),
  () => ({
    message: 'Level 2: Avoid the roaming sentinel!',
    pickups: [randomVector(0.3), randomVector(0.3), randomVector(0.3)],
    obstacles: [randomVector(0.5), randomVector(0.5), randomVector(0.5)],
    enemies: [
      { position: randomVector(0.5), axis: 'x', range: 4, speed: 2 },
    ],
  }),
];

export const LEVEL_COUNT = LEVEL_GENERATORS.length;

export function generateLevel(index) {
  return LEVEL_GENERATORS[index % LEVEL_GENERATORS.length]();
}
