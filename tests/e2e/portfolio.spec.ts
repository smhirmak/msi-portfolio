import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

async function mockCaptcha(page: Page) {
  await page.route('https://www.google.com/recaptcha/api.js**', (route) =>
    route.fulfill({
      contentType: 'application/javascript',
      body: `window.grecaptcha = {
    ready: function(callback) { callback(); },
    render: function(container, options) {
      var button = document.createElement('button'); button.type = 'button'; button.textContent = 'Complete test CAPTCHA';
      button.onclick = function() { options.callback('browser-test-token'); }; container.appendChild(button); return 0;
    }, reset: function() {}
  };`
    })
  );
}

test.beforeEach(async ({ page }) => {
  await mockCaptcha(page);
});

test('localized SEO metadata and profile data are present without JavaScript', async ({
  browser
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  for (const [path, locale] of [
    ['/', 'en'],
    ['/tr', 'tr']
  ]) {
    await page.goto(path);
    const canonical = `https://www.semihirmak.com${path}`;
    await expect(page.locator('html')).toHaveAttribute('lang', locale);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', canonical);
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
    const schema = JSON.parse(await page.locator('script[type="application/ld+json"]').innerText());
    expect(schema).toMatchObject({
      '@type': 'ProfilePage',
      url: canonical,
      inLanguage: locale,
      mainEntity: { '@type': 'Person', name: 'Muhammed Semih Irmak' }
    });
    await expect(page.locator('link[hreflang="en"]')).toHaveAttribute(
      'href',
      'https://www.semihirmak.com/'
    );
    await expect(page.locator('link[hreflang="tr"]')).toHaveAttribute(
      'href',
      'https://www.semihirmak.com/tr'
    );
  }
  await context.close();
});

test('navigation reaches headings below the sticky header with animated scrolling', async ({
  page
}, testInfo) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Muhammed Semih Irmak');
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe(
    'smooth'
  );
  for (const [id, label] of [
    ['projects', 'Projects'],
    ['experience', 'Experience'],
    ['skills', 'Skills'],
    ['education', 'Education'],
    ['contact', 'Contact']
  ]) {
    if (testInfo.project.name === 'mobile')
      await page.getByRole('button', { name: 'Open navigation' }).click();
    await page
      .locator('header')
      .getByRole('link', { name: label, exact: true })
      .filter({ visible: true })
      .click();
    await expect
      .poll(async () =>
        page
          .locator(`#${id}`)
          .evaluate((element) => Math.round(element.getBoundingClientRect().top))
      )
      .toBeGreaterThanOrEqual(80);
    await expect
      .poll(async () =>
        page
          .locator(`#${id}`)
          .evaluate((element) => Math.round(element.getBoundingClientRect().top))
      )
      .toBeLessThan(150);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)
    ).toBe(true);
  }
});

