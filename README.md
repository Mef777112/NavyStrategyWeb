# NavyStrategy online WebGPU playtest

https://mef777112.github.io/NavyStrategyWeb/?online=3

Requires a desktop browser and GPU with WebGPU support. Uses the PC render pipeline,
including the same island scene and Crest ocean. Create a named room, choose USA or Iran,
let the other player join from the room list, then start the battle as host.
The other player is automatically assigned the opposite side.

The browser can host the authoritative Unity NetCode simulation. Browser and desktop
clients use an authenticated WSS packet relay through the existing room server.

This repository contains only the built player. Binary asset chunks are verified and
reassembled by GitHub Actions before GitHub Pages publication.
