# Verification — 14 October 2026

## Completed checks

- Production build: Next.js 16.4.1, React 19.3.1, Tailwind CSS 4.3.3.
- TypeScript and ESLint: passed.
- Vitest: 7 passed, covering first-visit persistence, Strict Mode, reduced motion, direct section links and localized validation.
- Playwright: 14 passed across desktop/mobile, covering header offsets, native animated scrolling, section-preserving language changes, PDF delivery, CAPTCHA gating, token forwarding, success/reset, failed-send value preservation and keyboard navigation.
- Axe: no automatic WCAG A/AA violations in tested desktop/mobile pages.
- Visual checks: English desktop, Turkish mobile and Turkish 320px skills layout; no horizontal overflow.
- EN/TR pages, sharing images, robots and sitemap: HTTP 200.
- Production dependency audit: 0 reported vulnerabilities.

## Local Lighthouse results — baseline before animation restoration

| Profile | Performance | Accessibility | Best practices | SEO |  LCP | CLS | TBT |
| ------- | ----------: | ------------: | -------------: | --: | ---: | --: | --: |
| Mobile  |          99 |           100 |            100 | 100 | 2.0s |   0 | 0ms |
| Desktop |         100 |           100 |            100 | 100 | 0.6s |   0 | 0ms |

Reports are generated in ignored `artifacts/lighthouse-mobile.html` and `artifacts/lighthouse-desktop.html`, with JSON data alongside. The script explicitly selects and verifies the device profile. Measurements use the local production server and simulated network conditions, so deployed results can differ. Lighthouse does not provide real-visitor INP; the application's Web Vitals hook records browser interaction metrics locally for later monitoring.

## Asset reductions

18 used raster logos: 2,479,291 bytes to 202,546 bytes, 91.8% smaller. Original supplied files retained. Two Poppins fonts: 317,628 bytes of source TTF to 102,956 bytes of WOFF2, 67.6% smaller, with Turkish/full Unicode mapping retained. Social images are 1200×630 PNGs in both languages.

## External-service and tooling limits

CAPTCHA and email requests are mocked in browser tests; no real messages were sent. Live service verification depends on the allowed domain and matching CAPTCHA secret in the EmailJS dashboard. The provided public site key is configured in ignored `.env.local`; the production hosting environment must also define it when building. No CAPTCHA secret is stored in the project.

The development-tool audit still reports 13 high-severity findings in dependency chains of the current lint/performance tools (braces, extract-zip and basic-ftp). The production dependency audit is clean. Keep these development-tool advisories under review as upstream fixes become available.

## Deferred work

The next suggested iteration is visual consistency across accent colors and effects, as recorded in `docs/IMPROVEMENTS.md`. Project detail pages and private product imagery remain outside this update.

## Animation restoration

Restored the hero typing/deleting loop, animated project lamp and heading, GitHub moving border, Skills focus effect and education timeline. Native smooth section navigation and reduced-motion support remain enabled. Added three typewriter unit checks plus desktop/mobile motion regression checks. Build, lint and TypeScript passed; all 10 unit tests and 16 browser checks passed across the full run and targeted rerun.
