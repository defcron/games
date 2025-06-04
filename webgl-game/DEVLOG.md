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
- Health system with three hearts and restart on death.
- Green health pickups that restore one heart.
- New chaser enemy type that pursues the player.
- Four levels with an expanding storyline.

## Changes in This Iteration
- Introduced a persistent health system displayed on the HUD.
- Added green health pickups which heal the player.
- Implemented a chaser enemy that actively pursues the player.
- Created a new fourth level showcasing the chaser and health pickups.
- Game now restarts from the beginning when all health is lost.

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

