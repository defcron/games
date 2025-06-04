# New 3D WebGL Game

This folder contains an early prototype of a new 3D WebGL game built with [Three.js](https://threejs.org/). The prototype currently includes:
- A movable cube character controlled with the arrow keys and space bar for jumping.
- A ground plane and ambient lighting.
- Two obstacle cubes positioned in the scene.
- Basic collision detection so the player cannot pass through the obstacles.
- Collectible pickups that increase a visible score when collected.

## Architecture

- `index.html` sets up the page and loads the main module.
- `src/main.js` bootstraps the `Game` class, which sets up the Three.js scene, camera, renderer and game loop.
- `src/environment.js` adds the ground plane, ambient lighting and creates obstacle objects.
- `src/obstacle.js` defines a basic `Obstacle` class for static cubes.
- `src/player.js` defines a `Player` class that renders a cube and supports movement, jumping and collision detection.

The project uses ES modules and loads dependencies from public CDNs so there is no local build step required.

## Running

Open `index.html` in a modern browser with WebGL support. Use the arrow keys to move the cube and press the space bar to jump. Avoid the obstacle cubes scattered around the ground plane.

## Next Steps

- Add interactive pickups and more varied obstacle types.
- Refine physics for smoother movement and jumping.
- Create objectives, scoring, and multiple levels.
- Explore using a bundler and local asset pipeline as the project grows.
