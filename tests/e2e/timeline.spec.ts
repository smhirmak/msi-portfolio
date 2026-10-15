import { test, expect, type Page } from '@playwright/test';

async function timelineGeometry(page: Page, section = 'experience') {
  return page.locator(`#${section}`).evaluate((element) => {
    const track = element.querySelector('[data-timeline-track]')!.getBoundingClientRect();
    const progress = element.querySelector('[data-timeline-progress]')!;
    return {
      fill: progress.getBoundingClientRect().height / track.height,
      opacity: Number(getComputedStyle(progress).opacity),
      alignment: Array.from(element.querySelectorAll('[data-timeline-marker]')).map((marker) => {
        const rect = marker.getBoundingClientRect();
        return Math.abs(rect.x + rect.width / 2 - (track.x + track.width / 2));
      })
    };
  });
}

test('timeline grows and retracts with scrolling, with aligned sticky markers', async ({
  page
}) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.addInitScript(() => localStorage.setItem('msi-intro-seen-v1', '1'));
  await page.route('https://www.google.com/recaptcha/**', (route) => route.abort());

  for (const locale of ['/', '/tr']) {
    await page.goto(locale);
    await page.evaluate(() => document.fonts.ready);
    const range = await page
      .locator('#experience > div')
      .first()
      .evaluate((element) => {
        const rect = element.getBoundingClientRect();
        const top = window.scrollY + rect.top;
        return {
          start: top - window.innerHeight * 0.1,
          end: top + rect.height - window.innerHeight * 0.5
        };
      });
    for (const fraction of [0, 0.25, 0.6, 1, 0.25]) {
      await page.evaluate(
        (top) => window.scrollTo({ top, behavior: 'instant' }),
        range.start + (range.end - range.start) * fraction
      );
      await expect
        .poll(async () => Math.abs((await timelineGeometry(page)).fill - fraction))
        .toBeLessThan(0.015);
      const geometry = await timelineGeometry(page);
      expect(geometry.alignment.every((distance) => distance < 1)).toBe(true);
      if (fraction > 0.1) expect(geometry.opacity).toBe(1);
      else expect(geometry.opacity).toBeLessThan(0.02);
    }

    const firstMarker = page.locator('#experience [data-timeline-marker]').first();
    expect((await firstMarker.boundingBox())!.y).toBeGreaterThanOrEqual(104);
    expect((await firstMarker.boundingBox())!.y).toBeLessThan(110);

    await page.emulateMedia({ reducedMotion: 'reduce' });
    await expect.poll(async () => (await timelineGeometry(page)).fill).toBe(1);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    expect((await timelineGeometry(page)).fill).toBe(1);
    expect((await timelineGeometry(page, 'education')).fill).toBe(1);
    expect((await timelineGeometry(page, 'education')).alignment.every((value) => value < 1)).toBe(
      true
    );
    await page.emulateMedia({ reducedMotion: 'no-preference' });
  }

  // The shared component must also move forward for short timelines and update
  // its scroll range when the viewport changes.
  for (const height of [1000, 700]) {
    await page.setViewportSize({ width: page.viewportSize()!.width, height });
    const range = await page
      .locator('#education > div')
      .first()
      .evaluate((element) => {
        const rect = element.getBoundingClientRect();
        const top = window.scrollY + rect.top;
        return {
          start: top - window.innerHeight * 0.8,
          end: top + rect.height - window.innerHeight * 0.5
        };
      });
    expect(range.end).toBeGreaterThan(range.start);
    for (const fraction of [0, 0.5, 1]) {
      await page.evaluate(
        (top) => window.scrollTo({ top, behavior: 'instant' }),
        range.start + (range.end - range.start) * fraction
      );
      await expect
        .poll(async () => Math.abs((await timelineGeometry(page, 'education')).fill - fraction))
        .toBeLessThan(0.015);
      expect(
        (await timelineGeometry(page, 'education')).alignment.every((value) => value < 1)
      ).toBe(true);
    }
  }
});

test('education timeline animates on entry and is visible after header navigation', async ({
  page
}, testInfo) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.addInitScript(() => localStorage.setItem('msi-intro-seen-v1', '1'));
  await page.route('https://www.google.com/recaptcha/**', (route) => route.abort());

  for (const [locale, label] of [
    ['/', 'Education'],
    ['/tr', 'Eğitim']
  ]) {
    await page.goto(locale);
    await page.evaluate(() => document.fonts.ready);
    // At half a viewport the title and card are visible, so the colored line
    // should already be growing rather than waiting until they pass the header.
    await page.locator('#education').evaluate((element) => {
      window.scrollTo({
        top: window.scrollY + element.getBoundingClientRect().top - window.innerHeight * 0.5,
        behavior: 'instant'
      });
    });
    await expect
      .poll(async () => (await timelineGeometry(page, 'education')).fill)
      .toBeGreaterThan(0.1);
    expect((await timelineGeometry(page, 'education')).fill).toBeLessThan(1);

    if (testInfo.project.name === 'mobile') {
      await page.locator('header button[aria-expanded]').click();
    }
    await page
      .locator('header')
      .getByRole('link', { name: label, exact: true })
      .filter({ visible: true })
      .click();
    await expect
      .poll(() =>
        page
          .locator('#education')
          .evaluate((element) =>
            Math.abs(
              element.getBoundingClientRect().top -
                parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)
            )
          )
      )
      .toBeLessThan(1);
    const geometry = await timelineGeometry(page, 'education');
    expect(geometry.fill).toBeGreaterThan(0.8);
    expect(geometry.opacity).toBe(1);
    expect(geometry.alignment.every((distance) => distance < 1)).toBe(true);
  }
});
