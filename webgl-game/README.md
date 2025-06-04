# New 3D WebGL Game

This folder contains a prototype 3D WebGL game built with [Three.js](https://threejs.org/). The game now features:
- A movable cube character controlled with the arrow keys and space bar for jumping.
- Ground plane and ambient lighting.
- Static obstacle cubes that block movement.
- Collectible pickups that update an on-screen score.
- A three level structure with an expanding storyline.
- Dynamic placement of pickups, obstacles and enemies each time you play.
- Moving enemy spheres on later levels that reset the player on contact.
- A turret enemy that fires projectiles on the final stage.
- Sound effects for jumping, pickups and getting hit.
- On-screen HUD elements for the score, current level and story messages.

## Architecture

- `index.html` sets up the page and loads the main module.
- `src/main.js` bootstraps the `Game` class, which sets up the Three.js scene, camera, renderer and game loop.
 - `src/environment.js` manages the ground plane and lighting and spawns level entities.
 - `src/levels.js` randomly generates obstacle, pickup and enemy placement for each level.
 - `src/enemy.js` defines a simple patrolling enemy sphere.
 - `src/obstacle.js` defines a basic `Obstacle` class for static cubes.
 - `src/player.js` defines a `Player` class that renders a cube and supports movement, jumping and collision detection with obstacles, pickups and enemies.

The project uses ES modules and loads dependencies from public CDNs so there is no local build step required.

## Running

Open `index.html` in a modern browser with WebGL support. Use the arrow keys to move the cube and press the space bar to jump. Avoid the obstacle cubes scattered around the ground plane.

## Next Steps

- Add more stages and enemy varieties to build out the narrative.
- Replace the temporary sound effects with custom audio.
- Continue refining physics and projectile interactions.
- Explore using a bundler and local asset pipeline as the project grows.
