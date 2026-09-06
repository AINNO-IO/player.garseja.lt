import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const SITE = 'https://player.garsio.io'
const LOCALES = ['en', 'lt', 'cs', 'sk', 'hu', 'ro', 'bg', 'hr', 'sr', 'sl', 'de', 'es', 'da', 'sv', 'no', 'fi']
const OG_IMAGE = `${SITE}/logo-og.png`
const SEO = JSON.parse(fs.readFileSync(path.join(root, 'src/locales/seo.json'), 'utf8'))

const OG_LOCALE = {
  en: 'en_US',
  lt: 'lt_LT',
  cs: 'cs_CZ',
  sk: 'sk_SK',
  hu: 'hu_HU',
  ro: 'ro_RO',
  bg: 'bg_BG',
  hr: 'hr_HR',
  sr: 'sr_RS',
  sl: 'sl_SI',
  de: 'de_DE',
  es: 'es_ES',
  da: 'da_DK',
  sv: 'sv_SE',
  no: 'nb_NO',
  fi: 'fi_FI',
}

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}

function truncate(text, max = 155) {
  const s = String(text).trim()
  if (s.length <= max) return s
  return `${s.slice(0, max - 1).trimEnd()}…`
}

const FAVICON_LINKS_LOCALE = `    <link rel="icon" href="../favicon.svg" type="image/svg+xml" />
    <link rel="icon" href="../favicon.ico" sizes="48x48" type="image/x-icon" />
    <link rel="icon" href="../favicon-32.png" sizes="32x32" type="image/png" />
    <link rel="icon" href="../favicon-16.png" sizes="16x16" type="image/png" />
    <link rel="apple-touch-icon" href="../favicon-48.png" />`

const FAVICON_LINKS_ROOT = `    <link rel="icon" href="./favicon.svg" type="image/svg+xml" />
    <link rel="icon" href="./favicon.ico" sizes="48x48" type="image/x-icon" />
    <link rel="icon" href="./favicon-32.png" sizes="32x32" type="image/png" />
    <link rel="icon" href="./favicon-16.png" sizes="16x16" type="image/png" />
    <link rel="apple-touch-icon" href="./favicon-48.png" />`

function hreflangLinks() {
  return LOCALES.map(
    (locale) => `    <link rel="alternate" hreflang="${locale}" href="${SITE}/${locale}/" />`,
  ).join('\n')
}

function jsonLd({ locale, title, description, url }) {
  return JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${SITE}/#website`,
          url: `${SITE}/`,
          name: 'Garsio',
          publisher: { '@id': `${SITE}/#organization` },
          inLanguage: LOCALES,
        },
        {
          '@type': 'Organization',
          '@id': `${SITE}/#organization`,
          name: 'Garsio',
          url: 'https://garsio.io/',
          email: 'info@ainno.io',
          legalName: 'MB „AI sprendimai“',
          identifier: '306416097',
          logo: { '@type': 'ImageObject', url: `${SITE}/logo.png` },
        },
        {
          '@type': 'WebPage',
          '@id': `${url}#webpage`,
          url,
          name: title,
          description,
          isPartOf: { '@id': `${SITE}/#website` },
          inLanguage: locale,
          about: { '@id': `${SITE}/#software` },
        },
        {
          '@type': 'SoftwareApplication',
          '@id': `${SITE}/#software`,
          name: 'Garsio Article Audio Player',
          applicationCategory: 'MultimediaApplication',
          operatingSystem: 'Web',
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '20',
            priceCurrency: 'EUR',
            description: 'From 20 € per month, billed monthly or yearly. Free 7-day trial.',
          },
        },
      ],
    },
    null,
    2,
  )
}

function localeHead(locale, title, description) {
  const url = `${SITE}/${locale}/`
  const ogLocale = OG_LOCALE[locale]
  const alternates = LOCALES.filter((l) => l !== locale)
    .map((l) => `    <meta property="og:locale:alternate" content="${OG_LOCALE[l]}" />`)
    .join('\n')

  return `    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeAttr(title)}</title>
    <meta name="description" content="${escapeAttr(description)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${url}" />
${hreflangLinks()}
    <link rel="alternate" hreflang="x-default" href="${SITE}/en/" />
${FAVICON_LINKS_LOCALE}
    <meta name="theme-color" content="#FAF5EE" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Garsio" />
    <meta property="og:locale" content="${ogLocale}" />
${alternates}
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${escapeAttr(title)}" />
    <meta property="og:description" content="${escapeAttr(description)}" />
    <meta property="og:image" content="${OG_IMAGE}" />
    <meta property="og:image:alt" content="Garsio logo" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttr(title)}" />
    <meta name="twitter:description" content="${escapeAttr(description)}" />
    <meta name="twitter:image" content="${OG_IMAGE}" />
    <script type="application/ld+json">${jsonLd({ locale, title, description, url })}</script>`
}

function rootHead() {
  return `    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Garsio — Article audio player</title>
    <meta
      name="description"
      content="Multilingual demo of the Garsio article audio player for publishers. Choose your language to preview the player."
    />
    <meta name="robots" content="noindex, follow" />
    <link rel="canonical" href="${SITE}/" />
${hreflangLinks()}
    <link rel="alternate" hreflang="x-default" href="${SITE}/en/" />
${FAVICON_LINKS_ROOT}
    <meta name="theme-color" content="#FAF5EE" />`
}

function patchLocaleHtml(locale) {
  const file = path.join(root, locale, 'index.html')
  let html = fs.readFileSync(file, 'utf8')
  const seo = SEO[locale]
  if (!seo?.title || !seo?.description) throw new Error(`Missing title/description for ${locale} in src/locales/seo.json`)
  const title = seo.title
  const description = truncate(seo.description, 160)
  const head = localeHead(locale, title, description)
  html = html.replace(/<head>[\s\S]*?<\/head>/, `<head>\n${head}\n  </head>`)
  html = html.replace(/<html lang="[^"]*">/, `<html lang="${locale}">`)
  fs.writeFileSync(file, html)
}

function patchRootHtml() {
  const file = path.join(root, 'index.html')
  let html = fs.readFileSync(file, 'utf8')
  const redirectScript = html.match(/<script>[\s\S]*?<\/script>/)?.[0]
  if (!redirectScript) throw new Error('Missing redirect script in root index.html')
  html = html.replace(
    /<head>[\s\S]*?<\/head>/,
    `<head>\n${rootHead()}\n\n    ${redirectScript}\n  </head>`,
  )
  fs.writeFileSync(file, html)
}

function patchSitemap() {
  const today = new Date().toISOString().slice(0, 10)
  const file = path.join(root, 'public/sitemap.xml')
  let xml = fs.readFileSync(file, 'utf8')
  xml = xml.replace(/<lastmod>[^<]+<\/lastmod>/g, `<lastmod>${today}</lastmod>`)
  fs.writeFileSync(file, xml)
}

for (const locale of LOCALES) patchLocaleHtml(locale)
patchRootHtml()
patchSitemap()
console.log('SEO head tags applied for', LOCALES.length, 'locales')
