# Development Log

This document summarizes the progress of the WebGL game.

## Implemented Features
- Movable cube player using arrow keys.
- Jumping with the space bar.
- Ground plane and ambient lighting.
- Two obstacle cubes added to the scene.
- Basic collision detection preventing the player from passing through obstacles.

## Changes in This Iteration
- Introduced `Obstacle` class and created two obstacles via `Environment`.
- Added collision detection logic in `Player`.
- Updated `main.js` to pass obstacles to the player.
- Expanded documentation and created `WORKFLOW.md` describing the development workflow.

## Remaining Work
- Improve physics for smoother movement and jumping.
- Add pickups, scoring and level progression.
- Consider bundling assets locally instead of loading from CDNs.

## Next Developer Steps
1. Add collectible items and track a score.
2. Polish obstacle models and add more variety.
3. Begin implementing level progression and simple objectives.
4. Review and refine physics to feel more natural.

