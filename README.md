# NavyStrategy browser playtest

Built Unity WebGL player for gameplay and performance testing.

https://Mef777112.github.io/NavyStrategyWeb/

Open in a desktop browser with WebGPU support. Create a named room or join a room from the list.
The host selects a side; the guest receives the opposite side. The host starts the battle.
Both browser and native clients use the same game simulation and an authenticated WSS packet relay.

Large binary assets are split for Git storage. GitHub Actions verifies their checksums,
reconstructs them and publishes the complete player to GitHub Pages.
This repository contains only the built player; it does not contain the Unity project sources.