test('language switch translates page and preserves the current section', async ({ page }) => {
  await page.goto('/#skills');
  await page.getByLabel('Change language').selectOption('tr');
  await expect(page).toHaveURL(/\/tr#skills$/);
  await expect(page.getByRole('heading', { name: 'Yetkinlikler', exact: true })).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('lang', 'tr');
  await expect(page.locator('head meta[property="og:image"]')).toHaveAttribute(
    'content',
    /og\/tr\.png$/
  );
  await page.reload();
  await expect(page.getByLabel('Dili değiştir')).toHaveValue('tr');
});

test('invalid form focuses the first error and valid form requires CAPTCHA', async ({ page }) => {
  await page.goto('/#contact');
  await page.getByRole('button', { name: 'Send Message' }).click();
  await expect(page.getByLabel('Your Name')).toBeFocused();
  await expect(page.getByLabel('Your Name')).toHaveAttribute('aria-invalid', 'true');
  await expect(page.getByLabel('Your Name')).toHaveAttribute('aria-describedby', 'name-error');
  await page.getByLabel('Your Name').fill('Test Visitor');
  await page.getByLabel('Your Email').fill('test@example.com');
  await page.getByLabel('Subject', { exact: true }).fill('Test subject');
  await page.getByLabel('Message', { exact: true }).fill('Test message');
  await page.getByRole('button', { name: 'Send Message' }).click();
  await expect(
    page.getByText('Please complete the security verification.', { exact: true })
  ).toBeVisible();
  let sentToken = '';
  await page.route('https://api.emailjs.com/api/v1.0/email/send', async (route) => {
    const data = route.request().postDataJSON();
    sentToken = data.template_params['g-recaptcha-response'];
    await route.fulfill({ status: 200, body: 'OK' });
  });
  await page.getByRole('button', { name: 'Complete test CAPTCHA' }).click();
  await page.getByRole('button', { name: 'Send Message' }).click();
  await expect(page.getByText('Your message was sent successfully.')).toBeVisible();
  expect(sentToken).toBe('browser-test-token');
  await expect(page.getByLabel('Your Name')).toHaveValue('');
});

test('PDF is served and reduced-motion preference disables smooth movement', async ({
  page,
  request
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.getByTestId('intro-overlay')).toHaveCount(0);
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe(
    'auto'
  );
  const response = await request.get('/Muhammed_Semih_Irmak_CV_2026.pdf');
  expect(response.status()).toBe(200);
  expect(response.headers()['content-type']).toContain('application/pdf');
});

test('page has no automatic WCAG A/AA accessibility violations', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/#contact');
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();
  expect(results.violations).toEqual([]);
});

test('a failed email request keeps the message and asks for a fresh CAPTCHA', async ({ page }) => {
  await page.goto('/#contact');
  await page.getByLabel('Your Name').fill('Test Visitor');
  await page.getByLabel('Your Email').fill('test@example.com');
  await page.getByLabel('Subject', { exact: true }).fill('A preserved subject');
  await page.getByLabel('Message', { exact: true }).fill('A preserved message');
  await page.route('https://api.emailjs.com/api/v1.0/email/send', (route) =>
    route.fulfill({ status: 500, body: 'Simulated failure' })
  );
  await page.getByRole('button', { name: 'Complete test CAPTCHA' }).click();
  await page.getByRole('button', { name: 'Send Message' }).click();
  await expect(
    page.getByText('Your message could not be sent. Please try again or email me directly.')
  ).toBeVisible();
  await expect(page.getByLabel('Message', { exact: true })).toHaveValue('A preserved message');
  await page.getByRole('button', { name: 'Send Message' }).click();
  await expect(
    page.getByText('Please complete the security verification.', { exact: true })
  ).toBeVisible();
});

test('mobile navigation opens from the keyboard and Escape restores focus', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const button = page.getByRole('button', { name: 'Open navigation' });
  await button.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('button', { name: 'Close navigation' })).toHaveAttribute(
    'aria-expanded',
    'true'
  );
  await page.locator('#mobile-navigation a').first().focus();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Open navigation' })).toBeFocused();
  await expect(page.locator('#mobile-navigation')).toBeHidden();
});

test('normal motion keeps typing, the GitHub border and skill focus effects', async ({
  page
}, testInfo) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/#hero');
  const text = page.getByTestId('typewriter-text');
  await expect(page.locator('.typewriter-cursor')).toBeVisible();
  const first = await text.textContent();
  await expect.poll(() => text.textContent()).not.toBe(first);
  if (testInfo.project.name === 'desktop') {
    const border = page.getByTestId('moving-border');
    await expect(border).toBeVisible();
    const glow = border.locator(':scope > div');
    const transform = await glow.evaluate((element) => getComputedStyle(element).transform);
    await expect
      .poll(() => glow.evaluate((element) => getComputedStyle(element).transform))
      .not.toBe(transform);
  }
  await page.locator('#skills').scrollIntoViewIfNeeded();
  const cards = page.locator('#skills .grid > div');
  await cards.first().hover();
  await expect
    .poll(() => cards.nth(1).evaluate((element) => getComputedStyle(element).filter))
    .toContain('blur');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.locator('.typewriter-cursor')).toHaveCount(0);
  await expect(page.getByTestId('moving-border')).toHaveCount(0);
  await expect
    .poll(() => cards.nth(1).evaluate((element) => getComputedStyle(element).filter))
    .toBe('none');
});
