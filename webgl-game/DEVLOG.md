# Development Log

This document summarizes the progress of the WebGL game.

## Implemented Features
- Movable cube player using arrow keys.
- Jumping with the space bar.
- Ground plane and ambient lighting.
- Static obstacle cubes block the player.
- Basic collision detection preventing the player from passing through obstacles.
- Collectible pickups that update an on-screen score when collected.
- Three level structure with enemy objects and dynamic spawning.
- On-screen HUD for score and level with transient story messages.
- Levels randomly generate the layout of pickups, obstacles and enemies each playthrough.

## Changes in This Iteration
- Added a third level featuring a projectile-firing turret enemy.
- Created new `Turret` and `Projectile` classes for ranged attacks.
- Enemies now receive the player reference for targeted behaviors.
- Player movement now uses acceleration and friction for smoother control.
- Added sound effects for jumping, collecting pickups and enemy collisions.
- The final victory message displays your total score.

## Remaining Work
- Polish projectile behavior and tweak turret balance.
- Continue expanding the storyline with more diverse stages.
- Replace temporary sound effects with custom audio.
- Consider bundling assets locally instead of loading from CDNs.

## Next Developer Steps
1. Add more levels and enemy varieties to extend gameplay.
2. Refine physics and friction parameters for a better feel.
3. Investigate bundling assets and managing dependencies locally.
4. Expand visual variety of environments and enemies.

