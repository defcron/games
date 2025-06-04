# New 3D WebGL Game

This folder contains an early prototype of a new 3D WebGL game built with [Three.js](https://threejs.org/). The prototype now features a movable cube character with jumping, a ground plane, basic lighting and a simple collectible system with scoring.

## Architecture

- `index.html` sets up the page and loads the main module.
- `src/main.js` bootstraps the `Game` class, which sets up the Three.js scene, camera, renderer and game loop.
- `src/environment.js` adds a simple ground plane and ambient lighting.
- `src/player.js` defines a `Player` class that renders a cube and supports arrow key movement and jumping with the space bar.
- `src/collectible.js` implements a `Collectible` class used to spawn coins that can be picked up for points.
- `index.html` displays the current score in a fixed overlay.

The project uses ES modules and loads dependencies from public CDNs so there is no local build step required.

## Running

Open `index.html` in a modern browser with WebGL support. Use the arrow keys to move the cube on the ground plane, press the space bar to jump and collect the floating coins to increase your score.

## Next Steps

- Add obstacles and more varied collectibles to enrich gameplay.
- Improve collision detection and physics (consider integrating a physics engine).
- Create level layouts, objectives and win conditions.
- Expand the UI with health/lives indicators and a start menu.
- Explore using a bundler and local asset pipeline as the project grows.
