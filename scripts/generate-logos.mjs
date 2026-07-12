import { execSync, spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const resvg = 'npx --yes @resvg/resvg-js-cli'

function render(svgPath, pngPath, width) {
  const input = path.join(root, svgPath)
  const output = path.join(root, pngPath)
  const widthArg = width ? ` --fit-width ${width}` : ''
  execSync(`${resvg} "${input}" "${output}"${widthArg}`, { stdio: 'inherit' })
}

function writeFaviconIco() {
  const result = spawnSync(
    'npx',
    ['--yes', 'png-to-ico', 'public/favicon-16.png', 'public/favicon-32.png', 'public/favicon-48.png'],
    { cwd: root, encoding: 'buffer', shell: true },
  )
  if (result.status !== 0) {
    throw new Error(result.stderr?.toString() ?? 'png-to-ico failed')
  }
  fs.writeFileSync(path.join(root, 'public/favicon.ico'), result.stdout)
}

try {
  render('public/logo.svg', 'public/logo.png', 496)
  render('public/logo-og.svg', 'public/logo-og.png', 1200)
  render('public/favicon.svg', 'public/favicon-32.png', 32)
  render('public/favicon.svg', 'public/favicon-16.png', 16)
  render('public/favicon.svg', 'public/favicon-48.png', 48)
  render('public/favicon.svg', 'public/favicon.png', 32)
  writeFaviconIco()
  console.log('Logo PNG assets generated')
} catch (error) {
  console.warn('Could not generate PNG logos (resvg unavailable). SVG logos are still used on the site.')
  console.warn(error?.message ?? error)
}
