# `player.garsio.io` — static multilingual demo

Static one-page multilingual demo landing page for the **Garsio** website article audio player.

## Design
The page follows the Claude Design file **"Garsio Player"** (`Garsio Player.dc.html`): cream `#FAF5EE` background,
orange `#F4622E` accent, dark `#211711` hero/CTA panels, **Bricolage Grotesque** headings and **Instrument Sans** body text.
Design tokens and component classes live in `src/index.css`; page sections (nav, hero with live demo, setup steps,
monetisation, pricing calculator, trial CTA, Garsio TTS cross-promo, FAQ, footer) are composed in `src/App.tsx`.

Legal pages (`/terms/`, `/privacy/`) use the "Garsio Terms" / "Garsio Privacy" layouts from the same design
(`src/components/LegalPage.tsx`). Their text is the original Lithuanian from garseja.lt, stored as structured
content in `src/legal/terms.ts` and `src/legal/privacy.ts` (regenerate from the source pages rather than editing by hand).

Local Claude Design exports go into `export/` or `export */` (gitignored). Only the raw `Garsio Player.dc.html` source is needed;
the four "Hear how it sounds" promo samples are copied to `public/audio/promo/`.

Landing-page copy for the new sections is in `src/locales/siteCopy.ts`. Full translations exist for `en` and `lt`;
other locales reuse their existing hero / player / trial strings and fall back to English for the rest.

## Requirements
- Node.js **20.11+** (this repo is pinned to Vite 5 for compatibility).

## Setup
```bash
npm install
npm run dev
```

## Trial request form (Web3Forms)
The inline **“Start free trial”** form (website + email) POSTs to [Web3Forms](https://web3forms.com/).

1. Create an access key in the Web3Forms dashboard.
2. Put it in a local env file (not committed):

Create `.env` in the project root (gitignored — do not commit) with:

```bash
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

3. For production builds (e.g. GitHub Actions), define the same variable in the build environment so Vite can embed it at build time.

For this repo’s GitHub Pages workflow, add a repository secret named **`VITE_WEB3FORMS_ACCESS_KEY`** (same value as locally). The deploy workflow passes it into `npm run build`.

## Analytics (Umami, cookieless)
Traffic and behaviour are measured with [Umami](https://umami.is) — no cookies, no personal data, so no consent banner.
The tracker only loads when `VITE_UMAMI_WEBSITE_ID` is set at build time:

- Locally: add `VITE_UMAMI_WEBSITE_ID=<website id>` to `.env`.
- GitHub Pages: add a repository **variable** (Settings → Secrets and variables → Actions → Variables) named
  `VITE_UMAMI_WEBSITE_ID`. The id is public, so it does not need to be a secret.
- Self-hosted Umami: also set `VITE_UMAMI_SCRIPT_URL`.

Page views (with referrer and `utm_*`) are automatic. Custom events (see `src/lib/analytics.ts` callers):
`demo_play`, `demo_pause`, `demo_ended`, `demo_voice_switch`, `promo_sample_play`, `calc_change`, `cta_click`
(position: nav / hero / calculator), `promo_click`, `contact_click`, `lang_switch`, `faq_open`, `trial_submit`,
`trial_submit_error`. Each page load is tagged with the locale (or `terms` / `privacy`) via `data-tag`.

**Attributing traffic from installed players:** links or redirects that send visitors here from publisher sites
should carry UTM parameters, e.g. `https://player.garsio.io/lt/?utm_source=player&utm_medium=widget&utm_campaign=<publisher-domain>`.
The browser referrer alone is unreliable from inside iframes.

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
- … (one per locale)
- `/terms/index.html`, `/privacy/index.html` (Lithuanian legal pages)

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
public/audio/promo/{ads,learning,story,news}.mp3   # Garsio TTS cross-promo samples
```

If these files are missing, the player will still render, but audio will fail to load (404).

## GitHub Pages
This project is designed to work on GitHub Pages **without server rewrites** by using:
- per-locale entrypoints (`/lt/index.html`, etc.)
- root auto-detect redirect (`/` → `/<locale>/`)
- relative navigation between locales
- relative asset paths (Vite `base: './'`)

If you use a custom domain root (like `player.garsio.io`), the same build works.

