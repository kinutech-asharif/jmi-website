import { test, expect } from '@playwright/test';

test.describe('Homepage Mockup', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/mockups/home.html');
  });

  test('should load successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Japan Motor Import/);
  });

  test('should display header with navigation', async ({ page }) => {
    const header = page.locator('.header');
    await expect(header).toBeVisible();

    const navMain = page.locator('.nav-main');
    await expect(navMain).toBeVisible();
  });

  test('should display hero section', async ({ page }) => {
    const hero = page.locator('.hero, [class*="hero"]');
    await expect(hero.first()).toBeVisible();
  });

  test('should have no console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/mockups/home.html');
    await page.waitForLoadState('networkidle');

    expect(errors).toHaveLength(0);
  });

  test('should be responsive - mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/mockups/home.html');

    const body = page.locator('body');
    await expect(body).toBeVisible();
  });
});

test.describe('Product Detail Mockup', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/mockups/product-detail.html');
  });

  test('should load successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/B18C Type R Engine|Japan Motor Import/);
  });

  test('should display product header', async ({ page }) => {
    const header = page.locator('.header');
    await expect(header).toBeVisible();
  });

  test('should display breadcrumbs', async ({ page }) => {
    const breadcrumbs = page.locator('.breadcrumbs');
    await expect(breadcrumbs).toBeVisible();
  });

  test('should display product information', async ({ page }) => {
    const productContent = page.locator('body');
    await expect(productContent).toContainText(/Engine|B18C|Type R/i);
  });

  test('should have call-to-action buttons', async ({ page }) => {
    const ctaButtons = page.locator('.cta-call, [class*="cta"], button');
    await expect(ctaButtons.first()).toBeVisible();
  });

  test('should have no console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/mockups/product-detail.html');
    await page.waitForLoadState('networkidle');

    expect(errors).toHaveLength(0);
  });
});

test.describe('Cross-page Navigation', () => {
  test('root index should redirect to homepage', async ({ page }) => {
    await page.goto('/');

    await page.waitForURL(/mockups\/home\.html/);
    await expect(page).toHaveTitle(/Japan Motor Import/);
  });
});
