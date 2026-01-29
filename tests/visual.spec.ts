import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test('homepage - full page screenshot', async ({ page }) => {
    await page.goto('/mockups/home.html');
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('homepage-full.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.05,
    });
  });

  test('homepage - above the fold', async ({ page }) => {
    await page.goto('/mockups/home.html');
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('homepage-above-fold.png', {
      maxDiffPixelRatio: 0.05,
    });
  });

  test('product detail - full page screenshot', async ({ page }) => {
    await page.goto('/mockups/product-detail.html');
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('product-detail-full.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.05,
    });
  });

  test('product detail - above the fold', async ({ page }) => {
    await page.goto('/mockups/product-detail.html');
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('product-detail-above-fold.png', {
      maxDiffPixelRatio: 0.05,
    });
  });
});

test.describe('Mobile Visual Regression', () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test('homepage mobile view', async ({ page }) => {
    await page.goto('/mockups/home.html');
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('homepage-mobile.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.05,
    });
  });

  test('product detail mobile view', async ({ page }) => {
    await page.goto('/mockups/product-detail.html');
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('product-detail-mobile.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.05,
    });
  });
});
