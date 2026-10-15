import lighthouse from 'lighthouse';
import desktopConfig from 'lighthouse/core/config/desktop-config.js';
import { launch } from 'chrome-launcher';
import { mkdir, writeFile } from 'node:fs/promises';

const url = process.env.AUDIT_URL || 'http://127.0.0.1:3000/';
const chrome = await launch({ chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu'] });
try {
  await mkdir('artifacts', { recursive: true });
  const modes = process.env.AUDIT_FORM_FACTOR
    ? [process.env.AUDIT_FORM_FACTOR]
    : ['mobile', 'desktop'];
  for (const mode of modes) {
    if (mode !== 'mobile' && mode !== 'desktop') throw new Error('Unknown audit form factor');
    const report = await lighthouse(
      url,
      {
        port: chrome.port,
        output: 'html',
        logLevel: 'error',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo']
      },
      mode === 'desktop' ? desktopConfig : undefined
    );
    if (report.lhr.configSettings.formFactor !== mode)
      throw new Error('Audit used the wrong device profile');
    await writeFile(`artifacts/lighthouse-${mode}.html`, report.report);
    await writeFile(`artifacts/lighthouse-${mode}.json`, JSON.stringify(report.lhr, null, 2));
    const scores = Object.fromEntries(
      Object.entries(report.lhr.categories).map(([key, value]) => [
        key,
        Math.round(value.score * 100)
      ])
    );
    const metrics = Object.fromEntries(
      ['largest-contentful-paint', 'cumulative-layout-shift', 'total-blocking-time'].map((id) => [
        id,
        report.lhr.audits[id].displayValue
      ])
    );
    console.log(JSON.stringify({ mode, scores, metrics }));
  }
} finally {
  await chrome.kill();
}
