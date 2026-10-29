# NavyStrategy browser playtest

https://Mef777112.github.io/NavyStrategyWeb/

Unity 6000.6.7f1 WebGPU build for desktop and mobile browser testing.
A browser/device supporting WebGPU is required. Mobile rendering uses device pixel ratio 1.
The visible build identifier distinguishes the current player from cached versions.

This playtest includes skeletal GPU soldier animation, procedural wreck surfaces,
and the current network gameplay. Create or join a room; the host starts the battle.
Mobile compatibility is being tested and is not guaranteed on every device/browser.

Large binary files are split into chunks for Git storage. GitHub Actions verifies SHA-256,
reconstructs the original build files, and publishes the complete player to GitHub Pages.
Only the built player is published; Unity project source files are not included.
