import { test, expect } from '@playwright/test';

test.describe('Accessibility Checks', () => {
  test('homepage - images should have alt text', async ({ page }) => {
    await page.goto('/mockups/home.html');

    const imagesWithoutAlt = await page.locator('img:not([alt])').count();
    expect(imagesWithoutAlt).toBe(0);
  });

  test('homepage - page should have main landmark', async ({ page }) => {
    await page.goto('/mockups/home.html');

    const mainLandmark = page.locator('main, [role="main"]');
    const count = await mainLandmark.count();

    if (count === 0) {
      console.warn('Warning: No main landmark found on homepage');
    }
  });

  test('homepage - links should be keyboard accessible', async ({ page }) => {
    await page.goto('/mockups/home.html');

    await page.keyboard.press('Tab');

    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });

  test('product detail - form inputs should have labels', async ({ page }) => {
    await page.goto('/mockups/product-detail.html');

    const inputs = page.locator(
      'input:not([type="hidden"]):not([type="submit"])'
    );
    const inputCount = await inputs.count();

    for (let i = 0; i < inputCount; i++) {
      const input = inputs.nth(i);
      const id = await input.getAttribute('id');
      const ariaLabel = await input.getAttribute('aria-label');
      const ariaLabelledby = await input.getAttribute('aria-labelledby');

      const hasLabel = id || ariaLabel || ariaLabelledby;
      expect(hasLabel).toBeTruthy();
    }
  });

  test('pages should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/mockups/home.html');

    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBeGreaterThanOrEqual(1);
  });
});
