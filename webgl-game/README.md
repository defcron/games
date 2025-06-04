# New 3D WebGL Game

This folder contains an early prototype of a new 3D WebGL game built with [Three.js](https://threejs.org/). The prototype features a movable cube character, a ground plane, basic lighting and jumping.

## Architecture

- `index.html` sets up the page and loads the main module.
- `src/main.js` bootstraps the `Game` class, which sets up the Three.js scene, camera, renderer and game loop.
- `src/environment.js` adds a simple ground plane and ambient lighting.
- `src/player.js` defines a `Player` class that renders a cube and now supports arrow key movement and jumping with the space bar.

The project uses ES modules and loads dependencies from public CDNs so there is no local build step required.

## Running

Open `index.html` in a modern browser with WebGL support. Use the arrow keys to move the cube on the ground plane and press the space bar to jump.

## Next Steps

- Add additional game objects (obstacles, pickups) and richer environment assets.
- Implement collision detection and refine the physics for smoother movement.
- Create objectives, scoring, and possibly multiple levels.
- Explore using a bundler and local asset pipeline as the project grows.
