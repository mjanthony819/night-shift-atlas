# Night Shift Atlas

The streets move. The letters must arrive.

An original, free browser railway puzzle for **Game Off 2026**, theme **SHIFT**. Shift entire districts to reconnect tracks, collect every envelope, then return the night courier to the red depot.

## Play

Open `release/index.html` in a modern browser. It is self-contained: no install, backend, API key, remote assets or runtime AI. The itch.io page hosts this same release. The release also works when opened as a local file; browser storage availability may vary.

## Features

- 18 solver-verified dispatches across three chapters, from one-letter teaching routes to three-letter routes and fixed districts.
- Walk only over mutually connected track ends. Shifting wraps row edges and carries the courier; walking does not wrap.
- Undo for every action in the current session, reset, optional shortest-next-action hints.
- Device-local saves, completion records, backup export/import. No cloud sync. Undo history is not saved across reloads.
- Workshop with track editing, courier/depot/mail placement, fixed rows, solvability checks and map-code sharing. The workshop draft is session-local, so export it to keep it.
- Keyboard, mouse and touch controls. Phone Focus map keeps the board and controls together.
- Optional procedural sound, reduced motion and high contrast. No timer, ads, analytics, payments or donations.

## Controls

| Action | Input |
| --- | --- |
| Walk | Arrow keys, WASD, compass pad, or tap an adjacent tile |
| Select district | 1-4 or tap a non-adjacent tile in that row |
| Shift district | Q left, E/Shift right, or its row arrows |
| Undo / reset | Z / R or toolbar buttons |
| Hint | A gentle hint button |

First dispatch: shift district 2 left once, walk south twice, then east twice.

## Development

Node 18+ is needed only for development/tests, not to play. No package dependencies.

```
npm test
node scripts/build.mjs
npm run serve
```

`src/engine.mjs` contains pure state transitions, validation and BFS. `src/levels.mjs` contains the fixed campaign and shortest witness routes. `scripts/generate.mjs` reproduces the campaign from a fixed seed. `src/app.mjs` handles UI, sound, workshop and persistence. `scripts/build.mjs` creates the self-contained HTML release, including a Blob-based solver worker.

Automated browser checks are in `scripts/ui-test.mjs`, `scripts/release-test.mjs`, and `scripts/mobile-check.mjs`. They require the development dependency Playwright and its Chromium browser: run `npm install` and `npx playwright install chromium` first. Engine tests use only Node.

## Tests and evidence

30 engine tests pass. The browser suite completes all18 campaign routes through actual UI controls in their solver-verified par counts, checks hints, undo, state persistence, backup export, settings, malformed workshop input, safe text escaping and solvable custom-map playtest. No horizontal page overflow at320,390,768 or1440px. Real touch first-route completion checked at320/390px with map and compass pad visible together in Focus map. These are automated tests, not claims of independent human playtesting or screen-reader certification.

## Architecture and limits

A state is four row offsets (0-3), courier board position (0-15), and a collected-mail bitmask. With up to three stops, at most4^4*16*2^3=32,768 keys exist. Each action costs one; breadth-first search therefore returns a shortest route. Fixed rows reduce possible moves. Immutable transitions are shared by gameplay, the worker, generator and tests.

The finite campaign is deliberately small. A solver proves reachability and par, not enjoyment or novelty. Generated maps were filtered for route length and shift usage; independent human difficulty/playtesting remains future work. Spatial navigation can be difficult nonvisually. Browser-local saves can be cleared, sandboxed or evicted; export backups. Sound effects are implemented but there is no background soundtrack. There is no cloud sharing service; map codes are shared manually.

## AI disclosure and credits

Entered by M J Anthony. AI assistance was used extensively for concept development, programming, level generation, automated tests, code-drawn visual design, text, documentation and demo narration. This is not a claim that M personally coded or tested the game. The game itself has no runtime AI.

Art is original code-drawn SVG/CSS. Sound effects are synthesized with Web Audio. System fonts only. No third-party game assets or runtime libraries. Created in November2026 for Game Off; not affiliated with or endorsed by GitHub. Code and original game assets are MIT licensed. See LICENSE.
