# Development Log

This document summarizes the progress of the WebGL game.

## Implemented Features
- Movable cube player using arrow keys.
- Jumping with the space bar.
- Ground plane and ambient lighting.
- Static obstacle cubes block the player.
- Basic collision detection preventing the player from passing through obstacles.
- Collectible pickups that update an on-screen score when collected.
- Two level structure with enemy objects and dynamic spawning.
- On-screen HUD for score and level with transient story messages.

## Changes in This Iteration
- Refactored `Environment` to dynamically spawn obstacles, pickups and enemies.
- Added `Enemy` class with patrolling movement.
- Introduced `levels.js` containing data for two levels.
- `Game` class now handles level progression and message display.
- Player resets to start when colliding with an enemy.

## Remaining Work
- Improve physics for smoother movement and jumping.
- Expand the storyline with additional levels.
- Add sound effects and better visuals for pickups and enemies.
- Consider bundling assets locally instead of loading from CDNs.

## Next Developer Steps
1. Add more levels and enemy varieties to extend gameplay.
2. Integrate audio cues for pickups, jumps and enemy collisions.
3. Review and refine physics to feel more natural.
4. Investigate bundling assets and managing dependencies locally.

