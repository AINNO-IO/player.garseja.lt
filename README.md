# `player.garsio.io` — static multilingual demo

Static one-page multilingual demo landing page for the **Garsio** website article audio player.

## Requirements
- Node.js **20.11+** (this repo is pinned to Vite 5 for compatibility).

## Setup
```bash
npm install
npm run dev
```

## Demo request form (Web3Forms)
The **“Test on your website”** buttons open a modal that POSTs to [Web3Forms](https://web3forms.com/).

1. Create an access key in the Web3Forms dashboard.
2. Put it in a local env file (not committed):

Create `.env` in the project root (gitignored — do not commit) with:

```bash
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

3. For production builds (e.g. GitHub Actions), define the same variable in the build environment so Vite can embed it at build time.

For this repo’s GitHub Pages workflow, add a repository secret named **`VITE_WEB3FORMS_ACCESS_KEY`** (same value as locally). The deploy workflow passes it into `npm run build`.

## Build
```bash
npm run build
npm run preview
```

The build is a **static multi-page site** that outputs:
- `/index.html` (auto-detect → redirect)
- `/en/index.html`
- `/lt/index.html`
- `/cs/index.html`
- `/sk/index.html`
- `/hu/index.html`
- `/ro/index.html`
- `/bg/index.html`
- `/hr/index.html`
- `/sr/index.html`
- `/sl/index.html`

## Audio files
This demo expects pre-generated audio files to exist in `public/audio/`:
```txt
public/audio/en/<voice>.mp3
public/audio/lt/ieva.mp3
public/audio/hu/noemi.mp3
public/audio/hu/tamas.mp3
public/audio/cs/antonin.mp3
public/audio/sk/lukas.mp3
public/audio/ro/alina.mp3
public/audio/bg/<voice>.mp3
public/audio/hr/<voice>.mp3
public/audio/sr/<voice>.mp3
public/audio/sl/<voice>.mp3
```

If these files are missing, the player will still render, but audio will fail to load (404).

## GitHub Pages
This project is designed to work on GitHub Pages **without server rewrites** by using:
- per-locale entrypoints (`/lt/index.html`, etc.)
- root auto-detect redirect (`/` → `/<locale>/`)
- relative navigation between locales
- relative asset paths (Vite `base: './'`)

If you use a custom domain root (like `player.garsio.io`), the same build works.

