# NavyStrategy browser playtest

Built Unity WebGL player for gameplay and performance testing.

https://Mef777112.github.io/NavyStrategyWeb/

Open in a current desktop browser, wait for the download and select the single-player game.
The room/UDP multiplayer transport requires the native PC build and is unavailable in this browser build.

Large binary assets are split for Git storage. GitHub Actions verifies their checksums,
reconstructs them and publishes the complete player to GitHub Pages.
This repository contains only the built player; it does not contain the Unity project sources.
