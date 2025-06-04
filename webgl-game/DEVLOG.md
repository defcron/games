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
- Levels randomly generate the layout of pickups, obstacles and enemies each playthrough.

## Changes in This Iteration
- Levels now generate random positions for pickups, obstacles and enemies on each load.
- Added camera look-at adjustment so the player can see the play field clearly.
- Created helper functions in `levels.js` for random vector creation and level generation.
- Updated documentation to describe dynamic level placement.

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

