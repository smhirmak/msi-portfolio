# Muhammed Semih Irmak — Portfolio

English/Turkish portfolio built with Next.js 16, React 19 and Tailwind CSS 4. Tailwind's CSS-first theme in `src/styles/globals.css` is the single source for colors and shared UI styles.

## Local development

Use Node.js 22.13 or newer.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

The default URL is `http://localhost:3000`. English is at `/`, Turkish at `/tr`. The header language selector preserves the current section; refreshing retains the language through its URL. A `NEXT_LOCALE` cookie records the selected language. The intro lasts 850ms and appears only once per browser storage; reduced-motion users and direct section links skip it.

## CAPTCHA and contact form

Set `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` to the public reCAPTCHA **v2 checkbox** key. Add the production hostname (and localhost if testing with a real key) in Google's allowed domains. In the existing EmailJS template, enable **reCAPTCHA V2 verification** and enter the matching secret there. The secret must never be added to this repository or any `NEXT_PUBLIC_` variable.

EmailJS service/template IDs and its public key can be overridden with the variables in `.env.example`. Production builds without a CAPTCHA key show the direct email fallback and refuse to send unchecked form submissions. Development without a key uses Google's public test key; live EmailJS verification still needs matching dashboard configuration. Restart Next.js or rebuild after changing public environment variables.

## Checks

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

For browser checks, start the built app and use the locally installed Google Chrome:

```sh
npm run start
npm run test:e2e
npm run audit:performance
```

`PLAYWRIGHT_BASE_URL` and `AUDIT_URL` can target another local port. If Chrome is not installed, install Playwright Chromium, remove `channel: 'chrome'` from the Playwright configuration and set `CHROME_PATH` for the performance audit as needed. Browser tests mock external CAPTCHA and EmailJS requests; they send no messages.

Lighthouse HTML/JSON reports are written to ignored `artifacts/`. Current Core Web Vitals are available at `window.__portfolioVitals` and emitted as `portfolio:web-vitals` events. These measurements are kept locally; no analytics service is configured.

## Assets and content

Project/skill logos use compact WebP or original SVG files. Regenerate optimized logos and bilingual Open Graph images with `node scripts/prepare-assets.mjs`. Original supplied images are preserved. Poppins is self-hosted as WOFF2 with Turkish glyph coverage; its OFL license is in `src/fonts/OFL.txt`.

Localized interface and CV descriptions are in `src/i18n/messages.ts`; project links, logos and skills are in `src/data/constants.ts`. Shared brand information is defined by `Bio`.

See `docs/IMPROVEMENTS.md` for the deferred visual design iteration and confidential project boundaries.
