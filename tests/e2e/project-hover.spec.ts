import { test, expect } from '@playwright/test';

test('project hover remains stable at card edges and during rapid transitions', async ({
  page
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.route('https://www.google.com/recaptcha/**', (route) => route.abort());
  await page.goto('/#projects');
  await page.evaluate(() => document.fonts.ready);
  await expect
    .poll(() =>
      page.locator('#projects').evaluate((element) => {
        const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop);
        return Math.abs(element.getBoundingClientRect().top - offset);
      })
    )
    .toBeLessThan(1);
  const background = page.getByTestId('project-hover-background');
  const cards = page.locator('[data-project-card]');
  await expect(background).toHaveCount(1);
  expect(await background.evaluate((element) => getComputedStyle(element).pointerEvents)).toBe(
    'none'
  );
  await background.evaluate((element) => element.setAttribute('data-persist-test', 'same-node'));
  const first = (await cards.nth(0).boundingBox())!;
  const second = (await cards.nth(1).boundingBox())!;
  const points = [
    { x: first.x + first.width - 3, y: first.y + 60, index: '0' },
    { x: second.x + 3, y: second.y + 60, index: '1' }
  ];
  await page.mouse.move(points[0].x, points[0].y);
  await expect
    .poll(() => background.evaluate((element) => Number(getComputedStyle(element).opacity)))
    .toBeGreaterThan(0.99);

  for (let i = 0; i < 16; i++) {
    const point = points[i % 2];
    await page.mouse.move(point.x, point.y);
    const sample = await page.evaluate(
      ({ x, y }) =>
        new Promise<{ opacity: number; card: string | null }>((resolve) => {
          requestAnimationFrame(() => {
            const highlight = document.querySelector('[data-testid="project-hover-background"]')!;
            resolve({
              opacity: Number(getComputedStyle(highlight).opacity),
              card:
                document
                  .elementFromPoint(x, y)
                  ?.closest('[data-project-card]')
                  ?.getAttribute('data-project-card') || null
            });
          });
        }),
      point
    );
    expect(sample.opacity).toBeGreaterThan(0.99);
    expect(sample.card).toBe(point.index);
    await expect(background).toHaveAttribute('data-persist-test', 'same-node');
    await expect(background).toHaveCount(1);
  }
  await expect
    .poll(async () => Math.abs((await background.boundingBox())!.x - second.x))
    .toBeLessThan(1);

  await page.setViewportSize({ width: 1100, height: 1000 });
  await cards.nth(1).hover({ position: { x: 3, y: 60 } });
  await expect
    .poll(async () =>
      Math.abs((await background.boundingBox())!.width - (await cards.nth(1).boundingBox())!.width)
    )
    .toBeLessThan(1);
  await expect(background).toHaveAttribute('data-persist-test', 'same-node');

  await page.mouse.move(2, 2);
  await expect
    .poll(() => background.evaluate((element) => Number(getComputedStyle(element).opacity)))
    .toBe(0);
  await cards.first().getByRole('link').first().focus();
  await expect(background).toHaveAttribute('data-active', 'true');
  await expect
    .poll(async () =>
      Math.abs((await background.boundingBox())!.x - (await cards.first().boundingBox())!.x)
    )
    .toBeLessThan(1);
  await page.locator('header select').focus();
  await expect(background).toHaveAttribute('data-active', 'false');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(background).toHaveCount(0);
});
