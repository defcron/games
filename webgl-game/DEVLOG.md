# Development Log

This document summarizes the progress of the WebGL game.

## Implemented Features
- Movable cube player using arrow keys.
- Jumping with the space bar.
- Ground plane and ambient lighting.
- Two obstacle cubes added to the scene.
- Basic collision detection preventing the player from passing through obstacles.
- Collectible pickups that update an on-screen score when collected.

## Changes in This Iteration
- Added `Pickup` class with spherical collectibles.
- Environment now spawns three pickups.
- Player checks for pickup collisions and updates a score display.
- Game creates a score HUD element and passes it to the player.

## Remaining Work
- Improve physics for smoother movement and jumping.
- Add more obstacle variety and refine models.
- Begin implementing level progression and objectives.
- Consider bundling assets locally instead of loading from CDNs.

## Next Developer Steps
1. Polish pickup visuals and add sound effects on collection.
2. Introduce multiple levels with increasing difficulty.
3. Review and refine physics to feel more natural.
4. Investigate bundling assets and managing dependencies locally.

