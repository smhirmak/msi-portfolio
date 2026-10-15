import sharp from 'sharp';
import { mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const logos = [
  'projects/tra-ui-kit.png',
  'projects/tra-ui-base.png',
  'projects/kairos-logo.png',
  'projects/tera-oze-guvenlik-logo.png',
  'skills/react.png',
  'skills/ts.png',
  'skills/js.png',
  'skills/html.png',
  'skills/css.png',
  'skills/tailwind.png',
  'skills/zustand.png',
  'skills/formik.png',
  'skills/signalr.jpg',
  'skills/rest-api.png',
  'skills/nodejs.png',
  'skills/drizzle.png',
  'skills/git.png',
  'skills/iis.png'
];

// Keep source images; generate compact variants without cropping or enlarging.
for (const logo of logos) {
  const input = path.join(root, 'public/logos', logo);
  const output = input.replace(/\.(png|jpg)$/u, '.webp');
  const maxSize = logo.startsWith('projects/') ? 600 : 96;
  const original = await sharp(input).metadata();
  await sharp(input)
    .rotate()
    .resize({ width: maxSize, height: maxSize, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 90, alphaQuality: 100, effort: 6 })
    .toFile(output);
  if ((await stat(output)).size >= (await stat(input)).size) {
    await sharp(input)
      .rotate()
      .resize({ width: maxSize, height: maxSize, fit: 'inside', withoutEnlargement: true })
      .webp({ lossless: true, effort: 6 })
      .toFile(output);
  }
  const optimized = await sharp(output).metadata();
  if (original.hasAlpha && !optimized.hasAlpha) {
    throw new Error(`Transparency lost: ${logo}`);
  }
  console.log(
    JSON.stringify({
      from: `/logos/${logo}`,
      to: `/logos/${logo.replace(/\.(png|jpg)$/u, '.webp')}`,
      bytesBefore: (await stat(input)).size,
      bytesAfter: (await stat(output)).size,
      dimensions: `${optimized.width}x${optimized.height}`,
      hasAlpha: optimized.hasAlpha
    })
  );
}

await mkdir(path.join(root, 'public/og'), { recursive: true });
for (const [locale, title] of Object.entries({
  en: 'Frontend-Focused Software Engineer',
  tr: 'Frontend Odaklı Yazılım Mühendisi'
})) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
        <stop stop-color="#ef4444"/><stop offset="1" stop-color="#60a5fa"/>
      </linearGradient>
      <radialGradient id="blue"><stop stop-color="#1e40af" stop-opacity=".32"/><stop offset="1" stop-color="#020617" stop-opacity="0"/></radialGradient>
      <radialGradient id="red"><stop stop-color="#b91c1c" stop-opacity=".19"/><stop offset="1" stop-color="#020617" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="1200" height="630" fill="#020617"/>
    <ellipse cx="1060" cy="70" rx="390" ry="330" fill="url(#blue)"/>
    <ellipse cx="70" cy="590" rx="380" ry="250" fill="url(#red)"/>
    <rect x="32" y="32" width="1136" height="566" rx="24" fill="none" stroke="#334155" stroke-opacity=".65"/>
    <rect x="88" y="100" width="56" height="5" rx="2.5" fill="url(#accent)"/>
    <g font-family="Arial, sans-serif">
      <text x="163" y="111" fill="#cbd5e1" font-size="20" letter-spacing="5">PORTFOLIO</text>
      <text x="88" y="230" fill="#f8fafc" font-size="64" font-weight="700" letter-spacing="-1.5">Muhammed Semih Irmak</text>
      <text x="88" y="306" fill="#cbd5e1" font-size="37">${title}</text>
      <text x="88" y="376" fill="#93c5fd" font-size="27" font-weight="600">React · Next.js · TypeScript</text>
      <path d="M88 436 H1112" stroke="#334155"/>
      <text x="88" y="528" fill="#e2e8f0" font-size="26">www.semihirmak.com</text>
      <text x="1112" y="528" text-anchor="end" fill="#94a3b8" font-size="21" letter-spacing="3">${locale.toUpperCase()}</text>
    </g>
    <rect x="88" y="593" width="1024" height="5" rx="2.5" fill="url(#accent)"/>
  </svg>`;
  const output = path.join(root, 'public/og', `${locale}.png`);
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(output);
  const metadata = await sharp(output).metadata();
  if (metadata.width !== 1200 || metadata.height !== 630) {
    throw new Error(`Unexpected OG dimensions: ${locale}`);
  }
  console.log(
    JSON.stringify({
      og: `/og/${locale}.png`,
      bytes: (await stat(output)).size,
      dimensions: '1200x630'
    })
  );
}
