# New 3D WebGL Game

This folder contains an early prototype of a new 3D WebGL game built with [Three.js](https://threejs.org/).

## Architecture

- `index.html` sets up the page and loads the main module.
- `src/main.js` bootstraps the `Game` class, which is responsible for creating the renderer, camera, and main animation loop.
- `src/player.js` defines a simple `Player` class that currently renders a cube and handles basic arrow-key movement.

The project uses ES modules and loads dependencies from public CDNs so there is no local build step required.

## Running

Open `index.html` in a modern browser with WebGL support. The cube can be moved using the arrow keys.

## Next Steps

- Add additional game objects and environment assets.
- Implement collision detection and more complex player controls.
- Add scoring, levels, or objectives to turn the prototype into a game.
- Explore using a bundler and local asset pipeline as the project grows.
