// Post-build step: render every static entry page to HTML so crawlers (and users
// before JS loads) get the full content. The client then hydrates the markup.
//
// Runs after `vite build`; uses Vite's SSR module loader so the same TSX source
// renders without a second build configuration.
import fs from 'node:fs'
import path from 'node:path'
import { createServer } from 'vite'

const root = path.resolve(import.meta.dirname, '..')
const dist = path.join(root, 'dist')
const LOCALES = ['en', 'lt', 'cs', 'sk', 'hu', 'ro', 'bg', 'hr', 'sr', 'sl', 'de', 'es', 'da', 'sv', 'no', 'fi']

const pages = [
  ...LOCALES.map((locale) => ({ file: `${locale}/index.html`, locale })),
  { file: 'terms/index.html', locale: 'lt', page: 'terms' },
  { file: 'privacy/index.html', locale: 'lt', page: 'privacy' },
]

const vite = await createServer({
  root,
  logLevel: 'error',
  server: { middlewareMode: true },
  appType: 'custom',
})

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.tsx')
  let done = 0
  for (const p of pages) {
    const file = path.join(dist, p.file)
    let html = fs.readFileSync(file, 'utf8')
    const marker = '<div id="root"></div>'
    if (!html.includes(marker)) throw new Error(`Root marker not found in ${p.file}`)

    const { html: app, jsonLd } = render({ locale: p.locale, page: p.page })
    html = html.replace(marker, `<div id="root">${app}</div>`)
    if (jsonLd) {
      html = html.replace(
        '</head>',
        `    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n  </head>`,
      )
    }
    fs.writeFileSync(file, html)
    done++
  }
  console.log(`Prerendered ${done} pages into dist/`)
} finally {
  await vite.close()
}
